import { container, renderIntoRoot } from './utils';
import AutoComplete, { ValueLabel } from './components/autoComplete';
import { Modal } from './components';

//      TABLE
// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
// 		key: 'name',
// 		renderer : (d) => {const input = document.createElement('input'); return input;}
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];

// container.appendChild(components.Table({dataSource: dataSource, columns: columns}))

//      AUTOCOMPLETE


const options = [{value: 1, label : '1'}, {value: 2, label : '2'}]
const optionsAfterAjax = [{value: 1, label : '1111'}, {value: 2, label : '2222'}]
const mockAjax = (text) => new Promise<ValueLabel[]>((res,rej) => { setTimeout(() => {res(optionsAfterAjax)}, 3000) });

renderIntoRoot(AutoComplete({options,value:{value: 1, label : '1111'}, onInputChange: mockAjax}))


//      MODAL

// renderIntoRoot(Modal({htmlsrc: './example-modal.html'}));