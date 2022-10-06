import { initialState } from 'stores/reducer'
import { renderHook } from 'utils/test-utils'
import { useHead } from '.'

describe('Hooks/useHead', () => {
  it('should head title', () => {
    const {
      result: {
        current: { head, actions }
      }
    } = renderHook(useHead)

    expect(head.title).toEqual(initialState.head.title)

    actions.add({ title: 'Title Default' })

    expect(head.title).toEqual('Title Default')
  })
})
