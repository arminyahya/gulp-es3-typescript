import { ComponentMode, DynamicDataComponentProps } from '../utils'
import { createElement } from '../../../utils'
import { Select } from '../..'
import { ValueLabel } from '../../autoComplete'

interface Props extends DynamicDataComponentProps<ValueLabel> {}

export default function genderType({ mode, name, value }: Props) {
  const options = [
    { label: 'مرد', value: '1' },
    { label: 'زن', value: '2' },
  ]
  return Select({ options, name, value })
}
