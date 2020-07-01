import { skipComponentComponent } from "./tableExDisplayFields";

function TextViewerFieldFn() {
	return skipComponentComponent();
}

function SelectIndividualViewerFieldFn() {
	return skipComponentComponent();
}

function DateViewerFieldFn() {
	return skipComponentComponent();
}

function TimeViewerFieldFn() {
	return skipComponentComponent();
}

function DateTimeViewerFn() {
	return skipComponentComponent();
}

function BooleanViewerFieldFn() {
	return skipComponentComponent();
}

function DecimalViewerFieldFn() {
	return skipComponentComponent();
}

function CustomViewerFieldFn() {
	return skipComponentComponent();
}

function CustomeViewerInputNumberWithSeperatorFieldFn() {
	return skipComponentComponent();
}

const displayFields = {
	TextBox: TextViewerFieldFn,
	Email: TextViewerFieldFn,
	Url: TextViewerFieldFn,
	TextArea: TextViewerFieldFn,
	SelectStaff: SelectIndividualViewerFieldFn,
	InputNumber: TextViewerFieldFn,
	InputNumberWithSeperator: CustomeViewerInputNumberWithSeperatorFieldFn,
	DatePicker: DateViewerFieldFn,
	TimePicker: TimeViewerFieldFn,
	DateTimePicker: DateTimeViewerFn,
	Checkbox: BooleanViewerFieldFn,
	Switch: BooleanViewerFieldFn,
	InputDecimal: DecimalViewerFieldFn,
	Guid: TextViewerFieldFn,
	ExtensionLite: CustomViewerFieldFn,
	AutoComplete: CustomViewerFieldFn,
	PopupSelector: CustomViewerFieldFn,
	SignatureSelector: CustomViewerFieldFn,
	TableExEditor: CustomViewerFieldFn,
};

export default displayFields;
