import { TableCellType } from './gride'
import SimpleModal, { removeElement } from '../simple-modal'
import { elementIdGenerator, createElement, dialogFormToJSON, formToJSON } from '../../utils'

interface Props {
  mode: 'add' | 'edit'
  fields: any[]
  formData: any
  editCellRenderer: (d) => TableCellType
  onSubmit: (d) => void
}

export default function DynamicDataModal({ mode, fields, formData = {}, editCellRenderer, onSubmit }: Props) {
  const { modal, onClose } = SimpleModal()
  const formId = elementIdGenerator.gererate()
  const form = createElement({ tagName: 'form', props: { id: formId } })
  fields.map(function (field) {
    const wrap = createElement({ tagName: 'div' })
    field.formData = formData[field.name]
    if (field.Type.IsBundle) {
      wrap.appendChild(
        editCellRenderer({
          ...field,
          initialFormData: Object.keys(formData).length > 0 ? formData[field.name] : [],
          onUpdateFormData: (d) => {
            if (field.name) formData[field.name] = d
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
        onSubmit({ ...formData, ...formToJSON(`#${formId}`) })
        onClose()
      },
    },
  })
  buttonWrap.appendChild(button)
  modal.appendChild(buttonWrap)
  return modal
}
