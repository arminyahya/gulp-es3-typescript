import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

function emptyBlockViewer() {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'div' })
  return component
}

export default {
	component: emptyBlockViewer,
	events: {
		onInit: () => "" as any,
	},
} as IWidget;
