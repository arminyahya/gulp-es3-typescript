import * as lib from "gulp-es3-typescript-library";

interface Props {
  value: string
}

export default function autoCompleteViewer({ value }: Props) {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'input', props: { disabled: true, value: value } })
  return component
}
