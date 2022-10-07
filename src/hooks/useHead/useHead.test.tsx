import { initialState } from 'stores/reducer'
import { useHead } from '.'
import { renderHook, act } from 'utils/test-utils'

describe('Hooks/useHead', () => {
  it('should head title', () => {
    const { result } = renderHook(useHead)

    expect(result.current.head.title).toBe(initialState.head.title)

    act(() => result.current.actions.add({ title: 'Title Default Testing' }))
    expect(result.current.head.title).toBe('Title Default Testing')
  })
})
