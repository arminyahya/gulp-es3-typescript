import formatDecimal, { ComponentMode, DynamicDataComponentProps } from '../utils'
import readOnlyField from './readOnlyField'
import { createElement } from '../../utils'

interface Props extends DynamicDataComponentProps {
  formatValueForDisplay?: boolean
}
export default function decimalType({ mode, value, name, formatValueForDisplay }: Props) {
  let component
  switch (mode) {
    case 'display':
    case 'filter-readonly':
      component = readOnlyField({ value: formatValueForDisplay && !!value ? formatDecimal(value) : value, name: name })
    case 'edit':
    case 'filter':
    case 'wizard':
      component = createElement({ tagName: 'input', props: { value, name } })
  }
  return component
}
