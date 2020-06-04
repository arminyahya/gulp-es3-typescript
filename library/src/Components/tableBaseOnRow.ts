import { isObjectDomElement, createElement, withErrorHandling } from '../utils';
type TableRow = {
  renderer: HTMLElement[];
};

interface Props {
  rows: TableRow[];
}

const TableBasedRow = ({ rows }: Props) => {
  /* table core elements */
  const tableDom = createElement<HTMLTableElement>({ tagName: 'table', props: { className: 'table-base-row' } });
  const tableBody = createElement({ tagName: 'tbody' });
  /* add table data */
  for (const row of rows) {
    const tr = createElement({ tagName: 'tr', props: {} });
    for (const td of row.renderer) {
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  tableDom.appendChild(tableBody);
  return tableDom;
};

interface data {
  input: HTMLElement;
  cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>;
}
export const mapIntoTD = (data: data[]) => {
  return data.map((item) => {
    const td = createElement<HTMLTableDataCellElement>({ tagName: 'td', props: { ...item.cellProps } });
    td.appendChild(item.input);
    return td;
  });
};

export default withErrorHandling<({ ...args }: Props) => void>(TableBasedRow, 'TableBasedRow');
