const AnotherGrid = {
		headers: ["a"],
		// initialFormData: [
		// 	{
		// 		a: "Armin",
		// 	},
		// ],
		displayCellRenderer: function (d) {
			return {
				input: window.Didgah4DynamicDataLibrary.createElement({
						tagName: "input",
						props: { fieldName: d.name, onclick: () => { }}
					})
				,
				cellProps: { colSpan: d.col },
			};
		},
		editCellRenderer: function (d) {
			return {
				input: window.Didgah4DynamicDataLibrary.createElement({
						tagName: "input",
						props: { value: d.formData || "", fieldName: d.name },
					})
					,
				cellProps: { colSpan: d.col },
			};
		},
		rowsData: {
			fields: [{ name: "a", col: 1, Type: { IsBundle: false } }],
		},
	};

export default AnotherGrid;