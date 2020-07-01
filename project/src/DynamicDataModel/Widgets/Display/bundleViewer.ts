import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
	value: string;
}

function bundleViewer({ value }: Props) {
	const component = lib.createElement<HTMLInputElement>({
		tagName: "div",
		props: { disabled: true, value: "#" },
	});
	return component;
}

export default {
	component: bundleViewer,
	events: {
		onInit: () => "" as any,
	},
} as IWidget;
