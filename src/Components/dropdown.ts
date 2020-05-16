import { getElementWithClassNames } from "../utils";

interface Props {
	children?: HTMLElement;
}

function Dropdown({children}: Props) {
	let dropdown = document.createElement('div');
	dropdown = getElementWithClassNames(dropdown, ['didgah-dropdown'])
	if(children) {
		dropdown.appendChild(children)
	}
	return dropdown;
}

export default Dropdown;