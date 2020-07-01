import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
	value: string;
	name: string;
}

function inputNumber({ value, name }: Props) {
	const component = lib.createElement<HTMLInputElement>({
		tagName: "input",
		props: { value: value, name: name },
	});
	return component;
}

export default {
	component: inputNumber,
	events: {
		onInit: () => "" as any,
	},
	getConsistentRules: () => [
		{
			pattern:
				"((https://)|| (http://))?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)",
		},
	],
} as IWidget;
