import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

export default {
	component: lib.autoComplete,
	events: {
		onInit: () => '' as any,
	},
} as IWidget;
