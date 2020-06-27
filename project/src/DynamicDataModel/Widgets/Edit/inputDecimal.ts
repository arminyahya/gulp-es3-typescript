import * as lib from "gulp-es3-typescript-library";

interface Props {
  value: string
  name: string
}
export default function inputDecimal ({ value, name }: Props) {
  const component = lib.createElement<HTMLInputElement>({
    tagName: 'input',
    props: { value: value, name: name },
  })
  return component
}
