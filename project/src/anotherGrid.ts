export default function AnotherGrid() {
	const grid = {
		headers: ["a"],
		initialFormData: [
			{
				a: "Armin",
			}
		],
		displayCellRenderer: function (d) {
			var inp = document.createElement('input');
			inp.setAttribute('value', '??');

			inp.setAttribute('disabled', 'true');
			return  {
			input: inp,
			cellProps: { },
			};
		},
		editCellRenderer: function (d) {
			return {
				input: window.Didgah4DynamicDataLibrary.withLabel(
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
