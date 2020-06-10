export default function AnotherGrid(doc) {
	const grid = {
		headers: ["a"],
		initialFormData: [
			{
				a: "Armin",
			},
		],
		displayCellRenderer: function (d) {
			return {
				input: function () {
					return window.Didgah4DynamicDataLibrary.createElement({
						tagName: "span",
						props: { id: "from-date-datePicker2", style: { width: "240px" } },
						onMount: function () {
							setTimeout(() => {
								doc.getElementById(
									"from-date-datePicker2"
								).innerHTML = `<input type='text' style='display:none;' id='txt123456' name="${
									d.name || ""
								}" value="${
									d.value || ""
								}" /><ccc:datePicker showTime='true' forceShowTime='true'/>`;
							}, 3000);
						},
					});
				},
				cellProps: { colSpan: d.col },
			};
		},
		editCellRenderer: function (d, doc) {
			window.Didgah4DynamicDataLibrary.currentDocumentObj.setCurentDocument(
				doc
			);

			return {
				input: function () {
					return window.Didgah4DynamicDataLibrary.createElement({
						tagName: "input",
						props: { value: d.formData || "", fieldName: d.name },
					});
				},
				cellProps: { colSpan: d.col },
			};
		},
		rowsData: {
			fields: [{ name: "a", col: 1, Type: { IsBundle: false } }],
		},
	};
	return grid;
}
