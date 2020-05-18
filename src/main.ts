import { renderIntoRoot, createElement } from './utils';

const form = createElement({tagName: 'form', props: {action: '/action_page.php'}});
const usernameInput = createElement({tagName: 'input', props: { id:'111',type: 'text', name:'username'}});
const button = createElement<React.InputHTMLAttributes<any>>({tagName: 'input', props: { type:'submit', style: {backgroundColor: 'black'}}});

form.appendChild(usernameInput);
form.appendChild(button);
renderIntoRoot(form);
