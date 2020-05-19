import { createElement } from "../utils";

function withLabel(input: HTMLElement, title: string) {
	const wrapper = createElement({ tagName: 'div' });
	const label = createElement<HTMLLabelElement>({ tagName: 'label', props: { className: 'with-label__label' } });
	label.innerHTML = title;
	wrapper.appendChild(label);
	wrapper.appendChild(input);
	return wrapper;
}

export default withLabel;