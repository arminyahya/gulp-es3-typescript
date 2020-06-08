import { createElement, withErrorHandling } from '../utils'

const withLabel = (input: HTMLElement, title: string, currentDocument: any = window.document) => {
  const wrapper = createElement({
    currentDocument: currentDocument,
    tagName: 'div',
    props: { className: 'with-label' },
  })
  const label = createElement<HTMLLabelElement>({
    currentDocument: currentDocument,
    tagName: 'label',
    props: { className: 'with-label__label' },
  })
  label.innerHTML = title
  wrapper.appendChild(label)
  wrapper.appendChild(input)
  return wrapper
}

export default withErrorHandling<(input: HTMLElement, title: string) => void>(withLabel, 'withLabel')
