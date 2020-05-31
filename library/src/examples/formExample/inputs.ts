import * as $ from 'jquery';
import { createElement } from "../../utils";
import { Select } from "../../Components";
import withLabel from "../../Components/withLabel";

export const formNumberInput = (d) => createElement({ tagName: 'input', props: { ...d } });
export const firstNameInput = (d) => createElement({ tagName: 'input', props: { ...d } });
export const lastNameInput = (d) => createElement({ tagName: 'input', props: { ...d }});
const datePicker = (d) => createElement({
	tagName: 'span', props: { id: 'from-date-datePicker', style: { width: '240px' } },
	onMount: function () {
		document.getElementById('from-date-datePicker').innerHTML = `<input type='text' style='display:none;' id='txt12345' name="${d.name || ''}" value="${d.value || ''}" /><ccc:datePicker showTime='true' forceShowTime='true'/>`;
	}
});
export const fromDateInput = (d) => datePicker(d);
export const toDateInput = (d) => createElement({ tagName: 'input', props: { ...d } });
export const statusInput = (d) => Select({ options: d.options, value: d.value, ...d });
export const employmentTypeInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'employment type')
export const genderInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'gender')
export const maritalStatusInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'maritial')
export const countryInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'country');
export const fromBirthDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'from birth date');
export const toBirthDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'to birth date');
export const cityInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'city');
export const languageLevelInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'language level');
export const languagesInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d }}), 'laguages');