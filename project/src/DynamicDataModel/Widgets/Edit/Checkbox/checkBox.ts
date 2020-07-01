import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
  checked: boolean
  name: string
}

function Checkbox({ checked, name }: Props) {
  const component = lib.createElement<HTMLInputElement>({
    tagName: 'input',
    props: { checked: true, disabled: true, name: name },
  })
  return component
}

export default {
	component: lib.autoComplete,
	events: {
		onInit: () => '' as any,
	},
} as IWidget;

