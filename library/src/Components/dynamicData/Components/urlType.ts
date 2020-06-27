import { DynamicDataComponentProps } from '../utils'
import { createElement } from '../../../utils'

interface Props extends DynamicDataComponentProps {}

export default function tellType({ value, name }: Props) {
  return createElement({ tagName: 'input', props: { value, name, style: { direction: 'ltr' } } })
}
