import { isObjectDomElement } from '../utils';

type TableColumn = {
	title: string,
	dataIndex: string,
	key: any,
	renderer?: (data: any) => any;
}

interface Props {
	dataSource: any[];
	columns: TableColumn[];
}

const Table = ({dataSource, columns}: Props) => {
	const dataToDisplay = columns.map((column) => column.dataIndex);
	/* table core elements */
	const tableDom = document.createElement('table');
	const tableHead = document.createElement('thead');
	const tableheadrow = document.createElement('tr');
	const tableBody = document.createElement('tbody');
	/* add table headers */
	for(let column of columns) {
		console.log(column);
		let th  = document.createElement('th');
		th.innerHTML = column.title;
		tableheadrow.appendChild(th);
	}
	/* add table data */
	for(let data of dataSource) {
		let tr  = document.createElement('tr');
		const tds = [];
		for(let d of dataToDisplay ) {
			let td = document.createElement('td');
			const renderer = columns.find((column) => column.dataIndex === d).renderer;
			if(renderer) {
				const rendererOutput = renderer(data);
				console.log(rendererOutput.scopeName);
				if(isObjectDomElement(rendererOutput)) {
					td.appendChild(rendererOutput);
				} else {
					td.innerHTML = rendererOutput;
				}
			} else {
				td.innerHTML = data[d];
			}
			tds.push(td);
		}
		for(let td of tds) {
			tr.appendChild(td);
		}
		tableBody.appendChild(tr);
	}

	tableHead.appendChild(tableheadrow);
	tableDom.appendChild(tableHead);
	tableDom.appendChild(tableBody);
	return tableDom;
}

export default Table;