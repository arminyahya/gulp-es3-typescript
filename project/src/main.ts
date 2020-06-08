import AnotherGrid from './anotherGrid';
window.jQuery(document).ready(() => {
const library = window.Didgah4DynamicDataLibrary;

const initialFormData = [
	{
		countryname: "netherlands",
		countrycode: "20",
		grid1: 'stupid'
	},
];
const grid = library.DynamicDataGrid({
	headers: ["countryname", "countrycode", 'grid1'],
	initialFormData,
	displayCellRenderer: function (d) {
		return {
			input: () => library.createElement({
				tagName: "input",
				props: { value: d.formData, disabled: true },
			}),
			cellProps: { colSpan: d.col },
		};
	},
	editCellRenderer: function (d, currentDocument) {
		if(d.Type.IsBundle) {
			return 	{ input: AnotherGrid(), cellProps: { colSpan: d.col}}
			
		} else {
			return {
				input: () => library.withLabel(
					library.createElement({
						currentDocument: currentDocument,
						tagName: "input",
						// @ts-ignore
						props: { type: 'button' || "", onclick: () => {alert(window.arminAttribute()); } },
					}),
					d.name,
					currentDocument,
					),
					cellProps: { colSpan: d.col },
				};
			}
	},
	rowsData: {
		fields: [
			{ name: "countryname", col: 1, Type: { IsBundle: false } },
			{ name: "countrycode", col: 3, Type: { IsBundle: false } },
			{ name: "grid1", col: 1,  Type: { IsBundle: true } },
		],
	},
});
document.getElementById("root").appendChild(grid);
})
