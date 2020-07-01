import { ComponentMode, DynamicDataComponentProps } from '../utils'
import { createElement } from '../../utils'

interface Props extends DynamicDataComponentProps {}

export default function timeType({ mode, name, value }: Props) {
  return createElement({ tagName: 'div', innerText: 'timeType' })
}
