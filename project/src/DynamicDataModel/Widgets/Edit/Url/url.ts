import { createElement } from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {}
function Url({}: Props) {
	return createElement({ tagName: "" });
}

export default {
	component: Url,
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
