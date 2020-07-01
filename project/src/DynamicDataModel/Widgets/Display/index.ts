import ReadonlyCheckBox from './readonlyCheckbox';
import AutoCompleteViewer from './autoCompleteViewer';
import EmptyBlockViewer from './emptyBlockViewer';
import LabelNumberWithSeperator from "./labelNumberWithSeperator";
import IWidget = DynamicDataModel.Layout.IWidget;

const WIDGETS: { [name: string]: IWidget } = {
	'AutoCompleteViewer': {
		component: AutoCompleteViewer.component,
		events: AutoCompleteViewer.events,
		setting: () => '',
	},
	'EmptyBlockViewer': {
		component: EmptyBlockViewer.component,
	},
	'LabelNumberWithSeperator': {
		component: LabelNumberWithSeperator.component,
		events: LabelNumberWithSeperator.events,
		setting: () => ''
	},
}

const defaultWidget = {
	events: {
		onInit: (widgetId: string, attributes: object) => {
			return '' as any
		}
	},
	getConsistentRules: () => []
}

export default (id: string) => { return WIDGETS[id] && { ...defaultWidget, ...WIDGETS[id] } };