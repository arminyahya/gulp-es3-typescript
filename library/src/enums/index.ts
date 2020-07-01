export enum ControlsCode {
  IntCode = 1,
  StringCode = 2,
  TextCode = 3,
  BooleanCode = 4,
  DateCode = 5,
  TimeCode = 6,
  MultiSelectCode = 7,
  TelCode = 8,
  EmailCode = 9,
  UrlCode = 10,
  ImageCode = 11,
  FileCode = 12,
  InsertTimeStampCode = 13,
  UpdateTimeStampCode = 14,
  DecimalCode = 15,
  GenderCode = 16,
  DateTimeCode = 17,
  AutoIncrementCode = 18,
  UniqueidentifierCode = 19,
  BigDecimalCode = 20,
  GridCode = 100,
  DidgahStaffCode = 1001,
  DidgahContactCode = 1002,
}

export enum CompareOptions {
  NumericEqual = 1,
  NumericGreater = 2,
  NumericLess = 3,
  NumericGreaterOrEqual = 4,
  NumericLessOrEqual = 5,
  StringEqual = 6,
  StringStartsWith = 7,
  StringEndsWith = 8,
  StringContains = 9,
  DateTimeEqual = 10,
  DateTimeGreater = 11,
  DateTimeLess = 12,
  DateTimeGreaterOrEqual = 13,
  DateTimeLessOrEqual = 14,
}

export enum ControlType {
  Container = 1,
  Component = 2,
}

export enum ContainerCode {
  Fieldset = 1,
  FormRow = 2,
}