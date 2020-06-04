import { withErrorHandling } from '../utils';

interface Props {
  /**
   * html source path start from called index.html directory
   */
  htmlSrc: string;
  dialogArguments?: any;
  height?: number;
  width?: number;
}

const Modal = ({ htmlSrc, dialogArguments = {}, height = 250, width = 850 }: Props) => {
  const modalOptions = `dialogHeight:${height}px;dialogWidth:${width}px`;
  window.showModalDialog(htmlSrc, dialogArguments, modalOptions);
};
export default withErrorHandling<({ ...args }: Props) => void>(Modal, 'Modal');
