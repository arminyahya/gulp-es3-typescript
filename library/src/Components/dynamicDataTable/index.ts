import { isObjectDomElement, createElement, withErrorHandling, elementIdGenerator } from '../../utils';
import { addNewRow, emptyRow, removeCell, settingCell } from './staticComponents';
import { Modal, TableBaseOnRow } from '..';
import dynamicDataForm from '../dynamicDataForm';
import { formNumberInput, firstNameInput, lastNameInput } from '../../examples/formExample/inputs';

type TableRow = {
	renderer: HTMLElement[];
}

interface Props {
	initialRows: TableRow[]
}

const DynamicDataTable = ({ initialRows = [] }: Props) => {
	const tableId = elementIdGenerator.gererate();
	const tableBodyId = elementIdGenerator.gererate();
	let rows: TableRow[] = [...initialRows.map((row, i) => ({ ...row, renderer: [...mapIntoTD([removeCell(i, onRemove)]), ...row.renderer, ...mapIntoTD([settingCell(i, onSetting)])] })), ...[addNewRow(onAdd)]];

	function onAdd() {
		const newRowIndex = document.getElementById(tableBodyId).childNodes.length - 1;
		const newEmptyRow = emptyRow(newRowIndex, onRemove, onSetting);
		let tr = createElement({ tagName: 'tr', props: {} });
		for (let td of newEmptyRow.renderer) {
			tr.appendChild(td);
		}
		const tableBody = document.getElementById(tableBodyId);
		tableBody.insertBefore(tr, tableBody.lastChild);
	}

	function onRemove(index: number) {
		const tableBody = document.getElementById(tableBodyId);
		tableBody.removeChild(tableBody.childNodes[index]);
	}

	function onSetting(index) {
		const form = createElement({ tagName: 'form' });
		const rowOneTableMainSource =
		{
			formNumber: { value: 'armin', type: 'text', name: 'formNumber' },
			firstName: { value: 'armin', type: 'text', name: 'firstName' },
			lastName: { value: 'armin', type: 'text', name: 'lastName' },
		}

		const table = DynamicDataTable({
			initialRows: [{
				renderer: mapIntoTD([
					{ input: formNumberInput(rowOneTableMainSource.formNumber) },
					{ input: firstNameInput(rowOneTableMainSource.firstName) },
					{ input: lastNameInput(rowOneTableMainSource.lastName) },
				])
			}]
		})
		form.appendChild(table);
		const modal = Modal({ htmlSrc: './dynamic-data-modal.html', dialogArguments: { formType: 2 } });
		document.getElementById('root').appendChild(modal);
	}

	function firstRender() {
		/* table core elements */
		const tableDom = createElement<HTMLTableElement>({ tagName: 'table', props: { className: 'table-base-row', id: tableId, dir: 'rtl' } });
		const tableBody = createElement({ tagName: 'tbody', props: { id: tableBodyId } });
		/* add table data */
		for (let row of rows) {
			let tr = createElement({ tagName: 'tr', props: {} });
			for (let td of row.renderer) {
				tr.appendChild(td);
			}
			tableBody.appendChild(tr);
		}
		tableDom.appendChild(tableBody);
		return tableDom;
	}

	return firstRender();
}

interface data {
	input: HTMLElement,
	cellProps?: Partial<Omit<HTMLTableDataCellElement, 'style'> & { style?: Partial<CSSStyleDeclaration> }>
}

export const mapIntoTD = (data: data[]) => {
	return data.map((item) => {
		let td = createElement<HTMLTableDataCellElement>({ tagName: 'td', props: { ...item.cellProps } });
		td.appendChild(item.input);
		return td;
	})
}

export default withErrorHandling(DynamicDataTable, 'TableBasedRow');