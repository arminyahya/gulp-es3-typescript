import * as $ from 'jquery'
import { createElement, elementIdGenerator, renderIntoRoot } from '../utils'

export function removeElement(id: string) {
  // const element = document.getElementById(id)
  // element.style.display = 'none'
  const node = document.getElementById(id)
  if (node.parentNode) {
    node.parentNode.removeChild(node)
  }
}

export default function SimpleModal() {
  const modalId = elementIdGenerator.gererate()
  const overlayId = elementIdGenerator.gererate()
  const lastModal = $('.simple-modal')
  const overlay = createElement({ tagName: 'div', props: { id: overlayId, className: 'simple-modal__overlay' } })
  if (lastModal.length === 0) {
    document.getElementById('root').appendChild(overlay)
  } else {
    lastModal.after(overlay)
  }

  function onClose() {
    removeElement(modalId)
    removeElement(overlayId)
  }
  const leftPosition = (window.screen.width * 0.5 - 600 / 2).toString() + 'px'
  const wrap = createElement({
    tagName: 'div',
    props: { id: modalId, className: 'simple-modal', style: { left: leftPosition } },
  })
  const inner = createElement({
    tagName: 'div',
    props: { className: 'simple-modal__inner' },
  })
  const close = createElement({
    tagName: 'input',
    props: { type: 'button', value: 'x', className: 'simple-modal__close', onclick: onClose },
  })
  inner.appendChild(close)
  const content = createElement({ tagName: 'div', props: { className: 'simple-modal__content' } })
  inner.appendChild(content)
  wrap.appendChild(inner)
  return { modal: wrap, onClose: onClose }
}
