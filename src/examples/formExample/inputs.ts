import { createElement } from "../../utils";
import { Select } from "../../Components";
import withLabel from "../../Components/withLabel";

export const formNumberInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'form number');
export const firstNameInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'first name');
export const lastNameInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'last name');
export const fromDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'from date');
export const toDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'to date');
export const statusInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'status')
export const employmentTypeInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'employment type')
export const genderInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'gender')
export const maritalStatusInput = (d) => withLabel(Select({ options: d.options, value: d.value, ...d }), 'maritial')
export const countryInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'country');
export const fromBirthDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'from birth date');
export const toBirthDateInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'to birth date');
export const cityInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'city');
export const languageLevelInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'language level');
export const languagesInput = (d) => withLabel(createElement({ tagName: 'input', props: { ...d } }), 'laguages');
