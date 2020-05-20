import { createElement, withErrorHandling } from "../utils";

type ValueLabel = {
	value: any;
	label: string;
	data?: any;
}

interface Props {
	options: ValueLabel[];
	value?: ValueLabel;
	name?: string;
}

function Select({options, value, name}: Props) {
	var select = createElement({tagName:'select', props: {value: value, name: name}});

	options.map(function(option, i){
		var domOption = createElement({tagName: 'option'});
		domOption.setAttribute('value', option.value);
		domOption.innerHTML = option.label;
		select.appendChild(domOption);
	});
	return select;
}

export default withErrorHandling(Select, 'Select');