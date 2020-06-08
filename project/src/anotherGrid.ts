export default function AnotherGrid() {
	const grid = {
		headers: ["a"],
		initialFormData: [
			{
				a: "Armin",
			}
		],
		displayCellRenderer: function (d) {
			return {
				input: () => window.Didgah4DynamicDataLibrary.createElement({
					currentDocument: d.currentDocument,
					tagName: "input",
					props: { value: d.formData, disabled: true },
				}),
				cellProps: { colSpan: d.col },
			};
		},
		editCellRenderer: function (d) {
			return {
				input: () => window.Didgah4DynamicDataLibrary.withLabel(
					window.Didgah4DynamicDataLibrary.createElement({
						tagName: "input",
						props: { value: d.formData || "", fieldName: d.name },
					}),
					d.name
				),
				cellProps: { colSpan: d.col },
			};
		},
		rowsData: {
			fields: [
				{ name: "a", col: 1, Type: { IsBundle: false } },
			],
		},
	};
	return grid;
}
