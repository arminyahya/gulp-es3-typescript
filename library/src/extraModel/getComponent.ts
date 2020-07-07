import { ControlsCode } from '../enums'
import intType from './Components/intType'
import bigDecimalType from './Components/bigDecimalType'
import decimalType from './Components/decimalType'
import textType from './Components/textType'
import emailType from './Components/emailType'
import booleanType from './Components/booleanType'
import dateType from './Components/dateType'
import dateTimeType from './Components/dateTimeType'
import multiSelectType from './Components/multiSelectType'
import uniqueidentifierType from './Components/uniqueidentifierType'
import autoIncrementType from './Components/autoIncrementType'
import genderType from './Components/genderType'
import fileType from './Components/fileType'
import stringType from './Components/stringType'
import tellType from './Components/telType'
import timeType from './Components/timeType'
import urlType from './Components/urlType'
import insertTimeStamp from './Components/insertTimeStamp'
import didgahStaffType from './Components/didgahStaffType'
import didgahContactType from './Components/didgahContactType'
import imageType from './Components/imageType'
import { createElement } from '../utils'

export function getComponent(
  component: ExtraModel.Component,
  controlFactory: (component: ExtraModel.Component) => HTMLElement
) {
  let extraModelComponent = null
  const defaultProps = { ...component.Attributes }
  console.log(component.Code)
  switch (component.Code) {
    case ControlsCode.IntCode.toString():
      extraModelComponent = intType(defaultProps)
      break
    case ControlsCode.BigDecimalCode.toString():
      extraModelComponent = bigDecimalType(defaultProps)
      break
    case ControlsCode.DecimalCode.toString():
      extraModelComponent = decimalType(defaultProps)
      break
    case ControlsCode.TextCode.toString():
      extraModelComponent = textType(defaultProps)
      break
    case ControlsCode.EmailCode.toString():
      extraModelComponent = emailType(defaultProps)
      break
    case ControlsCode.BooleanCode.toString():
      extraModelComponent = booleanType(defaultProps)
      break
    case ControlsCode.DateCode.toString():
      extraModelComponent = dateType(defaultProps)
      break
    case ControlsCode.DateTimeCode.toString():
      extraModelComponent = dateTimeType(defaultProps)
      break
    case ControlsCode.MultiSelectCode.toString():
      // extraModelComponent = <MultiSelectType multiSelectDataSource={ component.Attributes } />;
      extraModelComponent = multiSelectType(defaultProps)

      break
    case ControlsCode.UniqueidentifierCode.toString():
      extraModelComponent = uniqueidentifierType(defaultProps)
      break
    case ControlsCode.AutoIncrementCode.toString():
      extraModelComponent = autoIncrementType(defaultProps)
      break
    case ControlsCode.GenderCode.toString():
      extraModelComponent = genderType(defaultProps)
      break
    case ControlsCode.ImageCode.toString():
      extraModelComponent = imageType(defaultProps)
      break
    case ControlsCode.FileCode.toString():
      extraModelComponent = fileType(defaultProps)
      break
    case ControlsCode.StringCode.toString():
      extraModelComponent = stringType(defaultProps)
      break
    case ControlsCode.TelCode.toString():
      extraModelComponent = tellType(defaultProps)
      break
    case ControlsCode.TimeCode.toString():
      extraModelComponent = timeType(defaultProps)
      break
    case ControlsCode.UrlCode.toString():
      extraModelComponent = urlType(defaultProps)
      break
    case ControlsCode.GridCode.toString():
      // extraModelComponent = <GridType {...component.Attributes } />;
      extraModelComponent = ({}) => createElement({ tagName: 'span', innerText: 'GridType' })
      break
    case ControlsCode.InsertTimeStampCode.toString():
      extraModelComponent = insertTimeStamp(defaultProps)
      break
    case ControlsCode.DidgahStaffCode.toString():
      extraModelComponent = didgahStaffType(defaultProps)
      break
    case ControlsCode.DidgahContactCode.toString():
      extraModelComponent = didgahContactType(defaultProps)
      break
    default:
      // @ts-ignore
      extraModelComponent = controlFactory(component)(component.Attributes)
      // extraModelComponent = ({}) => createElement({ tagName: 'span', innerText: 'GridType' })
      break
  }
  return extraModelComponent
}
