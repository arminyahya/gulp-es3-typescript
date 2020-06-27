import * as lib from "gulp-es3-typescript-library";

interface Props {
  value: string
}

export default function bundleViewer({ value }: Props) {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'div', props: { disabled: true, value: '#' } })
  return component
}
