import * as lib from "gulp-es3-typescript-library";
import IWidget = DynamicDataModel.Layout.IWidget;

interface Props {
  value: string
  name: string
}

function Email({ value, name }: Props) {
  const component = lib.createElement<HTMLInputElement>({
    tagName: 'input',
    props: { value: value, name: name },
  })
  return component
}


export default {
	component: Email,
	events: {
		onInit: () => '' as any,
	},
} as IWidget;
