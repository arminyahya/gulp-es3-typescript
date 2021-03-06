import { withErrorHandling } from '../utils'

interface Props {
  /**
   * html source path start from called index.html directory
   */
  htmlSrc: string
  dialogArguments?: any
  height?: number
  width?: number
}

const Dialog = ({ htmlSrc, dialogArguments = {}, height = 250, width = 850 }: Props) => {
  const modalOptions = `dialogHeight:${height}px;dialogWidth:${width}px`
  // @ts-ignore
  window.showModalDialog(htmlSrc, dialogArguments, modalOptions)
}
export default withErrorHandling<({ ...args }: Props) => void>(Dialog, 'Dialog')
