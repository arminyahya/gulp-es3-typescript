export const container = document.getElementById('root');

export const isObjectDomElement = (object) => {
	return object.scopeName && object.scopeName === 'HTML'
}

export const getElementWithStyle = (element, styles: { key: string, value: string }[]) => {
	const clonedObject = element.cloneNode();
	styles.forEach(style => {
		clonedObject.style[style.key] = style.value;
	});
	return clonedObject;
}

export const renderIntoRoot = (element) => {
	container.appendChild(element);
}

export const getElementWithClassNames = (element, classNames: string[]) => {
	const clonedObject = element.cloneNode();
	classNames.forEach(className => {
		clonedObject.className += ` ${className}`
	});
	return clonedObject;
}

export const elementIdGenerator = {
	id: 0,
	gererate: function () {
		this.id++;
		return this.id.toString();
	}
}

interface createElementArgs<T> {
	tagName: string;
	props?: T;
}

export const createElement = function <T = React.AllHTMLAttributes<any>>({ tagName, props }: createElementArgs<T>) {
	const element = document.createElement(tagName) as HTMLElement;
	for (let prop in props) {
		if (prop === 'style') {
			for (let style in props[prop]) {
				element.style[style as string] = props[prop][style];
			}
		} else {
			element[prop as any] = props[prop]
		}
	}
	return element;
}
