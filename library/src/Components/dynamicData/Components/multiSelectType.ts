import { ComponentMode, DynamicDataComponentProps } from '../utils'
import { createElement } from '../../../utils'

interface Props extends DynamicDataComponentProps {}

export default function multiSelectType({ mode, name, value }: Props) {
  return createElement({ tagName: 'div', innerText: 'multiSelectType' })
}
