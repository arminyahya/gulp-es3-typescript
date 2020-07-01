import * as $ from 'jquery'
import {
  isObjectDomElement,
  createElement,
  withErrorHandling,
  elementIdGenerator,
  currentDocumentObj,
} from '../../utils'
import { addNewRow, removeCell, settingCell, gridRowElement } from '../staticComponents'
import { mapIntoTD } from '../../Components/tableBaseOnRow'
import DynamicDataModal from '../dynamicDataModal'
import DidgahDeferred from '../../DidgahDeferred'
import { createAjaxReq } from '../../ajax'
import { InitAjaxAttributes } from '../../Components/select'

export interface TableCellType {
  input: HTMLElement
  cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>
}

export const toTD = (data: TableCellType, currentDocument: any = window.document) => {
  const td = createElement<HTMLTableDataCellElement>({
    tagName: 'td',
    props: { ...data.cellProps },
  })
  td.appendChild(data.input)
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
}
const DynamicDataGrid = ({
  headers = [],
  displayCellRenderer,
  editCellRenderer,
  rowsData = {},
  initialFormData = [],
  onUpdateFormData,
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
      ...[{ renderer: [toTD(addNewRow(onAdd))] }],
    ]
  }

  function getRowElements(index) {
    return [
      toTD(removeCell(index, onRemove)),
      ...mapIntoTD(
        rowsData.fields.map((fieldData, fieldI) => ({
          ...displayCellRenderer({
            ...fieldData,
            formData: formData[index][fieldData.name],
          }),
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
      const tr = gridRowElement()
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

    const modal = DynamicDataModal({
      mode: 'add',
      fields: rowsData.fields,
      formData: {},
      editCellRenderer,
      onSubmit,
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
    const modal = DynamicDataModal({
      mode: 'edit',
      fields: rowsData.fields,
      formData: formData[index],
      editCellRenderer,
      onSubmit: (d) => {
        console.log(d)
        changeRowData(index, d)
      },
    })
    if (modal) {
      document.getElementById('root').appendChild(modal)
    }
  }

  function changeRowData(index, data) {
    formData[index] = data
    if (onUpdateFormData) {
      onUpdateFormData(formData)
    }
    const tableBody = document.getElementById(tableBodyId)
    const tr = gridRowElement()
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
    const tableHead = createElement({ tagName: 'thead' })
    const tableheadrow = createElement({ tagName: 'tr' })
    const tableBody = createElement({ tagName: 'tbody', props: { id: tableBodyId } })
    tableheadrow.appendChild(createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } }))
    headers.forEach((header, index) => {
      let rowSpan = 1
      let colSpan = 1
      try {
        rowSpan = 1
        colSpan = rowsData.fields[index].col
      } catch {}
      const th = createElement({ tagName: 'th', props: { className: 'tableFloatingHeader', rowSpan, colSpan } })
      th.innerHTML = header
      tableheadrow.appendChild(th)
    })
    tableheadrow.appendChild(createElement({ tagName: 'th', props: { className: 'tableFloatingHeader' } }))
    /* add table data */
    for (const row of displayRows) {
      const tr = gridRowElement()
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

function onInit(url: string, attributes: InitAjaxAttributes) {
  const { EntityId, ReferenceFieldId } = attributes
  const dfd = DidgahDeferred.create<any>()
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
    component: DynamicDataGrid,
    onInit: onInit,
  },
  'DynamicData/Grid'
)
