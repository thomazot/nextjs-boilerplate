import React, { useReducer } from 'react'
import { createContext } from 'use-context-selector'
import _ from 'lodash'
import { initialState, reducer } from './reducer'
import type { ActionType } from './actions'
import type { StoreType } from './reducer'

type ContextType = {
  state: StoreType
  dispatch: React.Dispatch<ActionType>
}

export const StoreContext = createContext<ContextType>({} as ContextType)

type StoreContextProps = {
  children?: React.ReactNode | React.ReactNode[]
  initialStore?: StoreType
}

export const StoreContextProvider: React.FC<StoreContextProps> = ({
  children,
  initialStore
}) => {
  const [state, dispatch] = useReducer<React.Reducer<StoreType, ActionType>>(
    reducer,
    _.merge(initialState, initialStore)
  )

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
