import * as libraryName from "gulp-es3-typescript-library";
// const library = window.Didgah4DynamicDataLibrary;
// @ts-ignore
const lib:any = libraryName.lib;
const AnotherGrid = {
		headers: ["field 0"],
		// initialFormData: [
		// 	{
		// 		field 0: "Armin",
		// 	},
		// ],
		displayCellRenderer: function (d) {
			return {
				input: lib.createElement({
						tagName: "input",
						props: { fieldName: d.name, onclick: () => { }}
					})
				,
				cellProps: { colSpan: d.col },
			};
		},
		editCellRenderer: function (d) {
			return {
				input: lib.createElement({
						tagName: "input",
						props: { value: d.formData || "", fieldName: d.name },
					})
					,
				cellProps: { colSpan: d.col },
			};
		},
		rowsData: {
			fields: [{ name: "field 0", col: 1, Type: { IsBundle: false } }],
		},
	};

export default AnotherGrid;