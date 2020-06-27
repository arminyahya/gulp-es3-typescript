// import { ControlsCode } from "../../enums";

// export function getComponent(component: ExtraModel.Component, controlFactory: (component: ExtraModel.Component) => HTMLElement) {
// 	let extraModelComponent = null;
// 	switch (component.Code) {
// 		case ControlsCode.IntCode.toString():
// 			extraModelComponent = <IntType />;
// 			break;
// 		case ControlsCode.BigDecimalCode.toString():
// 			extraModelComponent = <BigDecimalType />;
// 			break;
// 		case ControlsCode.DecimalCode.toString():
// 			extraModelComponent = <DecimalType />;
// 			break;
// 		case ControlsCode.TextCode.toString():
// 			extraModelComponent = <TextType />;
// 			break;
// 		case ControlsCode.EmailCode.toString():
// 			extraModelComponent = <EmailType />;
// 			break;
// 		case ControlsCode.BooleanCode.toString():
// 			extraModelComponent = <BooleanType />;
// 			break;
// 		case ControlsCode.DateCode.toString():
// 			extraModelComponent = <DateType />;
// 			break;
// 		case ControlsCode.DateTimeCode.toString():
// 			extraModelComponent = <DateTimeType />;
// 			break;
// 		case ControlsCode.MultiSelectCode.toString():
// 			extraModelComponent = <MultiSelectType multiSelectDataSource={ component.Attributes } />;
// 			break;
// 		case ControlsCode.UniqueidentifierCode.toString():
// 			extraModelComponent = <UniqueidentifierType />;
// 			break;
// 		case ControlsCode.AutoIncrementCode.toString():
// 			extraModelComponent = <AutoIncrementType />;
// 			break;
// 		case ControlsCode.GenderCode.toString():
// 			extraModelComponent = <GenderType />;
// 			break;
// 		case ControlsCode.ImageCode.toString():
// 			extraModelComponent = <ImageType />;
// 			break;
// 		case ControlsCode.FileCode.toString():
// 			extraModelComponent = <FileType />;
// 			break;
// 		case ControlsCode.StringCode.toString():
// 			extraModelComponent = <StringType />;
// 			break;
// 		case ControlsCode.TelCode.toString():
// 			extraModelComponent = <TelType />;
// 			break;
// 		case ControlsCode.TimeCode.toString():
// 			extraModelComponent = <TimeType />;
// 			break;
// 		case ControlsCode.UrlCode.toString():
// 			extraModelComponent = <UrlType />;
// 			break;
// 		case ControlsCode.GridCode.toString():
// 			extraModelComponent = <GridType {...component.Attributes } />;
// 			break;
// 		case ControlsCode.InsertTimeStampCode.toString():
// 			extraModelComponent = <InsertTimeStamp />;
// 			break;
// 		case ControlsCode.DidgahStaffCode.toString():
// 			extraModelComponent = <DidgahStaffType />;
// 			break;
// 		case ControlsCode.DidgahContactCode.toString():
// 			extraModelComponent = <DidgahContactType />;
// 			break;
// 		default:
// 			extraModelComponent = controlFactory(component);
// 			break;
// 	}
// 	return extraModelComponent;
// }