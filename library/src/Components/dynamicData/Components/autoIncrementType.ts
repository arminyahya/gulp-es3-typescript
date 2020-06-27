import { ComponentMode, DynamicDataComponentProps } from '../utils'
import readOnlyField from './readOnlyField'
import { createElement } from '../../../utils'

interface Props extends DynamicDataComponentProps {}
export default function autoIncrementType({ mode, value, name }: Props) {
  let component
  switch (mode) {
    case 'display':
    case 'filter-readonly':
      component = readOnlyField({ value, name })
    case 'edit':
    case 'filter':
    case 'wizard':
      component = createElement({ tagName: 'input', props: { value, name } })
  }
  return component
}
