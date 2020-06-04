
const initialFormData = [
	{
		countryname: 'netherlands',
		countrycode: '20'
	}
];
const table = window.DynamicDataGrid(
	{
		headers: ['countryname', 'countrycode'],
		initialFormData,
		displayCellRenderer: function (d) {
			return {
				input:  window.createElement({ tagName: 'input', props: { value: d.formData, disabled: true } }),
				cellProps: { colSpan: d.col }
			}
		},
		editCellRenderer: function (d) {
			return {
				input: window.withLabel(window.createElement({ tagName: 'input', props: { value: d.formData || '' } }), d.name) ,
				cellProps: { colSpan: d.col }

			}
		},
		rowsData:
		{
			fields: [{ name: 'countryname', col: 1 }, { name: 'countrycode', col: 3 }]
		}

	}
)

document.getElementById('root').appendChild(table)