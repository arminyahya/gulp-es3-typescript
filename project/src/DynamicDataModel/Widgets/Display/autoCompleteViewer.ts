import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
  value: string
}

function autoCompleteViewer({ value }: Props) {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'input', props: { disabled: true, value: value } })
  return component
}


export default {
	component: autoCompleteViewer,
	events: {
		onInit: () => '' as any,
	},
} as IWidget;
