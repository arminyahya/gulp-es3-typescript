import * as $ from 'jquery'
import { isObjectDomElement, createElement, withErrorHandling, elementIdGenerator } from '../../utils'
import { addNewRow, removeCell, settingCell } from './staticComponents'
import { Modal, TableBaseOnRow } from '..'
import dynamicDataForm from '../dynamicDataForm'

type TableRow = {
  renderer: HTMLElement[]
}

interface Props {
  headers: string[]
  displayCellRenderer: (d) => TableCellType
  editCellRenderer: (d) => TableCellType
  rowsData: any /* specific interface later */
  initialFormData?: any[]
}

const DynamicDataGrid = ({
  headers,
  displayCellRenderer,
  editCellRenderer,
  rowsData = {},
  initialFormData = [],
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

  function onAdd() {
    const onSubmit = function (data) {
      formData.push(data)
      const tr = createElement({ tagName: 'tr', props: {} })
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
    document.getElementById('root').appendChild(modal)
  }

  function changeRowData(index, data) {
    formData[index] = data
    const tableBody = document.getElementById(tableBodyId)
    const tr = createElement({ tagName: 'tr' })
    for (const td of getRowElements(index)) {
      tr.appendChild(td)
    }
    tableBody.insertBefore(tr, tableBody.childNodes[index])
    tableBody.removeChild(tableBody.childNodes[index + 1])
  }

  function getRowElements(index) {
    return [
      toTD(removeCell(index, onRemove)),
      ...mapIntoTD(
        rowsData.fields.map((fieldData, fieldI) =>
          displayCellRenderer({ ...fieldData, formData: formData[index][fieldData.name] })
        )
      ),
      toTD(settingCell(index, onSetting)),
    ]
  }

  function firstRender() {
    /* table core elements */
    const tableDom = createElement<HTMLTableElement>({
      tagName: 'table',
      props: { className: 'table-base-row', id: tableId, dir: 'rtl' },
    })
    const tableHead = createElement({ tagName: 'thead' })
    const tableheadrow = createElement({ tagName: 'tr' })
    const tableBody = createElement({ tagName: 'tbody', props: { id: tableBodyId } })
    tableheadrow.appendChild(createElement({ tagName: 'th' }))
    for (const header of headers) {
      const th = createElement({ tagName: 'th' })
      th.innerHTML = header
      tableheadrow.appendChild(th)
    }

    /* add table data */
    for (const row of displayRows) {
      const tr = createElement({ tagName: 'tr', props: {} })
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

export interface TableCellType {
  input: HTMLElement
  cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>
}

export const mapIntoTD = (data: TableCellType[]) => {
  return data.map((item) => {
    return toTD(item)
  })
}

export const toTD = (data: TableCellType) => {
  const td = createElement<HTMLTableDataCellElement>({ tagName: 'td', props: { ...data.cellProps } })
  td.appendChild(data.input)
  return td
}
export default withErrorHandling<({ ...args }: Props) => void>(DynamicDataGrid, 'TableBasedRow')
