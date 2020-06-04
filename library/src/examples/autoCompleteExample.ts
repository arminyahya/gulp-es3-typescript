import AutoComplete, { ValueLabel } from '../components/autoComplete';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
];
const optionsAfterAjax = [
  { value: 1, label: '1111' },
  { value: 2, label: '2222' },
];
const mockAjax = (text) =>
  new Promise<ValueLabel[]>((res, rej) => {
    setTimeout(() => {
      res(optionsAfterAjax);
    }, 3000);
  });
const example = AutoComplete({ options, value: { value: 1, label: '1111' }, onInputChange: mockAjax });

export default example;
