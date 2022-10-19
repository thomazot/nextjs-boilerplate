import { render } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render component', () => {
    const { container } = render(<Logo />)

    expect(container).toBeInTheDocument()
  })
})
