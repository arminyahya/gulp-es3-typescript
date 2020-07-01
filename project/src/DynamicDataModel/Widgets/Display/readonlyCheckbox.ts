import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
  checked: boolean
}

function readonlyCheckbox({ checked }: Props) {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'input', props: { checked: true, disabled: true } })
  return component
}

export default {
	component: readonlyCheckbox,
	events: {
		onInit: () => "" as any,
	},
} as IWidget;
