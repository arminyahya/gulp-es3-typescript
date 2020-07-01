import { ComponentMode, DynamicDataComponentProps } from '../utils'
import { createElement } from '../../utils'

interface Props extends DynamicDataComponentProps {}

export default function dateTimeType({ mode, name, value }: Props) {
  return createElement({ tagName: 'div', innerText: 'dateTimeType' })
}

// export default function dateTimeType({mode}: Props) {
// 	let component;
// 	switch (mode) {
// 		case 'display':
// 		case 'filter-readonly':
// 			component = ;
// 		case 'edit':
// 		case 'filter':
// 		case 'wizard':
// 			component = ;
// 	}
// 	return component
// }
