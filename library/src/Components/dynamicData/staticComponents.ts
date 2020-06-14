import { mapIntoTD } from '../tableBaseOnRow'
import { createElement } from '../../utils'

export function addNewRow(onAdd) {
  return {
    renderer: mapIntoTD([
      {
        input: createElement<HTMLInputElement>({
          tagName: 'input',
          props: {
            className: 'dynamic-table__row__add-button',
            type: 'button',
            value: '+',
            onclick: () => {
              onAdd()
            },
          },
        }),
      },
    ]),
  }
}

export function removeCell(index, onRemove) {
  return {
    input: createElement<HTMLInputElement>({
      tagName: 'input',
      props: {
        className: 'dynamic-table__row__remove-button',
        type: 'button',
        value: 'x',
        onclick: () => {
          onRemove(index)
        },
      },
    }),
    cellProps: { style: { width: '50px' } },
  }
}

export function settingCell(index, onSetting) {
  return {
    input: createElement<HTMLInputElement>({
      tagName: 'input',
      props: {
        className: 'dynamic-table__row__setting-button',
        type: 'button',
        value: '...',
        onclick: () => {
          onSetting(index)
        },
      },
    }),
  }
}
