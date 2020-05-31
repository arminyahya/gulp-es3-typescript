import { createElement } from "../../utils";
import DynamicDataFormTypes from "./types";

function dynamicDataForm({ form }: { form: HTMLElement }) {
	// const wrapper = createElement<HTMLDivElement>({ tagName: 'div', props: { className: 'dynamic-data-form' } });
	// wrapper.appendChild(form);
	// console.log(wrapper);
	return document.createElement('button');
}
export default dynamicDataForm;