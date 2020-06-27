import * as lib from "gulp-es3-typescript-library";

export function labelNumberWithSeperator({ value }: { value: number }) {
  return lib.createElement({
    tagName: 'div',
    innerText: !!value && value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
  })
}
