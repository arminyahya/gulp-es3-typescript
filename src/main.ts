import { renderIntoRoot, createElement } from './utils';

const form = createElement<HTMLButtonElement>({tagName: 'form'});
const usernameInput = createElement({tagName: 'input', props: { id:'111',type: 'text', name:'username'}});
const button = createElement<HTMLInputElement>({tagName: 'input' ,props: {type:'submit' ,style: {backgroundColor: 'black'}}});

form.appendChild(usernameInput);
form.appendChild(button);
renderIntoRoot(form);
