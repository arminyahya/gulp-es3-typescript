import AnotherGrid from './anotherGrid';
const library = window.Didgah4DynamicDataLibrary;

const initialFormData = [
	{
		countryname: "netherlands",
		countrycode: "",
		grid1: 'stupid'
	},
];
const grid = library.DynamicDataGrid({
	currentDocument: window.document,
	headers: ["countryname", "date", 'grid1'],
	initialFormData,
	displayCellRenderer: function (d, doc) {
		return {
			input: window.Didgah4DynamicDataLibrary.createElement({
				tagName: 'span',
				props: { id: d.name === 'grid1' ? 'from-date-datePicker' : '', style: { width: '240px' } },
				onMount: function () {
					window.document.getElementById(
						"from-date-datePicker"
					).innerHTML = `<input type='text' style='display:none;' id='txt123456' name="${
						d.name || ""
					}" value="${
						d.value || ""
					}" /><ccc:datePicker showTime='true' forceShowTime='true'/>`;
				},
		}),
			cellProps: { colSpan: d.col },
		};
	},
	editCellRenderer: function (d) {
		if(d.Type.IsBundle) {
			return 	{ input: AnotherGrid(document), cellProps: { colSpan: d.col}}
		} else {
			return {
				input: library.createElement({
						tagName: "input",
						props: { type: 'button', onclick: function(){alert('I Worked?!')}}
					})
				,
					cellProps: { colSpan: d.col },
				};
			}
	},
	rowsData: {
		fields: [
			{ name: "countryname", col: 1, Type: { IsBundle: false } },
			{ name: "date", col: 3, Type: { IsBundle: false } },
			{ name: "grid1", col: 1,  Type: { IsBundle: true } },
		],
	},
});
document.getElementById("root").appendChild(grid);
