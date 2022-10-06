import { ADD_HEAD } from './actions'
import type { ActionType, HeadType } from './actions'

export const initialState: StoreType = {
  head: {
    title: 'Title Default',
    themeColor: '#06092B',
    description:
      'A simple project starter to work with TypeScript, React, NextJS and Styled Components',
    icon: '/favicon.ico'
  }
}

export type StoreType = {
  head: HeadType
}

export const reducer = (state: StoreType, action: ActionType) => {
  switch (action.type) {
    case ADD_HEAD:
      return { ...state, head: { ...state.head, ...action.payload } }

    default:
      return state
  }
}
