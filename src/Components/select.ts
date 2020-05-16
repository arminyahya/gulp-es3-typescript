
type ValueLabel = {
	value: any;
	label: string;
	data?: any;
}

interface Props {
	options: ValueLabel[];
	value?: ValueLabel;
}

function Select({options, value}: Props) {
	var select = document.createElement('select');
	if(value) {
		select.value = value.value;
	}
	options.map(function(option, i){
		var domOption = document.createElement('option');
		domOption.setAttribute('value', option.value);
		domOption.innerHTML = option.label;
		select.appendChild(domOption);
	});
	return select;
}

export default Select;