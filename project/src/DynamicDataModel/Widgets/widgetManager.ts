// import { FieldsetSettingForm } from "./WidgetSettingForms/index";
import IDynamicDataModelUIManager = DynamicDataModel.Layout.IDynamicDataModelUIManager;
import { DesignerContainerCode } from "../enums";
import widgetFactory from "./widgetFactory";
import widgetIdList from "./widgetIdList";
import { FieldTypeGuids } from "../fieldTypeGuids";
import TableExEditorFields from "./tableExEditorFields";
import TableExDisplayFields from "./tableExDisplayFields";
import IndicatorLabel from "../Widgets/Display/label";
import AutoComplete from "./Edit/AutoComplete/autoComplete";
import TableExBundleViewer from "../Widgets/Display/bundleViewer";
import LableNumberWithSeperator from "./Display/labelNumberWithSeperator";
import { softwareGuid } from "../utils";
import { DidgahDeferred } from "gulp-es3-typescript-library";
import guid from "./Edit/Guid/guid";

const DynamicDataModelWidgetManagerFactory = () => {
	const DynamicDataModelWidgetManager: IDynamicDataModelUIManager = {
		getDataEntryEditComponent(widgetId: string) {
			return typeof TableExEditorFields[widgetId] === "function"
				? TableExEditorFields[widgetId]()
				: TableExEditorFields[widgetId] || widgetId;
		},
		getDataEntryViewComponent(widgetId: string) {
			return typeof TableExDisplayFields[widgetId] === "function"
				? TableExDisplayFields[widgetId]()
				: TableExDisplayFields[widgetId] || widgetId;
		},
		getWidget(widgetId: string) {
			return widgetFactory(widgetId).component;
		},
		getCustomDataEntryEditComponent(widgetId: string) {
			switch (widgetId) {
				case widgetIdList.Guid:
				case widgetIdList.AutoComplete:
				case widgetIdList.PopupSelector:
					return AutoComplete.component;
				case widgetIdList.IndicatorViewer:
					return IndicatorLabel.component;
				case widgetIdList.InputNumberWithSeperator:
					return IndicatorLabel.component;
				default:
					break;
			}
		},
		getCustomDataEntryViewComponent(widgetId: string) {
			switch (widgetId) {
				case widgetIdList.ExtensionLite:
				case widgetIdList.AutoComplete:
				case widgetIdList.PopupSelector:
				case widgetIdList.SignatureSelector:
				case widgetIdList.TableExEditor:
					return TableExBundleViewer.component;
				case widgetIdList.InputNumberWithSeperator:
					return LableNumberWithSeperator.component;
				default:
					break;
			}
		},
		getCustomDataEntryValidation(widgetId: string) {
			return [];
		},
		onInit(widgetId: string, attributes: object) {
			let dfd = DidgahDeferred.create();

			if (!!widgetFactory(widgetId).events.onInit) {
				widgetFactory(widgetId)
					.events.onInit(widgetId, attributes)
					.then((result) => {
						dfd.resolve(result);
					})
					.catch(() => dfd.fail());
			} else {
				dfd.resolve(null);
			}

			return dfd;
		},
		hasRequiredSetting(widgetId: string) {
			switch (widgetId) {
				case widgetIdList.AutoComplete:
				case widgetIdList.TableExEditor:
					return true;
				default:
					return false;
			}
		},
		getConsistentRules(widgetId: string) {
			return widgetFactory(widgetId).getConsistentRules();
		},
		validateWidgetSetting(widgetId: string, setting: object) {
			switch (widgetId) {
				case widgetIdList.AutoComplete:
				case widgetIdList.AutoCompleteViewer:
				case widgetIdList.PopupSelector:
					return !!setting["ReferenceFieldId"];
				case widgetIdList.IndicatorViewer:
					return !!setting["indicatorSelected"];
				case widgetIdList.TableExEditor:
					return (
						!!setting["design"] &&
						(JSON.parse(setting["design"]) as Array<any>).length > 0
					);
				default:
					return true;
			}
		},
	};

	return DynamicDataModelWidgetManager;
};

export { DynamicDataModelWidgetManagerFactory };
