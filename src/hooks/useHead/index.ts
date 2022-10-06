import { StoreContext } from 'stores'
import { useContextSelector } from 'use-context-selector'
import { addHead } from 'stores/actions'
import type { HeadType } from 'stores/actions'

export const useHead = (): {
  head: HeadType
  actions: {
    add: (head: HeadType) => void
  }
} => {
  const [head, dispatch] = useContextSelector(StoreContext, (value) => [
    value.state.head,
    value.dispatch
  ])

  function add(head: HeadType) {
    dispatch(addHead(head))
  }

  return { head, actions: { add } }
}
