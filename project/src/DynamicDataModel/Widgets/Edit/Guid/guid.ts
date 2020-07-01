import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
	value: string;
	name: string;
}
function guid({ value, name }: Props) {
	const component = lib.createElement<HTMLInputElement>({
		tagName: "input",
		props: {
			value: value,
			name: name,
			placeholder: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
		},
	});
	return component;
}

export default {
	component: guid,
	events: {
		onInit: () => "" as any,
	},
	getConsistentRules: () => [
		{
			pattern:
				"^({){0,1}[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(}){0,1}$",
		},
	],
} as IWidget;
