import { createElement, renderIntoRoot } from "../../utils";
import TableForm from "../../Components/tableForm";
import * as $ from 'jquery';
import { Select } from "../../Components";
import TableBaseOnRow, { mapIntoTD } from "../../Components/tableBaseOnRow";
import { formNumberInput, firstNameInput, lastNameInput, fromDateInput, toDateInput, statusInput, employmentTypeInput, genderInput, maritalStatusInput, countryInput, toBirthDateInput, fromBirthDateInput, cityInput, languageLevelInput, languagesInput } from "./inputs";
import { fetchTableLoginFormDefaultValues } from "./mockApi";


export const generateTableForm = async function () {
	const {
		formNumber, firstName, lastName, fromDate, toDate, status, employmentType, gender,
		maritalStatus, country, fromBirthDate, toBirthDate, city, languageLevel, languages
	} = await fetchTableLoginFormDefaultValues() as any;

	const form = createElement<HTMLFormElement>({
		tagName: 'form',
		props: {
			id: 'table-form',
			dir: 'rtl'
		}
	});
	form.onsubmit = function (e) { return false };

	const button = createElement<HTMLInputElement>({
		tagName: 'input',
		props: {
			type: 'submit',
			onclick: function (e) {
				console.log($('#table-form').serializeArray());
			}
		}
	});

	const rowOneTableMainSource =
	{
		formNumber: { value: formNumber, type: 'text', name: 'formNumber' },
		firstName: { value: firstName, type: 'text', name: 'firstName' },
		lastName: { value: lastName, type: 'text', name: 'lastName' },
	}

	const rowTwoTableMainSource =
	{
		fromDate: { value: fromDate, type: 'text', name: 'fromDate' },
		toDate: { value: toDate, type: 'text', name: 'toDate' },
		status: { value: status, options: [{ value: 1, label: 'accepted' }, { value: 2, label: 'rejected' }], name: 'status' },
	};


	const rowThreeTableMainSource =
	{
		employmentType: { value: employmentType, options: [{ value: 1, label: 'contract' }, { value: 2, label: 'other' }], name: 'employmentType' },
		gender: { value: gender, options: [{ value: 1, label: 'male' }, { value: 2, label: 'female' }], name: 'gender' },
		maritalStatus: { value: maritalStatus, options: [{ value: 1, label: 'married' }, { value: 2, label: 'single' }], name: 'maritalStatus' },
	}

	const rowFourTableMainSource =
	{
		country: { value: country, type: 'text', name: 'country' },
		fromBirthDate: { value: fromBirthDate, type: 'text', name: 'fromBirthDate' },
		toBirthDate: { value: toBirthDate, type: 'text', name: 'toBirthDate' },
	}

	const rowFiveTableMainSource =
	{
		city: { value: city, type: 'text', name: 'city' },
		languageLevel: { value: languageLevel, type: 'text', name: 'languageLevel' },
		languages: { value: languages, type: 'text', name: 'languages' },
	}

	const mainRows = [
		{
			renderer: mapIntoTD([
				{ input: formNumberInput(rowOneTableMainSource.formNumber) },
				{ input: firstNameInput(rowOneTableMainSource.firstName) },
				{ input: lastNameInput(rowOneTableMainSource.lastName) },
			])
		},
		{
			renderer: mapIntoTD([
				{ input: fromDateInput(rowTwoTableMainSource.fromDate) },
				{ input: toDateInput(rowTwoTableMainSource.toDate) },
				{ input: statusInput(rowTwoTableMainSource.status) },
			])
		},
		{
			renderer: mapIntoTD([
				{ input: employmentTypeInput(rowThreeTableMainSource.employmentType) },
				{ input: genderInput(rowThreeTableMainSource.gender) },
				{ input: maritalStatusInput(rowThreeTableMainSource.maritalStatus) },
			])
		},
		{
			renderer: mapIntoTD([
				{ input: countryInput(rowFourTableMainSource.country) },
				{ input: fromBirthDateInput(rowFourTableMainSource.fromBirthDate) },
				{ input: toBirthDateInput(rowFourTableMainSource.toBirthDate) },
			])
		},
		{
			renderer: mapIntoTD([
				{ input: cityInput(rowFiveTableMainSource.city) },
				{ input: languageLevelInput(rowFiveTableMainSource.languageLevel) },
				{ input: languagesInput(rowFiveTableMainSource.languages) },
			])
		}
	];
	const mainTable = TableBaseOnRow({ rows: mainRows });
	form.appendChild(mainTable);
	form.appendChild(button);
	renderIntoRoot(form);
}