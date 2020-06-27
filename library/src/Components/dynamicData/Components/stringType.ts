import { DynamicDataComponentProps } from '../utils'
import { createElement } from '../../../utils'

interface Props extends DynamicDataComponentProps {}

export default function stringType({ value, name }: Props) {
  return createElement({ tagName: 'input', props: { value, name } })
}
