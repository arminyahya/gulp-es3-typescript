import * as $ from 'jquery'
import { isObjectDomElement, createElement, withErrorHandling, elementIdGenerator } from '../../utils'
import { addNewRow, removeCell, settingCell } from './staticComponents'
import { Modal, TableBaseOnRow } from '..'
import dynamicDataForm from '../dynamicDataForm'
import { mapIntoTD } from '../tableBaseOnRow'

export interface TableCellType {
  input: () => HTMLElement
  cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>
}

export const toTD = (data: TableCellType, currentDocument: any = window.document) => {
  const td = createElement<HTMLTableDataCellElement>({
    currentDocument: currentDocument,
    tagName: 'td',
    props: { ...data.cellProps },
  })
  td.appendChild(data.input())
  // this work if document changed but not for event listeners
  // td.innerHTML = data.input.outerHTML
  return td
}

type TableRow = {
  renderer: HTMLElement[]
}

interface Props {
  headers: string[]
  displayCellRenderer: (d) => TableCellType
  editCellRenderer: (d) => TableCellType
  rowsData: any /* specific interface later */
  initialFormData?: any[]
  onUpdateFormData?: (d) => void
  currentDocument?: any
}

const DynamicDataGrid = ({
  headers = [],
  displayCellRenderer,
  editCellRenderer,
  rowsData = {},
  initialFormData = [],
  onUpdateFormData,
  currentDocument = window.document,
}: Props) => {
  const tableId = elementIdGenerator.gererate()
  const tableBodyId = elementIdGenerator.gererate()
  const formData = [...initialFormData]
  const displayRows: TableRow[] = getDisplayRows()

  function getDisplayRows() {
    return [
      ...formData.map((row, i) => ({
        renderer: getRowElements(i),
      })),
      ...[addNewRow(onAdd)],
    ]
  }

  function getRowElements(index) {
    return [
      toTD(removeCell(index, onRemove)),
      ...mapIntoTD(
        rowsData.fields.map((fieldData, fieldI) => ({
          input: displayCellRenderer({
            ...fieldData,
            formData: formData[index][fieldData.name],
            currentDocument: currentDocument,
          }).input,
          cellProps: {},
        }))
      ),
      toTD(settingCell(index, onSetting)),
    ]
  }

  function onAdd() {
    const onSubmit = function (data) {
      formData.push(data)
      if (onUpdateFormData) {
        onUpdateFormData(formData)
      }
      const tr = createElement({ currentDocument: currentDocument, tagName: 'tr', props: {} })
      const removeTd = toTD(removeCell(formData.length - 1, onRemove))
      tr.appendChild(removeTd)
      for (const item in data) {
        const mainTd = toTD(
          displayCellRenderer({
            ...rowsData.fields.find(function (field) {
              return field.name === item
            }),
            formData: data[item],
          })
        )
        tr.appendChild(mainTd)
      }
      const settingTd = toTD(settingCell(formData.length - 1, onSetting))
      tr.appendChild(settingTd)
      document.getElementById(tableBodyId).insertBefore(tr, document.getElementById(tableBodyId).lastChild)
    }
    const modal = Modal({
      htmlSrc: './dynamic-data-modal.html',
      dialogArguments: { fields: rowsData.fields, formData, editCellRenderer, onSubmit },
    })
    document.getElementById('root').appendChild(modal)
  }

  function onRemove(index: number) {
    formData.splice(index, 1)
    if (onUpdateFormData) {
      onUpdateFormData(formData)
    }
    const tableBody = document.getElementById(tableBodyId)
    tableBody.removeChild(tableBody.childNodes[index])
  }

  function onSetting(index) {
    const modal = Modal({
      htmlSrc: './dynamic-data-modal.html',
      dialogArguments: {
        fields: rowsData.fields,
        formData: formData[index],
        editCellRenderer,
        onSubmit: (d) => {
          changeRowData(index, d)
        },
      },
    })
    if (modal) {
      document.getElementById('root').appendChild(modal.cloneNode(true))
    }
  }

  function changeRowData(index, data) {
    formData[index] = data
    if (onUpdateFormData) {
      onUpdateFormData(formData)
    }
    const tableBody = document.getElementById(tableBodyId)
    const tr = createElement({ currentDocument: currentDocument, tagName: 'tr' })
    for (const td of getRowElements(index)) {
      tr.appendChild(td)
    }
    tableBody.insertBefore(tr, tableBody.childNodes[index])
    tableBody.removeChild(tableBody.childNodes[index + 1])
  }

  function firstRender() {
    /* table core elements */
    const tableDom = createElement<HTMLTableElement>({
      tagName: 'table',
      props: { className: 'table-base-row', id: tableId, dir: 'rtl' },
    })
    const tableHead = createElement({ currentDocument: currentDocument, tagName: 'thead' })
    const tableheadrow = createElement({ currentDocument: currentDocument, tagName: 'tr' })
    const tableBody = createElement({ currentDocument: currentDocument, tagName: 'tbody', props: { id: tableBodyId } })
    tableheadrow.appendChild(createElement({ currentDocument: currentDocument, tagName: 'th' }))
    for (const header of headers) {
      const th = createElement({ currentDocument: currentDocument, tagName: 'th' })
      th.innerHTML = header
      tableheadrow.appendChild(th)
    }

    /* add table data */
    for (const row of displayRows) {
      const tr = createElement({ currentDocument: currentDocument, tagName: 'tr', props: {} })
      for (const td of row.renderer) {
        tr.appendChild(td)
      }
      tableBody.appendChild(tr)
    }
    tableHead.appendChild(tableheadrow)
    tableDom.appendChild(tableHead)
    tableDom.appendChild(tableBody)
    return tableDom
  }

  return firstRender()
}

export default withErrorHandling<({ ...args }: Props) => void>(DynamicDataGrid, 'DynamicData/Grid')
