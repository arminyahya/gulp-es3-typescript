const library = window.Didgah4DynamicDataLibrary;

const initialFormData = [
	{
		countryname: "netherlands",
		countrycode: "20",
	},
];
const table = library.DynamicDataGrid({
	headers: ["countryname", "countrycode"],
	initialFormData,
	displayCellRenderer: function (d) {
		return {
			input: library.createElement({
				tagName: "input",
				props: { value: d.formData, disabled: true },
			}),
			cellProps: { colSpan: d.col },
		};
	},
	editCellRenderer: function (d) {
		return {
			input: library.withLabel(
				library.createElement({
					tagName: "input",
					props: { value: d.formData || "", fieldName: d.name},
				}),
				d.name
			),
			cellProps: { colSpan: d.col },
		};
	},
	rowsData: {
		fields: [
			{ name: "countryname", col: 1 },
			{ name: "countrycode", col: 3 },
		],
	},
});

document.getElementById("root").appendChild(table);

