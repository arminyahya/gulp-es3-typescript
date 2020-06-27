import * as lib from "gulp-es3-typescript-library";

interface Props {
  checked: boolean
}
export default function readonlyCheckbox({ checked }: Props) {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'input', props: { checked: true, disabled: true } })
  return component
}
