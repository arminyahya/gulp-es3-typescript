// import { ExtraModel } from "didgah/components";
import { softwareGuid } from "../utils";
import WidgetFactory from "../widgetFactory";
import { FieldTypeGuids } from "../fieldTypeGuids";
import { Dispatcher, WidgetCallback } from "../dispatcher";
import { ExtraModelFormArg } from "./formGenerator";
import {
	DidgahDeferred,
	ControlType,
	ExtraModel,
	renderIntoRoot,
} from "gulp-es3-typescript-library";
import { DesignerContainerCode } from "../enums";
import WidgetsIdList from "./widgetIdList";
import FormGeneratorViewModel = DynamicDataModel.FormGeneratorViewModel;
import IWidgetFactory = DynamicDataModel.Layout.IWidgetFactory;
import Container = ExtraModel.Container;
import Item = DynamicDataModel.Layout.Item;

interface FormRendererProps {
	designedLayout: FormGeneratorViewModel;
	// setExtraModelFormArgs: (args: ExtraModelFormArg) => void;
	setExtraModelFormArgs: any;
}

interface FormRendererState {
	loadingModules: boolean;
}

function FormRenderer({
	designedLayout,
	setExtraModelFormArgs,
}: FormRendererProps) {
	let dispatcher = new Dispatcher();
	let widgetFactory: IWidgetFactory;
	let formDescriptor: Container[] = [];

	const softwareLayoutItems = designedLayout.LayoutItems.filter(
		(x) => x.FieldInstance.Type.SoftwareGuid !== softwareGuid.toLowerCase()
	);
	if (softwareLayoutItems.length > 0) {
		// GeneralWidgetFactory
		widgetFactory = WidgetFactory(
			// this.props.context.commandHandler.getDidgahSoftwares(),
			[],
			softwareLayoutItems[0].FieldInstance.Type.SoftwareGuid
		);
	} else {
		// CommonWidgetFactory
		widgetFactory = WidgetFactory([], null);
	}

	function prepareFormDescriptor() {
		const { LayoutItems, DesigendForm } = designedLayout;
		// const items = JSON.parse(DesigendForm) as Array<Item>;
		const items = DesigendForm as Array<Item>;
		for (let item of items) {
			if (item.isFieldBindableWidget) {
				const correspondingLayoutItem = LayoutItems.filter(
					(x) => x.FieldInstance.Name === item.correspondingFieldInstance.Name
				)[0];
				if (
					item.correspondingFieldInstance.Type.Guid ===
					FieldTypeGuids.RelationType
				) {
					item.control.Attributes["EntityId"] =
						correspondingLayoutItem.Relation.EntityId;
					item.control.Attributes["ReferenceFieldId"] =
						correspondingLayoutItem.Relation.ReferenceFieldId;
				} else if (
					item.correspondingFieldInstance.Type.Guid ===
					FieldTypeGuids.BundleType
				) {
					item.control.Attributes["ReferenceFieldId"] =
						correspondingLayoutItem.FieldInstance.FieldInstanceId;
					item.control.Attributes["dataEntryLayoutItems"] =
						correspondingLayoutItem.LayoutItems;
					const oldSelectedFields = item.control.Attributes[
						"selectedFields"
					] as Array<any>;
					const newSelectedFields = [];
					oldSelectedFields.forEach((oldfield) => {
						const newField = correspondingLayoutItem.LayoutItems.find(
							(x) => x.FieldInstance.Name === oldfield.Name
						);
						if (!oldfield) {
							newSelectedFields.push(newField.FieldInstance);
						} else {
							newSelectedFields.push(oldfield);
						}
					});

					item.control.Attributes["selectedFields"] = newSelectedFields;
				} else {
					item.control.Attributes["ReferenceFieldId"] =
						correspondingLayoutItem.FieldInstance.FieldInstanceId;
					item.control.Attributes["layoutItemDefaultValue"] =
						correspondingLayoutItem.LayoutItemDefaultValue;
				}

				//this part should not be merged to release version
				//this part is used to revise setting of inputnumber and textbox widget
				//in case of having 0 zero value for both max and min rules

				let rules = item.control["Rules"] as Array<any>;
				if (!!rules) {
					rules.forEach((maxRule) => {
						if (Object.keys(maxRule).filter((x) => x === "max").length > 0) {
							rules.forEach((minRule) => {
								if (
									Object.keys(minRule).filter((x) => x === "min").length > 0
								) {
									if (maxRule["max"] + minRule["min"] == 0) {
										maxRule["max"] = minRule["min"] = undefined;
									}
								}
							});
						}
					});
				}
				//////////////////////////////

				//configure widget's rules
				if (
					!!rules &&
					item.editWidgetId == WidgetsIdList.InputNumberWithSeperator
				) {
					rules.forEach((RuleObj) => {
						Object.keys(RuleObj).forEach((x) => {
							switch (x) {
								case "max":
									RuleObj["type"] = "number";
									RuleObj["message"] = translate("MaximumNumberMustBe").replace(
										"{0}",
										RuleObj["max"]
									);
									break;
								case "min":
									RuleObj["type"] = "number";
									RuleObj["message"] = translate("MinimumNumberMustBe").replace(
										"{0}",
										RuleObj["min"]
									);
									break;
							}
						});
					});
				}

				// const widgetCallback = {
				// 	softwareGuid: item.correspondingFieldInstance.Type.SoftwareGuid,
				// 	widgetId: item.control.Code,
				// 	fieldInstanceName: item.correspondingFieldInstance.Name,
				// 	attributes: item.control.Attributes,
				// 	callback: widgetFactory.onInit.bind(widgetFactory),
				// } as WidgetCallback;

				// dispatcher.registerCallback(widgetCallback);
			}
		}
		const dfd = DidgahDeferred.create();
		// dispatcher.invokeAllCallbacks().done((result: Array<any>) => {
		// for (let item of items) {
		// 	if (item.isFieldBindableWidget) {
		// 		const newAttributes = {
		// 			...item.control.Attributes,
		// 			onInitData: result.filter(
		// 				(x) =>
		// 					x.fieldInstanceName === item.correspondingFieldInstance.Name
		// 			)[0].data,
		// 		};
		// 		item.control.Attributes = newAttributes;
		// 	}
		// }
		// dfd.resolve(generateFormDescriptor(items));
		// });
		dfd.resolve(generateFormDescriptor(items));

		return dfd;
	}

	function controlFactroy(component: ExtraModel.Component) {
		const Targetwidget = widgetFactory.getWidget(
			component.SoftwareGuid,
			component.Code
		) as any;
		return Targetwidget;
		// return <Targetwidget {...component.Attributes} isOnRuntime={true} />;
	}

	function generateFormDescriptor(items): Container[] {
		let omitColComponent = (flatItems: Array<Item>) => {
			let getParentId = (parentId) => {
				return flatItems.filter((x) => x.id == parentId)[0].parentId;
			};

			let newItems: Array<any> = [];
			flatItems.forEach((item) => {
				if (item.control.Type == ControlType.Component)
					item.parentId = getParentId(item.parentId);
				newItems.push(item);
			});

			return newItems;
		};

		let toHierarchy = (flatitems: Array<Item>, parentId) => {
			let temp: Array<any> = [];

			flatitems
				.filter((x) => x.parentId === parentId)
				.forEach((x) => {
					if (x.control.Type === ControlType.Container) {
						switch (x.control.Code) {
							case DesignerContainerCode[DesignerContainerCode.Col]:
								x.control.Code = DesignerContainerCode.Col.toString();
								break;
							case DesignerContainerCode[DesignerContainerCode.FormRow]:
								x.control.Code = DesignerContainerCode.FormRow.toString();
								break;
							case DesignerContainerCode[DesignerContainerCode.Fieldset]:
								x.control.Code = DesignerContainerCode.Fieldset.toString();
								break;
						}

						(x.control as ExtraModel.Container).Children = toHierarchy(
							flatitems,
							x.id
						);
					}

					if (x.control.Type === ControlType.Container) {
						if (x.control.Code != DesignerContainerCode.Col.toString()) {
							(x.control as ExtraModel.Container).Identifier = Math.random().toString();
							temp.push(x);
						}
					} else {
						if (
							!(x.control as ExtraModel.Component).DataIndex ||
							(x.control as ExtraModel.Component).DataIndex == ""
						)
							(x.control as ExtraModel.Component).DataIndex = "undefined";
						(x.control as ExtraModel.Component).Label = (x.control as ExtraModel.Component).Attributes[
							"label"
						];
						temp.push(x);
					}

					temp.sort((a, b) => a.orderIndex - b.orderIndex);
				});
			let ret = temp.map((item) => {
				return item.control;
			});
			return ret;
		};

		let list = toHierarchy(omitColComponent(items), undefined);
		return list;
	}

	function componentDidMount() {
		widgetFactory.importModules().done(() => {
			console.log(1);
			prepareFormDescriptor().done((result: any) => {
				console.log(2);
				// console.log(result);
				const root = document.getElementById("root");

				ExtraModel({
					formDescriptor: result,
					mode: "edit",
					form: {},
					controlFactory: controlFactroy,
				}).forEach(function (cm) {
					console.log(cm);
					root.appendChild(cm);
					// formDescriptor = result;
				});
				// .fail();
			});
		});
	}

	function onFormCreate(extraModelFormArgs: ExtraModelFormArg) {
		if (!!designedLayout.formData) {
			extraModelFormArgs.setFieldsValue(designedLayout.formData.KeyValues);
		}
		setExtraModelFormArgs(extraModelFormArgs);
	}

	componentDidMount();
	function render() {
		// return (
		// 	<React.Fragment>
		// 		{!this.state.loadingModules &&
		// 			<ExtraModel
		// 				formDescriptor={this.formDescriptor}
		// 				mode='edit'
		// 				controlFactory={this.controlFactroy}
		// 				onCreated={this.onFormCreate}
		// 			/>}
		// 	</React.Fragment>
		// )
	}
}

export const translate = (props) => {
	return "NOT TRANSLATED";
};
export default FormRenderer;
