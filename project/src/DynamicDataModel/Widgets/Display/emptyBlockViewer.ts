import * as lib from "gulp-es3-typescript-library";

export default function emptyBlockViewer() {
  const component = lib.createElement<HTMLInputElement>({ tagName: 'div' })
  return component
}
