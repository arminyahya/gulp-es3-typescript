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
  console.log(component)
  switch (component.Code) {
    case ControlsCode.IntCode.toString():
      extraModelComponent = intType
      break
    case ControlsCode.BigDecimalCode.toString():
      extraModelComponent = bigDecimalType
      break
    case ControlsCode.DecimalCode.toString():
      extraModelComponent = decimalType
      break
    case ControlsCode.TextCode.toString():
      extraModelComponent = textType
      break
    case ControlsCode.EmailCode.toString():
      extraModelComponent = emailType
      break
    case ControlsCode.BooleanCode.toString():
      extraModelComponent = booleanType
      break
    case ControlsCode.DateCode.toString():
      extraModelComponent = dateType
      break
    case ControlsCode.DateTimeCode.toString():
      extraModelComponent = dateTimeType
      break
    case ControlsCode.MultiSelectCode.toString():
      // extraModelComponent = <MultiSelectType multiSelectDataSource={ component.Attributes } />;
      extraModelComponent = multiSelectType

      break
    case ControlsCode.UniqueidentifierCode.toString():
      extraModelComponent = uniqueidentifierType
      break
    case ControlsCode.AutoIncrementCode.toString():
      extraModelComponent = autoIncrementType
      break
    case ControlsCode.GenderCode.toString():
      extraModelComponent = genderType
      break
    case ControlsCode.ImageCode.toString():
      extraModelComponent = imageType
      break
    case ControlsCode.FileCode.toString():
      extraModelComponent = fileType
      break
    case ControlsCode.StringCode.toString():
      extraModelComponent = stringType
      break
    case ControlsCode.TelCode.toString():
      extraModelComponent = tellType
      break
    case ControlsCode.TimeCode.toString():
      extraModelComponent = timeType
      break
    case ControlsCode.UrlCode.toString():
      extraModelComponent = urlType
      break
    case ControlsCode.GridCode.toString():
      // extraModelComponent = <GridType {...component.Attributes } />;
      extraModelComponent = ({}) => createElement({ tagName: 'span', innerText: 'GridType' })
      break
    case ControlsCode.InsertTimeStampCode.toString():
      extraModelComponent = insertTimeStamp
      break
    case ControlsCode.DidgahStaffCode.toString():
      extraModelComponent = didgahStaffType
      break
    case ControlsCode.DidgahContactCode.toString():
      extraModelComponent = didgahContactType
      break
    default:
      extraModelComponent = controlFactory(component)
      // extraModelComponent = didgahContactType
      break
  }
  return extraModelComponent({})
}
