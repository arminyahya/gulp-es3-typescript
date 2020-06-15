import { TableCellType } from './gride'
import SimpleModal, { removeElement } from '../simple-modal'
import { elementIdGenerator, createElement, dialogFormToJSON, formToJSON } from '../../utils'
import DynamicDataGrid from './gride'

interface Props {
  fields: any[]
  formData: any
  editCellRenderer: (d) => TableCellType
  onSubmit: (d) => void
}

export default function DynamicDataModal({ fields, formData, editCellRenderer, onSubmit }: Props) {
  const { modal, onClose } = SimpleModal()
  const formId = elementIdGenerator.gererate()
  const form = createElement({ tagName: 'form', props: { id: formId } })
  const bundleFields = fields.filter((field) => field.Type.IsBundle === true).map((field) => field.name)
  fields.map(function (field) {
    const wrap = createElement({ tagName: 'div' })
    field.formData = formData[field.name]
    if (field.Type.IsBundle) {
      wrap.appendChild(
        editCellRenderer({
          ...field,
          onUpdateFormData: (d) => {
            formData[field.name] = d
          },
        }).input
      )
    } else {
      wrap.appendChild(editCellRenderer(field).input)
    }
    form.appendChild(wrap)
  })
  modal.appendChild(form)
  const buttonWrap = createElement({ tagName: 'div', props: { className: 'center' } })

  const button = createElement({
    tagName: 'input',
    props: {
      type: 'submit',
      className: 'submit-button',
      onclick: function (e) {
        console.log(formData);
        console.log(bundleFields.map((field) => formData[field.name]))
        console.log({ ...bundleFields.map((field) => formData[field.name]), ...formToJSON(`#${formId}`) })
        onSubmit(formToJSON(`#${formId}`))
        onClose()
      },
    },
  })
  buttonWrap.appendChild(button)
  modal.appendChild(buttonWrap)
  return modal
}
