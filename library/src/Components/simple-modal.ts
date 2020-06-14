import * as $ from 'jquery'
import { createElement, elementIdGenerator } from '../utils'

export function removeElement(id: string) {
  const element = document.getElementById(id)
  element.style.display = 'none'
}

export default function SimpleModal() {
  const modalId = elementIdGenerator.gererate()
  function onClose() {
    removeElement(modalId)
  }
  const leftPosition = (window.screen.width * 0.5 - 600 / 2).toString() + 'px'
  const wrap = createElement({
    tagName: 'div',
    props: { id: modalId, className: 'simple-modal' },
    onMount: () => {
      const root = document.getElementById('root')

      // if (!root.className.split(' ').find((className) => className === 'modal-is-open')) {
      //   root.className += ' modal-is-open'
      // }
    },
  })
  const inner = createElement({
    tagName: 'div',
    props: { className: 'simple-modal__inner', style: { left: leftPosition } },
  })
  const close = createElement({
    tagName: 'input',
    props: { type: 'button', value: 'x', className: 'simple-modal__close', onclick: onClose },
  })
  inner.appendChild(close)
  const content = createElement({ tagName: 'div', props: { className: 'simple-modal__content' } })
  inner.appendChild(content)
  wrap.appendChild(inner)
  return wrap
}
