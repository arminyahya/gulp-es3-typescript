import { getElementWithClassNames, createElement, withErrorHandling } from '../utils';

interface Props {
  children?: HTMLElement;
}

function Dropdown({ children }: Props) {
  let dropdown = createElement<HTMLDivElement>({ tagName: 'div' });
  dropdown = getElementWithClassNames(dropdown, ['didgah-dropdown']);
  if (children) {
    dropdown.appendChild(children);
  }
  return dropdown;
}

export default withErrorHandling(Dropdown, 'DropDown');
