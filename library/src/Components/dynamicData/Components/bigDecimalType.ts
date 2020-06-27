import decimalType from './decimalType'
import { ComponentMode, DynamicDataComponentProps } from '../utils'

export default function bigDecimalType(props: DynamicDataComponentProps) {
  return decimalType({ ...props })
}
