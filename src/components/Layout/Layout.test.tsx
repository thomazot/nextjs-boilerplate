import { render } from 'utils/test-utils'

import Layout from '.'

describe('<Layout />', () => {
  it('should render component', () => {
    const { container } = render(<Layout />)

    expect(container).toBeInTheDocument()
  })
})
