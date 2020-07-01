import DefaultWidget from "./Edit/Textbox/textbox";
import DefaultSettingForm from "./Edit/Textbox/textboxSettingForm";
import editWidgetsFactory from "./Edit/index";
import displayWidgetsFactory from "./Display/index";

import IWidget = DynamicDataModel.Layout.IWidget;

const defaultWidget: IWidget = {
	component: DefaultWidget.component,
	setting: DefaultSettingForm,
	events: DefaultWidget.events,
};

export default (id: string) => {
	const widgetWrapper = editWidgetsFactory(id) || displayWidgetsFactory(id);
	return (widgetWrapper || defaultWidget) as IWidget;
};
