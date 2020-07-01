import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

export function label({ value }: { value: string }) {
	return lib.createElement({
		tagName: "div",
		innerText: value,
	});
}

export default {
	component: label,
	events: {
		onInit: () => "" as any,
	},
} as IWidget;
