import { createElement } from "gulp-es3-typescript-library";

export function skipComponentComponent() {
	return createElement({ tagName: "span", innerText: "i skipped" });
}
function fnSelectIndividualStore(config) {
	return skipComponentComponent();
}

function fnSelectStaff(config) {
	return skipComponentComponent();
}

function SelectIndividualEditorFieldFn() {
	return skipComponentComponent();
}

function RigidNumberEditorFieldFn() {
	return skipComponentComponent();
}

function TextEditorFieldFn() {
	return skipComponentComponent();
}

function NumberEditorFieldFn() {
	return skipComponentComponent();
}

function DatePickerEditorFieldFn() {
	return skipComponentComponent();
}

function TimePickerEditorFieldFn() {
	return skipComponentComponent();
}

function DateTimePickerEditorFieldFn() {
	return skipComponentComponent();
}

function CheckboxEditorFieldFn() {
	return skipComponentComponent();
}

function CustomEditorFieldFn() {
	return skipComponentComponent();
}

const editorFields = {
	TextBox: TextEditorFieldFn,
	Email: TextEditorFieldFn,
	Url: TextEditorFieldFn,
	TextArea: TextEditorFieldFn,
	SelectStaff: SelectIndividualEditorFieldFn,
	InputNumber: NumberEditorFieldFn,
	InputNumberWithSeperator: CustomEditorFieldFn,
	DatePicker: DatePickerEditorFieldFn,
	TimePicker: TimePickerEditorFieldFn,
	DateTimePicker: DateTimePickerEditorFieldFn,
	Checkbox: CheckboxEditorFieldFn,
	Switch: CheckboxEditorFieldFn,
	InputDecimal: RigidNumberEditorFieldFn,
	Guid: CustomEditorFieldFn,
	ExtensionLite: CustomEditorFieldFn,
	SignatureSelector: CustomEditorFieldFn,
	TableExEditor: CustomEditorFieldFn,
};

export default editorFields;
