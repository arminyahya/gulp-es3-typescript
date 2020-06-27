import { createElement } from '../../../utils'

interface Props {
  value: string
  name: string
}
export default function readOnlyField({ value, name }: Props) {
  return createElement<HTMLInputElement>({ tagName: 'input', props: { name: name, disabled: true }, innerText: value })
}
