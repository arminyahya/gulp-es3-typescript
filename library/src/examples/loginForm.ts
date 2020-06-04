import { createElement, renderIntoRoot } from '../utils';

const getLoginFormDefaultValues = function () {
  const data = { username: 'armin', password: '12345' };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const generateLoginForm = async function () {
  const { username, password } = (await getLoginFormDefaultValues()) as any;
  const form = createElement<HTMLButtonElement>({ tagName: 'form' });
  const usernameInput = createElement({
    tagName: 'input',
    props: { value: username, type: 'text', name: 'username' },
  });
  const passwordInput = createElement({
    tagName: 'input',
    props: { value: password, type: 'password', name: 'password' },
  });
  const button = createElement<HTMLInputElement>({ tagName: 'input', props: { type: 'submit' } });

  form.appendChild(usernameInput);
  form.appendChild(passwordInput);
  form.appendChild(button);
  renderIntoRoot(form);
};
