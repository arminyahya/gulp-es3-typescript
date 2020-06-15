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
  console.log(onSubmit)
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
          onUpdateFormData: (d) => {
            console.log(d)
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
        console.log({ ...formData[0], ...formToJSON(`#${formId}`) })
        onSubmit(formToJSON(`#${formId}`))
        // onClose()
      },
    },
  })
  buttonWrap.appendChild(button)
  modal.appendChild(buttonWrap)
  return modal
}
