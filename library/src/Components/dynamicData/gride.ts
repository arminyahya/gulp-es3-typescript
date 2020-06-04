import * as $ from 'jquery';
import { isObjectDomElement, createElement, withErrorHandling, elementIdGenerator } from '../../utils';
import { addNewRow, removeCell, settingCell } from './staticComponents';
import { Modal, TableBaseOnRow } from '..';
import dynamicDataForm from '../dynamicDataForm';

type TableRow = {
  renderer: HTMLElement[];
};

interface Props {
  headers: string[];
  displayCellRenderer: (d) => TableCellType;
  editCellRenderer: (d) => TableCellType;
  rowsData: any /* specific interface later */;
  initialFormData?: any[];
}

const DynamicDataGrid = ({
  headers,
  displayCellRenderer,
  editCellRenderer,
  rowsData = {},
  initialFormData = [],
}: Props) => {
  const tableId = elementIdGenerator.gererate();
  const tableBodyId = elementIdGenerator.gererate();

  const displayRows: TableRow[] = [
    ...initialFormData.map((row, i) => ({
      renderer: [
        ...mapIntoTD([removeCell(i, onRemove)]),
        ...mapIntoTD(
          rowsData.fields.map((fieldData, fieldI) =>
            displayCellRenderer({ ...fieldData, formData: initialFormData[i][fieldData.name] }),
          ),
        ),
        ...mapIntoTD([settingCell(i, onSetting)]),
      ],
    })),
    ...[addNewRow(onAdd)],
  ];

  const formData = [...initialFormData];

  function onAdd() {
    const modal = Modal({
      htmlSrc: './dynamic-data-modal.html',
      dialogArguments: { fields: rowsData.fields, editCellRenderer },
    });
    document.getElementById('root').appendChild(modal);
  }

  function onRemove(index: number) {
    const tableBody = document.getElementById(tableBodyId);
    tableBody.removeChild(tableBody.childNodes[index]);
  }

  function onSetting(index) {
    const modal = Modal({
      htmlSrc: './dynamic-data-modal.html',
      dialogArguments: { fields: rowsData.fields, formData: formData[index], changeRowData },
    });
    document.getElementById('root').appendChild(modal);
  }

  function changeRowData(index, data) {
    formData[index] = data;
    for (const property in data) {
      $(`input[name='${property}']`).value = data[property];
    }
  }

  function firstRender() {
    /* table core elements */
    const tableDom = createElement<HTMLTableElement>({
      tagName: 'table',
      props: { className: 'table-base-row', id: tableId, dir: 'rtl' },
    });
    const tableHead = createElement({ tagName: 'thead' });
    const tableheadrow = createElement({ tagName: 'tr' });
    const tableBody = createElement({ tagName: 'tbody', props: { id: tableBodyId } });
    tableheadrow.appendChild(createElement({ tagName: 'th' }));
    for (const header of headers) {
      const th = createElement({ tagName: 'th' });
      th.innerHTML = header;
      tableheadrow.appendChild(th);
    }

    /* add table data */
    for (const row of displayRows) {
      const tr = createElement({ tagName: 'tr', props: {} });
      for (const td of row.renderer) {
        tr.appendChild(td);
      }
      tableBody.appendChild(tr);
    }
    tableHead.appendChild(tableheadrow);
    tableDom.appendChild(tableHead);
    tableDom.appendChild(tableBody);
    return tableDom;
  }

  return firstRender();
};

export interface TableCellType {
  input: HTMLElement;
  cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>;
}

export const mapIntoTD = (data: TableCellType[]) => {
  return data.map((item) => {
    const td = createElement<HTMLTableDataCellElement>({ tagName: 'td', props: { ...item.cellProps } });
    td.appendChild(item.input);
    return td;
  });
};

export default withErrorHandling<({ ...args }: Props) => void>(DynamicDataGrid, 'TableBasedRow');
