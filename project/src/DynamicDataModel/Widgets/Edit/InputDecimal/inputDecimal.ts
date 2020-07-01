import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
	value: string;
	name: string;
}

function inputDecimal({ value, name }: Props) {
	const component = lib.createElement<HTMLInputElement>({
		tagName: "input",
		props: { value: value, name: name },
	});
	return component;
}

export default {
	component: inputDecimal,
	events: {
		onInit: () => '' as any,
	},
	getConsistentRules: () => [{ pattern: "^[0-9]+\\.[0-9]+$" }],
} as IWidget;
