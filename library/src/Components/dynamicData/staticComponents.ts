import { mapIntoTD } from '../tableBaseOnRow'
import { createElement } from '../../utils'

export function addNewRow(onAdd) {
  return {
    input: wrapDiv(
      createElement<HTMLInputElement>({
        tagName: 'input',
        props: {
          className: 'dynamic-table__row__add-button',
          type: 'button',
          value: '+',
          onclick: () => {
            onAdd()
          },
        },
      })
    ),
    cellProps: { className: 'text-center' },
  }
}

export function removeCell(index, onRemove) {
  return {
    input: wrapDiv(
      createElement<HTMLInputElement>({
        tagName: 'input',
        props: {
          className: 'dynamic-table__row__remove-button',
          type: 'button',
          value: 'x',
          onclick: () => {
            onRemove(index)
          },
        },
      })
    ),
    cellProps: { className: 'text-center' },
  }
}

export function settingCell(index, onSetting) {
  return {
    input: wrapDiv(
      createElement<HTMLInputElement>({
        tagName: 'input',
        props: {
          className: 'dynamic-table__row__setting-button',
          type: 'button',
          value: '...',
          onclick: () => {
            onSetting(index)
          },
        },
      })
    ),
    cellProps: { className: 'text-center' },
  }
}

export function wrapDiv(element: any) {
  const wrapper = createElement({ tagName: 'div' })
  wrapper.appendChild(element)
  return wrapper
}

export function gridRowElement() {
  return createElement({ tagName: 'tr', props: { className: 'listRowNormal' } })
}
