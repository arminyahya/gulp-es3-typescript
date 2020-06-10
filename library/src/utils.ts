import * as $ from 'jquery'

export const currentDocumentObj = {
  currentDocument: null,
  getCurrentDocument: function () {
    return this.currentDocument
  },
  setCurentDocument: function (doc) {
    this.currentDocument = doc
  },
}

export const container = document.getElementById('root')

export const isObjectDomElement = (object) => {
  return object.scopeName && object.scopeName === 'HTML'
}

export const getElementWithStyle = (element, styles: { key: string; value: string }[]) => {
  const clonedObject = element.cloneNode()
  styles.forEach((style) => {
    clonedObject.style[style.key] = style.value
  })
  return clonedObject
}

export const renderIntoRoot = (element: HTMLElement) => {
  container.appendChild(element)
}

export const getElementWithClassNames = (element: HTMLElement, classNames: string[]) => {
  const clonedObject = element.cloneNode(true) as HTMLElement
  classNames.forEach((className) => {
    clonedObject.className += ` ${className}`
  })
  return clonedObject
}
/**
 * no need to assing me to new variable, use me directly
 */
export const elementIdGenerator = {
  busyIds: [],
  gererate: function () {
    const id = Math.random() * 10
    if ($(`#${id}`).length === 0 && !this.busyIds.find((item) => item === id)) {
      this.busyIds.push(id)
      return id.toString()
    } else {
      this.gererate()
    }
  },
}

interface createElementArgs<T> {
  tagName: string
  // override default style type
  props?: Partial<Omit<T, 'style'> & { style?: Partial<CSSStyleDeclaration> }>
  onMount?: () => void
}

export const createElement = function <T = any>({ tagName, props, onMount }: createElementArgs<T>) {
  const element = currentDocumentObj.getCurrentDocument().createElement(tagName) as HTMLElement
  const idGenerator = elementIdGenerator
  for (const prop in props) {
    if (prop === 'style') {
      for (const style in props[prop]) {
        element.style[style as string] = props[prop][style]
      }
    } else {
      element[prop as any] = props[prop]
    }
  }

  if (onMount) {
    if (!props || !props['id']) {
      element.id = idGenerator.gererate()
    }
    $(currentDocumentObj.getCurrentDocument())
      .find(element.id)
      .ready(() => {
        onMount()
      })
  }
  return element
}

export const withErrorHandling = <T extends (...args: any[]) => any>(component: any, componentName: string) => (
  ...args: Parameters<T>
) => {
  try {
    return component(...args)
  } catch (e) {
    alert('error happend in ' + componentName + ' ' + e.message || e)
  }
}

export function formToJSON(selector) {
  const form = {}
  $(selector)
    .find('input')
    .each(function () {
      const self = $(this)
      const name = self.attr('fieldName')
      if (form[name]) {
        form[name] = form[name] + ',' + self.val()
      } else {
        form[name] = self.val()
      }
    })

  return form
}

export function dialogFormToJSON() {
  const form = {}
  $('input[type="text"]').each(function () {
    const self = $(this)
    const name = self.attr('fieldName')
    if (form[name]) {
      form[name] = form[name] + ',' + self.val()
    } else {
      form[name] = self.val()
    }
  })

  return form
}
