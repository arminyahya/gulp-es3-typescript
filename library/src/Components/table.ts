import { isObjectDomElement, createElement, withErrorHandling } from '../utils'

type TableColumn = {
  title: string
  dataIndex: string
  key: any
  renderer?: (data: any) => any
}

interface Props {
  dataSource: any[]
  columns: TableColumn[]
}

const Table = ({ dataSource, columns }: Props) => {
  const dataToDisplay = columns.map((column) => column.dataIndex)
  /* table core elements */
  const tableDom = createElement({ tagName: 'table' })
  const tableHead = createElement({ tagName: 'thead' })
  const tableheadrow = createElement({ tagName: 'tr' })
  const tableBody = createElement({ tagName: 'tbody' })
  /* add table headers */
  for (const column of columns) {
    const th = createElement({ tagName: 'th' })
    th.innerHTML = column.title
    tableheadrow.appendChild(th)
  }
  /* add table data */
  for (const data of dataSource) {
    const tr = createElement({ tagName: 'tr' })
    const tds = []
    for (const d of dataToDisplay) {
      const td = createElement({ tagName: 'td' })
      const renderer = columns.find((column) => column.dataIndex === d).renderer
      if (renderer) {
        const rendererOutput = renderer(data)
        if (isObjectDomElement(rendererOutput)) {
          td.appendChild(rendererOutput)
        } else {
          td.innerHTML = rendererOutput
        }
      } else {
        td.innerHTML = data[d]
      }
      tds.push(td)
    }
    for (const td of tds) {
      tr.appendChild(td)
    }
    tableBody.appendChild(tr)
  }

  tableHead.appendChild(tableheadrow)
  tableDom.appendChild(tableHead)
  tableDom.appendChild(tableBody)
  return tableDom
}

export default withErrorHandling<({ ...args }: Props) => void>(Table, 'Table')
