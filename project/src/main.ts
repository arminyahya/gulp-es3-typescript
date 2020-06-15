import * as libraryName from "gulp-es3-typescript-library";
import AnotherGrid from "./anotherGrid";
// const library = window.Didgah4DynamicDataLibrary;
// @ts-ignore
const lib:any = libraryName.lib;
const initialFormData = [
	{
		countryname: "netherlands",
		countrycode: "",
		gridField: [{ a: "Armin" }],
	},
];
const grid = lib.DynamicDataGrid({
	headers: ["countryname", "date", "gridField"],
	initialFormData,
	displayCellRenderer: function (d) {
		console.log(d.name, d.col)
		return {
			input: lib.createElement({
				tagName: "span",
				props: {
					id: d.name === "date" ? "from-date-datePicker" : "",
					style: { width: "240px" },
				},
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
		if (d.Type.IsBundle) {
			return {
				input: lib.DynamicDataGrid({
					...AnotherGrid,
					onUpdateFormData: d.onUpdateFormData,
				}),
				cellProps: { colSpan: d.col },
			};
		} else {
			return {
				input: lib.withLabel(
					lib.createElement({
						tagName: "input",
					}),
					d.name
				),
				cellProps: { colSpan: d.col },
			};
		}
	},
	rowsData: {
		fields: [
			{ name: "countryname", col: 1, Type: { IsBundle: false } },
			{ name: "date", col: 3, Type: { IsBundle: false } },
			{ name: "gridField", col: 1, Type: { IsBundle: true } },
		],
	},
});
document.getElementById("root").appendChild(grid);
