import { ControlsCode } from '../enums'

export type ComponentMode = 'display' | 'edit' | 'filter' | 'wizard' | 'filter-readonly'
export interface DynamicDataComponentProps<ValueType = string> {
  mode: ComponentMode
  name: string
  value: ValueType
}
export const DynamicDataComponentRules = {
  Email: '^\\s*(((?!\\.)[a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9\\-]+\\.)+([a-zA-Z]{2,}))\\s*$',
  // eslint-disable-next-line prettier/prettier
  Guid: '^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$',
  InputDecimal: '^[0-9]+\\.[0-9]+$',
  InputNumber: '/^d+$/',
}

// function to format a number with separators. returns formatted number. (<script language="JavaScript" src="http://www.hashemian.com/js/NumberFormat.js"></script>)
// num - the number to be formatted
// decpoint - the decimal point character. if skipped, "." is used
// sep - the separator character. if skipped, "," is used
export default function formatDecimal(num, padNumber?, decpoint?, sep?) {
  //Original Name: FormatNumberBy3
  // check for missing parameters and use defaults if so

  padNumber = padNumber || 3
  decpoint = decpoint || '.'
  sep = sep || ','
  //if (arguments.length == 3) {
  //	sep = ",";
  //}
  //if (arguments.length == 2) {
  //	sep = ",";
  //	decpoint = ".";
  //}
  // need a string for operations
  num = num.toString()
  // separate the whole number and the fraction if possible
  let a = num.split(decpoint)
  let x = a[0] // decimal
  let y = a[1] // fraction
  let z = ''

  if (typeof x != 'undefined') {
    // reverse the digits. regexp works from left to right.
    for (let i = x.length - 1; i >= 0; i--) z += x.charAt(i)
    // add seperators. but undo the trailing one, if there
    z = z.replace(new RegExp(`(\\d{${padNumber}})`, 'g'), '$1' + sep)
    if (z.slice(-sep.length) == sep) z = z.slice(0, -sep.length)
    x = ''
    // reverse again to get back the number
    for (let i = z.length - 1; i >= 0; i--) x += z.charAt(i)
    // add the fraction back in, if it was there
    if (typeof y != 'undefined' && y.length >= 0) x += decpoint + y
  }

  return x
}

export function getDesiredValidationRules(controlCode: string, required: boolean, incommingRules: any[]) {
  const rules = []

  switch (controlCode) {
    case ControlsCode.EmailCode.toString():
      rules.push({
        type: 'email',
      })
      break
    case ControlsCode.BooleanCode.toString():
      rules.push({
        type: 'boolean',
      })
      break
    case ControlsCode.DateCode.toString():
    case ControlsCode.DateTimeCode.toString():
      //rules.push({
      //	type: 'date'
      //});
      break
    case ControlsCode.UrlCode.toString():
      rules.push({
        type: 'url',
      })
      break
    case ControlsCode.UniqueidentifierCode.toString():
      rules.push({
        pattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      })
      break
  }

  if (required) {
    rules.push({
      required: true,
    })
  }

  if (!!incommingRules && incommingRules.length) {
    rules.push(...incommingRules)
  }

  return rules
}
