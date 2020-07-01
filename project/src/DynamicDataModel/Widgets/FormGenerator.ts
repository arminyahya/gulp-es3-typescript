import DynamicDataModelStore from "../store";
// import FormRenderer from './formRenderer'
import FormGeneratorViewModel = DynamicDataModel.FormGeneratorViewModel;
import FormValueViewModel = DynamicDataModel.FormValueViewModel;
import EntityType = DynamicDataModel.EntityType;
import FormEntityValueModel = DynamicDataModel.FormEntityValueModel;
import FormDeleteValueModel = DynamicDataModel.FormDeleteValueModel;

export interface ExtraModelFormArg {
	validate?: () => PromiseLike<{ errors: any[]; values: object }>;
	setFieldsValue?: (value: object) => void;
}

interface FormGenertorOnCreateArgs {
	getFormData: () => PromiseLike<{ errors: any[]; data: object }>;
}

interface FormGeneratorProps {
	entityGuid?: System.Guid;
	layoutKey: string;
	platform: string;
	recordGuid: System.Guid;
	onCreated: (form: FormGenertorOnCreateArgs) => void;
	mode: "add" | "edit";
}

function FormGenerator({
	entityGuid,
	layoutKey,
	platform,
	recordGuid,
	onCreated,
	mode,
}: FormGeneratorProps) {
	let formGeneratorViewModel: FormGeneratorViewModel;
	let extraModelForm: ExtraModelFormArg;
	let store = DynamicDataModelStore();

	function getLayoutkey() {
		return `${layoutKey}-${platform}`;
	}

	function componentDidMount() {
		const targetApiCall =
			mode === "add"
				? store.getDesignedForm.bind(store)
				: store.getDesignedFormWithData.bind(store);

		targetApiCall(entityGuid, getLayoutkey(), recordGuid).then(
			(result: FormGeneratorViewModel) => {
				formGeneratorViewModel = result;
			}
		);
	}

	function setExtraModelFormArgs(extraModelForm: ExtraModelFormArg) {
		extraModelForm = extraModelForm;
	}

	function prepareFormData(formData) {
		const { LayoutItems } = formGeneratorViewModel;
		const addedValues: Array<FormEntityValueModel> = [];
		const modifiedValues: Array<FormEntityValueModel> = [];
		const deletedValues: Array<FormDeleteValueModel> = [];

		for (let key in formData.values) {
			formData.values[key] =
				formData.values[key] === undefined ? null : formData.values[key];
			const layoutItem =
				!!LayoutItems &&
				LayoutItems.filter((x) => x.FieldInstance.Name === key)[0];
			if (!!layoutItem && layoutItem.IsBundle && !!formData.values[key]) {
				const addedRows = formData.values[key]
					.filter((x) => x["__status"] === "added")
					.map((x) => ({ ...x }));
				const editedRows = formData.values[key]
					.filter((x) => x["__status"] === "edited")
					.map((x) => ({ ...x }));
				const deletedRows = formData.values[key]
					.filter((x) => x["__status"] === "deleted")
					.map((x) => ({ ...x }));

				if (addedRows.length > 0) {
					let addedValue: FormEntityValueModel = {
						EntityId: layoutItem.FieldInstance.FieldInstanceId as any,
						EntityType: EntityType.Bundle,
						Rows: [],
					};

					addedRows.forEach((row) => {
						delete row["__extendedData"];
						delete row["__index"];
						delete row["__mode"];
						delete row["__status"];
						delete row["__validationStatus"];

						addedValue.Rows.push({
							Guid: null,
							ParentGuid: recordGuid,
							Values: row,
						});
					});

					addedValues.push(addedValue);
				}

				if (editedRows.length > 0) {
					let modifiedValue: FormEntityValueModel = {
						EntityId: layoutItem.FieldInstance.FieldInstanceId as any,
						EntityType: EntityType.Bundle,
						Rows: [],
					};

					editedRows.forEach((row) => {
						delete row["__extendedData"];
						delete row["__index"];
						delete row["__mode"];
						delete row["__status"];
						delete row["__validationStatus"];

						modifiedValue.Rows.push({
							Guid: row["Guid"],
							ParentGuid: recordGuid,
							Values: row,
						});
					});

					modifiedValues.push(modifiedValue);
				}

				if (deletedRows.length > 0) {
					let deletedValue: FormDeleteValueModel = {
						EntityId: layoutItem.FieldInstance.FieldInstanceId as any,
						EntityType: EntityType.Bundle,
						Guids: [],
					};

					deletedRows.forEach((row) => {
						delete row["__extendedData"];
						delete row["__index"];
						delete row["__mode"];
						delete row["__status"];
						delete row["__validationStatus"];

						deletedValue.Guids.push(row["Guid"]);
					});

					deletedValues.push(deletedValue);
				}

				delete formData.values[key];
			}
		}

		if (mode === "add") {
			Object.keys(formData.values).length &&
				addedValues.push({
					EntityId: formGeneratorViewModel.DataModelId as any,
					EntityType: EntityType.DataModel,
					Rows: [
						{
							Guid: null,
							ParentGuid: recordGuid,
							Values: formData.values,
						},
					],
				});
		} else {
			Object.keys(formData.values).length &&
				modifiedValues.push({
					EntityId: formGeneratorViewModel.DataModelId as any,
					EntityType: EntityType.DataModel,
					Rows: [
						{
							Guid: formGeneratorViewModel.formData.Guid,
							ParentGuid: recordGuid,
							Values: formData.values,
						},
					],
				});
		}

		const dynamicDataModelData = {
			DynamicDataModel: {
				DataModelId: formGeneratorViewModel.DataModelId,
				LayoutKey: formGeneratorViewModel.Layoutkey,
				Added: addedValues,
				Modified: modifiedValues,
				Deleted: deletedValues,
				RecordGuid: recordGuid,
			} as any,
		};

		return dynamicDataModelData;
	}

	function getFormData() {
		return new Promise<{ errors: any[]; data: object }>((executor) => {
			extraModelForm.validate().then((formData) => {
				const result = prepareFormData(formData);
				executor({ errors: formData.errors, data: result });
			});
		});
	}

	function render() {
		// return (
		// 	<Spin spinning={loading} stretch>
		// 		{!loading && <FormRenderer designedLayout={this.formGeneratorViewModel} setExtraModelFormArgs={this.setExtraModelFormArgs} />}
		// 	</Spin>
		// )
	}
}

export default FormGenerator;
