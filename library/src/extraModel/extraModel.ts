import { getComponent } from './getComponent'
import Container = ExtraModel.Container
import Control = ExtraModel.Control
import Component = ExtraModel.Component
import FieldsetAttribute = ExtraModel.Containers.FieldsetAttribute
import { ControlType, ContainerCode, ControlsCode } from '../enums'
import { ComponentMode } from './utils'
import Fieldset from '../Components/fieldset'
import { createElement } from '../utils'

type ExtraModelFormOnCreateArg = {
  validate?: () => PromiseLike<{ errors: any[]; values: Object }>
  setFieldsValue?: (value: Object) => void
}

interface ExtraModelProps {
  formDescriptor: Container[]
  controlFactory?: (control: Component) => any // 'ReactNode'
  mode?: ComponentMode
  downloadUrl?: string
  onCreated?: (form: ExtraModelFormOnCreateArg) => void
  form: any
}

export default function ExtraModel({
  formDescriptor,
  controlFactory = () => null,
  mode = 'edit',
  downloadUrl = '',
  onCreated = () => null,
  form,
}: ExtraModelProps) {
  onCreated({
    validate: () => {
      return new Promise<{ errors: any[]; values: Object }>((executor) => {
        form.validateFields((errors, values) => {
          executor({ errors, values })
        })
      })
    },
    setFieldsValue: (value: Object) => form.setFieldsValue(value),
  })

  function getEditMode(): boolean {
    return mode === 'edit'
  }

  function renderGroupedItems() {
    return formDescriptor.map((container) => renderControl(container))
  }

  function renderControl(control?: Component | Container) {
    if (control.Type === ControlType.Container) {
      return getContainer(control as Container)
    } else if (control.Type === ControlType.Component) {
      return renderComponent(control as Component)
    }
    throw `Renderer was not found for controlType = ${control.Type}`
  }

  function renderComponent(component: Component) {
    let extraModelComponent = getComponent(component, controlFactory)

    const passDownloaderUrl = component.Code === ControlsCode.FileCode.toString() || ControlsCode.ImageCode

    if (!extraModelComponent) return null

    const otherProps = Object.assign(
      { mode },
      component.Attributes,
      passDownloaderUrl ? { downloadUrl: downloadUrl.replace('$fieldName$', component.Label) } : {}
    )

    ;(component.Rules || []).forEach((map) => {
      if (!!map['pattern']) map['pattern'] = new RegExp(map['pattern'])
    })
    return extraModelComponent
    // 	return <FormItem label={component.Label} key={component.DataIndex}>
    // 		{form.getFieldDecorator(component.DataIndex, { rules: !this.editMode ? [] : getDesiredValidationRules(component.Code, component.Required, component.Rules) })(React.cloneElement(extraModelComponent, otherProps))}
    // 	</FormItem>
    // }
  }

  function getContainer(container: Container | any) {
    if (container.Code === ContainerCode.Fieldset.toString()) {
      const fieldSet = Fieldset()
      container.Children.forEach(function (child) {
        fieldSet.appendChild(renderControl(child))
      })
      return fieldSet
      // return <Fieldset legend={(container.Attributes as FieldsetAttribute).Title} key={container.Identifier} flex={false}>
      //
      // </Fieldset>
    } else if (container.Code === ContainerCode.FormRow.toString()) {
      const formRow = createElement({ tagName: 'div' })
      container.Children.forEach(function (child) {
        console.log(renderControl(child))
        if (renderControl(child)) {
          formRow.appendChild(renderControl(child))
        }
      })
      return formRow
      // return <FormRow key={container.Identifier}>
      // 	{container.Children.map(child => this.renderControl(child))}
      // </FormRow>
    }
  }

  function render() {
    // return (
    // 	<Form>
    // 		{this.renderGroupedItems()}
    // 	</Form>
    // )
  }
  return renderGroupedItems()
}
