import { createElement, withErrorHandling } from '../utils'
import DidgahDeferred from '../DidgahDeferred'
import { createAjaxReq } from '../ajax'

type ValueLabel = {
  value: any
  label: string
  data?: any
}

interface Props {
  options: ValueLabel[]
  value?: ValueLabel
  name?: string
}

function Select({ options, value, name }: Props) {
  const select = createElement({ tagName: 'select', props: { value: value, name: name } })
  options.map(function (option, i) {
    const domOption = createElement({ tagName: 'option' })
    domOption.setAttribute('value', option.value)
    domOption.innerHTML = option.label
    select.appendChild(domOption)
  })
  return select
}

export type InitAjaxAttributes = {
  EntityId: any
  ReferenceFieldId: any
}

function onInit(url: string, attributes: InitAjaxAttributes) {
  const { EntityId, ReferenceFieldId } = attributes
  const dfd = DidgahDeferred.create<ValueLabel[]>()
  createAjaxReq(url, 'post', {
    EntityId: EntityId,
    ReferenceFieldId: ReferenceFieldId,
  }).done((result: Array<{ key; value }>) => {
    const dataSource = result.map((item) => {
      return { value: item.key, label: item.value || '' }
    })
    dfd.resolve(dataSource)
  })

  return dfd.promise()
}

export default withErrorHandling<({ ...args }: Props) => void>(
  {
    component: Select,
    onInit: onInit,
  },
  'Select'
)
