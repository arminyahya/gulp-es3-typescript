import { createElement } from "gulp-es3-typescript-library";

interface Props {}

function EmptyBlock({}: Props) {
	return createElement({ tagName: '' })
}

export default {
	component: EmptyBlock
}