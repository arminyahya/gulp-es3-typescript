import Textbox from './Textbox/textbox';
import Textarea from './Textarea/textarea';
import AutoComplete from './AutoComplete/autoComplete'
import Email from './Email/email';
import Url from './Url/url';
import Checkbox from './Checkbox/checkbox';
import InputNumber from './InputNumber/inputNumber';
import Guid from './Guid/guid';
import InputDecimal from './InputDecimal/InputDecimal';
import IWidget = DynamicDataModel.Layout.IWidget;
import { DidgahDeferred } from 'gulp-es3-typescript-library';
import AutoCompleteSettingForm from './AutoComplete/autoCompleteSettingForm';
import TextboxSettingForm from './Textbox/textboxSettingForm';
import GeneralSetting from './generalSetting';
import EmptyBlock from './EmptyBlock/emptyBlock';

const WIDGETS: { [name: string]: IWidget } = {
	'TextBox': {
		component: Textbox.component,
		setting: TextboxSettingForm,
		events: Textbox.events
	},
	'TextArea': {
		component: Textarea.component,
		setting: TextboxSettingForm,
		events: Textarea.events
	}
	,
	'AutoComplete': {
		component: AutoComplete.component,
		setting: AutoCompleteSettingForm,
		events: AutoComplete.events
	},
	'Email': {
		component: Email.component,
		setting: GeneralSetting,
		events: Email.events,
		getConsistentRules: Email.getConsistentRules
	},
	'Url': {
		component: Url.component,
		setting: GeneralSetting,
		events: Url.events,
		getConsistentRules: Url.getConsistentRules
	},
	'Checkbox': {
		component: Checkbox.component,
		setting: GeneralSetting,
		events: Checkbox.events,
	},
	'InputNumber': {
		component: InputNumber.component,
		setting: () => '',
		events: InputNumber.events,
	},
	'Guid': {
		component: Guid.component,
		setting: () => '',
		events: Guid.events,
		getConsistentRules: Guid.getConsistentRules
	},
	'InputDecimal': {
		component: InputDecimal.component,
		setting: () => '',
		events: InputDecimal.events,
		getConsistentRules: InputDecimal.getConsistentRules
	},
	'EmptyBlock': {
		component: EmptyBlock.component,
	},
}

const defaultWidget = {
	events: {
		onInit: (widgetId: string, attributes: object) => {
			const dfd = DidgahDeferred.create();
			dfd.resolve();
			return dfd.promise();
		}
	},
	getConsistentRules: () => []
}

export default (id: string) => { return WIDGETS[id] && { ...defaultWidget, ...WIDGETS[id] } };