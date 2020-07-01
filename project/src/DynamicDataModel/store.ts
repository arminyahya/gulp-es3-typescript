import { createAjaxReq, DidgahDeferred } from "gulp-es3-typescript-library";
import DataModelModel = DynamicDataModel.DataModelViewModel;
import OrphanViewModel = DynamicDataModel.OrphanViewModel;
import FieldTypeModel = DynamicDataModel.FieldTypeViewModel;
import BundleViewModel = DynamicDataModel.BundleViewModel;
import OrphanListPageModel = DynamicDataModel.OrphanListPageViewModel;
import OrphanDataEntryViewModel = DynamicDataModel.OrphanDataEntryViewModel;
import FormEntityValueModel = DynamicDataModel.FormEntityValueModel;
import FormDeleteValueModel = DynamicDataModel.FormDeleteValueModel;
import RowModel = DynamicDataModel.RowModel;
import FormValueViewModel = DynamicDataModel.FormValueViewModel;
import EntityType = DynamicDataModel.EntityType;
import FormGeneratorViewModel = DynamicDataModel.FormGeneratorViewModel;
import ErrorTypes = DynamicDataModel.ServiceResultErrorType;
import ScopeViewModel = DynamicDataModel.ScopeViewModel;
import OrphanShareViewModel = DynamicDataModel.OrphanShareViewModel;
import LayoutPageViewModel = DynamicDataModel.LayoutPageViewModel;

export default function DynamicDataModelStore() {
	let APIUrl: string = "/didgah/core/common/ExtraModel/DynamicDataModel/";
	let dataModel: DataModelModel;
	let bundles: Array<BundleViewModel> = [];

	function createDataModel(dataModel: DataModelModel) {
		dataModel = dataModel;
	}

	function addBundle(bundle: BundleViewModel) {
		bundles = bundles.filter(
			(x) => x.FieldInstanceReferenceGuid != bundle.FieldInstanceReferenceGuid
		);
		bundles.push(bundle);
	}

	function saveDataModel(): DidgahDeferred<any> {
		const apiMethodName = !!dataModel.Id ? "Update" : "Save";
		dataModel.Bundles = bundles;
		let deferred = DidgahDeferred.create();
		createAjaxReq("post", APIUrl + apiMethodName, dataModel)
			.then(() => deferred.resolve())
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function saveOrphanData(
		orphanId: number,
		layoutId: number,
		addedRecords: Array<any>,
		modifiedRecods: Array<any>,
		deletedRecords: Array<any>
	) {
		let deferred = DidgahDeferred.create<boolean>();
		const totalLength =
			addedRecords.length + modifiedRecods.length + deletedRecords.length;
		if (totalLength == 0) {
			return deferred.resolve(false);
		}
		//added Entries
		let addedRows: Array<FormEntityValueModel> = [];
		if (addedRecords.length > 0) {
			let rows: RowModel[] = [];
			addedRecords.forEach((item) => {
				rows.push({
					Guid: null,
					ParentGuid: null,
					Values: item,
				});
			});
			addedRows.push({
				EntityId: orphanId,
				EntityType: EntityType.DataModel,
				Rows: rows,
			});
		}
		//
		//deleted Entries
		let deletedRows: Array<FormDeleteValueModel> = [];
		if (deletedRecords.length > 0) {
			let deletedRecordGuids = deletedRecords.map((item) => {
				return item.Guid;
			});

			deletedRows.push({
				EntityId: orphanId,
				EntityType: EntityType.DataModel,
				Guids: deletedRecordGuids,
			});
		}
		//
		//Modified Entries
		let modifiedRows: Array<FormEntityValueModel> = [];
		if (modifiedRecods.length > 0) {
			let rows: RowModel[] = [];
			modifiedRecods.forEach((item) => {
				rows.push({
					Guid: item.Guid,
					ParentGuid: null,
					Values: item,
				});
			});
			modifiedRows.push({
				EntityId: orphanId,
				EntityType: EntityType.DataModel,
				Rows: rows,
			});
		}
		//

		let orphanData = {
			//"DynamicDataModel" name and structure for this object is compulsory
			//If you want to change it you ought to change
			//its corresponding hard coded value in WebApi project of
			//DyanamicDataModel team project
			DynamicDataModel: {
				Added: addedRows,
				DataModelId: orphanId,
				LayoutKey: "0",
				Deleted: deletedRows,
				Modified: modifiedRows,
			} as FormValueViewModel,
		};

		createAjaxReq("post", APIUrl + "SaveFormData", orphanData)
			// @ts-ignore
			.then(() => deferred.resolve(true))
			.fail((errors) => {
				showErrors(errors);
				deferred.resolve(false);
			});
		return deferred;
	}

	function getDataModel(id: any) {
		let deferred = jQuery.Deferred<DataModelModel>();
		createAjaxReq("post", APIUrl + "GetDataModel", { Id: id })
			.then((result: DataModelModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getDataModelByEntity(entityGuid: System.Guid) {
		let deferred = DidgahDeferred.create<DataModelModel>();
		createAjaxReq("post", APIUrl + "GetDataModelByEntity", entityGuid)
			.then((result: DataModelModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getOrphans(scopeGuid: System.Guid) {
		let deferred = new DidgahDeferred<Array<OrphanViewModel>>();
		createAjaxReq("post", APIUrl + "GetOrphans", scopeGuid)
			.then((result: Array<OrphanViewModel>) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getBundle(bundleId: string) {
		let deferred = DidgahDeferred.create<BundleViewModel>();
		createAjaxReq("post", APIUrl + "GetBundle", { Id: bundleId })
			.then((result: BundleViewModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getOrphanListPageModel(softwareGuid: string) {
		let deferred = DidgahDeferred.create<OrphanListPageModel>();
		createAjaxReq("post", APIUrl + "GetOrphanListPageModel", softwareGuid)
			.then((result: OrphanListPageModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getOrphanDataEntryLayout(orphanId: string) {
		let deferred = DidgahDeferred.create<OrphanDataEntryViewModel>();
		createAjaxReq("post", APIUrl + "GetOrphanDataEntryLayout", { Id: orphanId })
			.then((result: OrphanDataEntryViewModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function saveLayout(layoutModel: LayoutPageViewModel) {
		let deferred = DidgahDeferred.create<boolean>();
		createAjaxReq("post", APIUrl + "SaveLayout", layoutModel)
			// @ts-ignore
			.then(() => deferred.resolve(true))
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getLayout(entityGuid: System.Guid, layoutKeyList: Array<string>) {
		let deferred = DidgahDeferred.create<LayoutPageViewModel>();
		const data = {
			entityGuid: entityGuid,
			LayoutKeyList: layoutKeyList,
		};
		createAjaxReq("post", APIUrl + "GetLayout", data)
			.then((result) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});

		return deferred;
	}

	function getOrphanLayout(orphanId: string, layoutKeyList: string) {
		let deferred = DidgahDeferred.create<LayoutPageViewModel>();
		const data = {
			DataModelId: orphanId,
			LayoutKey: layoutKeyList,
		};
		createAjaxReq("post", APIUrl + "GetOrphanLayout", data)
			.then((result) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});

		return deferred;
	}

	function getDesignedFormWithData(
		entityGuid: System.Guid,
		layoutKey: string,
		recordGuid: System.Guid
	) {
		let deferred = DidgahDeferred.create<FormGeneratorViewModel>();
		createAjaxReq("post", APIUrl + "GetDesignedFormWithData", {
			EntityGuid: entityGuid,
			LayoutKey: layoutKey,
			RecordGuid: recordGuid,
		})
			.then((result: FormGeneratorViewModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getDesignedForm(entityGuid: System.Guid, layoutKey: string) {
		let deferred = DidgahDeferred.create<FormGeneratorViewModel>();
		createAjaxReq("post", APIUrl + "GetDesignedForm", {
			EntityGuid: entityGuid,
			LayoutKey: layoutKey,
		})
			.then((result: FormGeneratorViewModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getOrphanDesignedForm(dataModelId: string, layoutKey: string) {
		let deferred = DidgahDeferred.create<FormGeneratorViewModel>();
		createAjaxReq("post", APIUrl + "GetOrphanDesignedForm", {
			DataModelId: dataModelId,
			LayoutKey: layoutKey,
		})
			.then((result: FormGeneratorViewModel) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getSoftwareScopes(softwareGuid: System.Guid, dataModelId: string) {
		let deferred = DidgahDeferred.create<ScopeViewModel[]>();
		createAjaxReq("post", APIUrl + "GetSoftwareScopes", {
			SoftwareGuid: softwareGuid,
			Id: dataModelId,
		})
			.then((result) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function shareOrphan(orphanShare: OrphanShareViewModel) {
		let deferred = DidgahDeferred.create<ScopeViewModel[]>();
		createAjaxReq("post", APIUrl + "ShareOrphans", orphanShare)
			.then((result) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getFieldTypes() {
		let deferred = DidgahDeferred.create<Array<FieldTypeModel>>();
		createAjaxReq("post", APIUrl + "GetTypes", null)
			.then((result: Array<FieldTypeModel>) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function getFieldTypesForOrphan() {
		let deferred = DidgahDeferred.create<Array<FieldTypeModel>>();
		createAjaxReq("post", APIUrl + "GetTypesForOrphan", null)
			.then((result: Array<FieldTypeModel>) => {
				deferred.resolve(result);
			})
			.fail((errors) => {
				showErrors(errors);
				deferred.reject();
			});
		return deferred;
	}

	function showErrors(errors: Array<any>) {}
	return {
		createDataModel,
		addBundle,
		saveDataModel,
		saveOrphanData,
		getDataModel,
		getDataModelByEntity,
		getOrphans,
		getBundle,
		getOrphanListPageModel,
		getOrphanDataEntryLayout,
		saveLayout,
		getLayout,
		getOrphanLayout,
		getDesignedFormWithData,
		getDesignedForm,
		getOrphanDesignedForm,
		getSoftwareScopes,
		shareOrphan,
		getFieldTypes,
		getFieldTypesForOrphan,
		showErrors,
	};
}
