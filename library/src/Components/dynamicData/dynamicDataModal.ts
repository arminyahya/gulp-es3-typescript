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
  const modal = SimpleModal()
  const formId = elementIdGenerator.gererate()
  const form = createElement({ tagName: 'form', props: { id: formId } })
  fields.map(function (field) {
    const wrap = createElement({ tagName: 'div' })
    field.formData = formData[field.name]
    if (field.Type.IsBundle) {
      const input = editCellRenderer(field).input
      // @ts-ignore
      wrap.appendChild(DynamicDataGrid(input))
    } else {
      wrap.appendChild(editCellRenderer(field).input)
    }
    form.appendChild(wrap)
  })
  modal.appendChild(form)
  const button = createElement({
    tagName: 'input',
    props: {
      type: 'submit',
      onclick: function (e) {
        onSubmit(formToJSON(`${formId}`))
        removeElement(formId)
      },
    },
  })
  modal.appendChild(button)
  return modal
}
