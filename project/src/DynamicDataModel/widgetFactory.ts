import IDynamicDataModelUIManager = DynamicDataModel.Layout.IDynamicDataModelUIManager;
import FieldTypeFormSettingProps = DynamicDataModel.Layout.FieldTypeFormSettingProps;
import { DidgahDeferred } from "gulp-es3-typescript-library";
import { DynamicDataModelWidgetManagerFactory } from "./Widgets/widgetManager";
export default function WidgetFactory(
	didgahSoftwares: Array<any>,
	softwareGuid: System.Guid
) {
	let software: any;
	let softwareWidgetManager: (context: any) => IDynamicDataModelUIManager;
	let commonWidgetManager: (context: any) => IDynamicDataModelUIManager;
	let containsExtraWidget: boolean;

	didgahSoftwares = didgahSoftwares;
	if (!!softwareGuid) {
		software = getSoftware(softwareGuid);
		containsExtraWidget = true;
	} else {
		containsExtraWidget = false;
	}

	function getSoftwareWidgetManager(software: any) {
		const url = `/${software.Url}/build/DynamicDataModelWidgetManager.js`;
		const bundle = importModule(url);
		bundle.then(() => {
			softwareWidgetManager = window[software.Key.toLocaleLowerCase()][
				"DynamicDataModelWidgetManagerFactory"
			] as (context: any) => IDynamicDataModelUIManager;
		});

		return bundle;
	}

	function getCommonWidgetManager() {
		const url = "/Applications/Common/build/DynamicDataModelWidgetManager.js";
		// const bundle = importModule(url);

		// bundle.then(() => {
		// 	commonWidgetManager = window["common"][
		// 		"DynamicDataModelWidgetManagerFactory"
		// 	] as (context: any) => IDynamicDataModelUIManager;
		// });

		return new Promise((resolve, reject) => {
			commonWidgetManager = DynamicDataModelWidgetManagerFactory;
			resolve(commonWidgetManager);
		});
	}

	function getSoftware(softwareGuid: System.Guid) {
		return didgahSoftwares.filter(
			(software) =>
				software.Guid.toString().toLowerCase() ===
				softwareGuid.toString().toLowerCase()
		)[0];
	}

	function importModule(url: string) {
		return new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = `${url}?package=${"appContext.Package"}`;
			script.async = true;

			script.onload = () => {
				resolve();
				if (!!script.remove) {
					script.remove();
				} else {
					// tslint:disable
					script["removeNode"]();
				}
			};

			script.onerror = () => {
				reject(new Error("Failed to load module script with URL " + url));
				script.remove();
				return;
			};

			document.head.appendChild(script);
		});
	}

	function importModuleBySoftware(softwareGuid: System.Guid) {
		let dfd = DidgahDeferred.create<boolean>();
		const targetSoftware = getSoftware(softwareGuid);
		getSoftwareWidgetManager(targetSoftware).then((result) => {
			dfd.resolve(true);
		});
		return dfd;
	}

	function importModules() {
		let dfd = DidgahDeferred.create<boolean>();
		let targetWidgetManagers = [getCommonWidgetManager()];
		// if (containsExtraWidget) {
		// 	targetWidgetManagers.push(getSoftwareWidgetManager(software));
		// }
		Promise.all(targetWidgetManagers).then((result) => {
			dfd.resolve(true);
		});
		return dfd;
	}
	/////////////////////////////////////////////

	function getCorrespondingWidgeManager(
		softwareGuid: System.Guid
	): IDynamicDataModelUIManager {
		if (softwareGuid === softwareGuid || softwareGuid === undefined) {
			console.log("getCorrespondingWidgeManager - 1");
			return commonWidgetManager({});
		}
		console.log("getCorrespondingWidgeManager - 2");

		// return softwareWidgetManager({});
	}

	function getDataEntryEditComponent(
		softwareGuid: System.Guid,
		widgetId: string
	) {
		return getCorrespondingWidgeManager(softwareGuid).getDataEntryEditComponent(
			widgetId
		);
	}
	function getDataEntryViewComponent(
		softwareGuid: System.Guid,
		widgetId: string
	) {
		return getCorrespondingWidgeManager(softwareGuid).getDataEntryViewComponent(
			widgetId
		);
	}
	function getWidget(softwareGuid: System.Guid, widgetId: string) {
		return getCorrespondingWidgeManager(softwareGuid).getWidget(widgetId);
		``;
	}
	function onInit(
		softwareGuid: System.Guid,
		widgetId: string,
		attributes: object
	) {
		const widgetManager = getCorrespondingWidgeManager(softwareGuid);
		if (widgetManager.onInit) {
			return widgetManager.onInit(widgetId, attributes);
		}
		return null;
	}
	function hasRequiredSetting(softwareGuid: System.Guid, widgetId: string) {
		return getCorrespondingWidgeManager(softwareGuid).hasRequiredSetting(
			widgetId
		);
	}
	function getConsistentRules(softwareGuid: System.Guid, widgetId: string) {
		return getCorrespondingWidgeManager(softwareGuid).getConsistentRules(
			widgetId
		);
	}
	function validateWidgetSetting(
		softwareGuid: System.Guid,
		widgetId: string,
		setting: object
	) {
		return getCorrespondingWidgeManager(softwareGuid).validateWidgetSetting(
			widgetId,
			setting
		);
	}

	return {
		getSoftwareWidgetManager,
		getCommonWidgetManager,
		getSoftware,
		importModuleBySoftware,
		importModules,
		getDataEntryEditComponent,
		getDataEntryViewComponent,
		getWidget,
		onInit,
		hasRequiredSetting,
		getConsistentRules,
		validateWidgetSetting,
	};
}

// export class CommonWidgetFactory extends WidgetFactory {
// 	constructor(didgahSoftwares: Array<any>, context: any, appContext: any) {
// 		super(didgahSoftwares, null, context, appContext)
// 	}
// }

// export class GeneralWidgetFactory extends WidgetFactory {
// 	constructor(didgahSoftwares: Array<any>, softwareGuid, context: any, appContext: any) {
// 		super(didgahSoftwares, softwareGuid, context, appContext);
// 	}
// }
