import * as lib from "gulp-es3-typescript-library";

interface Props {
  checked: boolean
  name: string
}
export default function Checkbox({ checked, name }: Props) {
  const component = lib.createElement<HTMLInputElement>({
    tagName: 'input',
    props: { checked: true, disabled: true, name: name },
  })
  return component
}
