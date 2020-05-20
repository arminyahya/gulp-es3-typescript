import { withErrorHandling } from "../utils";

interface Props {
	htmlsrc: string;
	height?: number;
	width?: number;
}

const Modal = ({ htmlsrc, height = 250, width = 850 }: Props) => {
	const modalOptions = `dialogHeight:${height}px;dialogWidth:${width}px`;
	window.showModalDialog(htmlsrc, "", modalOptions)
}
export default withErrorHandling(Modal, 'Modal');
