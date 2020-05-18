import TableForm from '../Components/tableForm';
import { createElement } from '../utils';


const usernameInput = createElement({tagName: 'input', props: { id:'111',type: 'text', name:'username'}})
const passwordInput = createElement({tagName: 'input', props: { id:'222',type:'password', name:'password'}})


const mainSource = [
  {
    username: '',
    password: ''
  }
];

const mainColumns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'Username',
    renderer: (d) => usernameInput
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'Password',
    renderer: (d) => passwordInput
  },
];

const example = TableForm({dataSource: mainSource, columns: mainColumns});

export default example;

