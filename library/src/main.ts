import DynamicDataTable, { mapIntoTD } from "./Components/dynamicDataTable";
import { renderIntoRoot } from "./utils";
import { formNumberInput, firstNameInput, lastNameInput, fromDateInput, toDateInput, statusInput } from "./examples/formExample/inputs";
import dynamicDataForm from "./Components/dynamicDataForm";

const rowOneTableMainSource =
{
	formNumber: { value: 'armin', type: 'text', name: 'formNumber' },
	firstName: { value: 'armin', type: 'text', name: 'firstName' },
	lastName: { value: 'armin', type: 'text', name: 'lastName' },
}

const rowTwoTableMainSource =
{
	fromDate: { value: '2020-2-2 00:00', type: 'text', name: 'fromDate' },
	toDate: { value: '', type: 'text', name: 'toDate' },
	status: { value: '', options: [{ value: 1, label: 'accepted' }, { value: 2, label: 'rejected' }], name: 'status' },
};

const mainRows = [
	{
		renderer: mapIntoTD([
			{ input: formNumberInput(rowOneTableMainSource.formNumber)},
			{ input: firstNameInput(rowOneTableMainSource.firstName) },
			{ input: lastNameInput(rowOneTableMainSource.lastName) },
		])
	},
	{
		renderer: mapIntoTD([
			{ input: fromDateInput(rowTwoTableMainSource.fromDate) },
			{ input: toDateInput(rowTwoTableMainSource.toDate) },
			{ input: statusInput(rowTwoTableMainSource.status) },
		])    
	},
]  
// @ts-ignore
window.DynamicDataTable = DynamicDataTable;
// @ts-ignore
// renderIntoRoot(DynamicDataTable({ initialRows: mainRows })) 