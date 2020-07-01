import { ComponentMode, DynamicDataComponentProps } from '../utils'
import readOnlyField from './readOnlyField'
import { createElement } from '../../utils'

interface Props extends DynamicDataComponentProps {}
export default function intType({ mode, name, value }: Props) {
  let component
  switch (mode) {
    case 'display':
    case 'filter-readonly':
      component = readOnlyField({ name, value })
    case 'edit':
    case 'filter':
    case 'wizard':
      component = createElement<HTMLInputElement>({ tagName: 'input', props: { value: value } })
  }
  return component
}
