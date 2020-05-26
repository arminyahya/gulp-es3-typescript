import * as $ from 'jquery';
import { Dropdown } from ".";
import { getElementWithClassNames, getElementWithStyle, elementIdGenerator, createElement, withErrorHandling } from "../utils";

export type ValueLabel = {
	value: any;
	label: string;
	data?: any;
}

interface Props {
	options: ValueLabel[];
	value?: ValueLabel;
	onInputChange?: (value: string) => Promise<ValueLabel[]>
}

function AutoComplete({options, value, onInputChange}: Props) {
	const idGenerator = elementIdGenerator.gererate();
	// Wrapper
	let autoCompleteWrap =  createElement<HTMLDivElement>({tagName: 'div', props: {id: idGenerator.gererate(), className: 'auto-complete'}});

	// Input
	var inputDom = document.createElement('input');
	inputDom.id = idGenerator.gererate();

	if(value) {
		inputDom.value = value.label;
	}

	const getInput = function() {return document.getElementById(inputDom.id) as HTMLInputElement;}
	
	const setInputValue = function(value) {
		getInput().value = value;
	}

	const onInputTextChange = async function (text) {
		const newOptions = await onInputChange(text);
		dropdown.innerHTML = '';
		newOptions.forEach((option, i) => {
			const listItem = createElement({tagName: 'div'});
			listItem.innerHTML = option.label;
			listItem.onclick = function() {
				setInputValue(option.label);
			};
			dropdown.appendChild(listItem);
		})
	}
	
	inputDom.onkeydown = function(e) { 
		// @ts-ignore
		onInputTextChange(this.value)
	};

	inputDom.onfocus = function(e) { 
		 document.getElementById(dropdown.id).style.display = 'block';
	};


	// DropDown
	let dropdown = Dropdown({});
	dropdown = getElementWithClassNames(dropdown, ['auto-complete__dropdown']) as HTMLDivElement;
	dropdown = getElementWithStyle(dropdown, [{key: 'display', value: 'none'}]);
	dropdown.id = idGenerator.gererate();
	options.forEach((option) => {
		// DropDown Items
		let listItem = document.createElement('div');
		listItem.onclick = function() {
			setInputValue(option.label);
		};
		listItem.innerHTML = option.label;
		dropdown.appendChild(listItem);
	})


	$(document).click(function(e){   
		const getDropdown = document.getElementById(dropdown.id);
		if (getDropdown.style.display !== 'none' && !getDropdown.contains(e.target) && !getInput().contains(e.target)){
			getDropdown.style.display = 'none';
		}
	});
	autoCompleteWrap.appendChild(inputDom);
	autoCompleteWrap.appendChild(dropdown);
	return autoCompleteWrap;
}

export default withErrorHandling(AutoComplete, 'AutoComplete');