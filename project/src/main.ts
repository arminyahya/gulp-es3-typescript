import * as lib from "gulp-es3-typescript-library";
import AnotherGrid from "./anotherGrid";
const initialFormData = [
	{
		countryname: "netherlands",
		countrycode: "",
		gridField: [{ field0: "Armin" }],
	},
];
const grid = lib.DynamicDataGrid({
	headers: ["countryname", "countrycode", "gridField"],
	initialFormData,
	displayCellRenderer: function (d) {
		return {
			input: lib.createElement({
				tagName: "span",
				props: {},
				innerText: d.Type.IsBundle ? '#' : d.formData
			}),
			cellProps: { colSpan: d.col },
		};
	},
	editCellRenderer: function (d) {
		if (d.Type.IsBundle) {
			return {
				input: lib.DynamicDataGrid({
				// initialFormData:initialFormData[0].gridField,
					...AnotherGrid,
					...d
				}),
				cellProps: { colSpan: d.col },
			};
		} else {
			return {
				input: lib.withLabel(
					lib.createElement({
						tagName: "input",
						props: {
							fieldName: d.name,
							value: d.formData || ''
						}
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
			{ name: "countrycode", col: 3, Type: { IsBundle: false } },
			{ name: "gridField", col: 1, Type: { IsBundle: true } },
		],
	},
});
document.getElementById("root").appendChild(grid);
