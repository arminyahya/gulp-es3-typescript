import { createElement, withErrorHandling } from '../utils'
import DidgahDeferred from '../DidgahDeferred'
import { createAjaxReq } from '../ajax'

interface Props {
  value?: string
  name?: string
}

function BooleanField({ value, name }: Props) {
  const booleanField = createElement({ tagName: 'div', props: { className: 'booleanField' } })
  booleanField.appendChild(
    createElement<HTMLInputElement>({ tagName: 'input', props: { type: 'checkbox', value, name } })
  )
  return booleanField
}

export type InitAjaxAttributes = {
  EntityId: any
  ReferenceFieldId: any
}

export default withErrorHandling<({ ...args }: Props) => void>(
  {
    component: BooleanField,
  },
  'BooleanField'
)
