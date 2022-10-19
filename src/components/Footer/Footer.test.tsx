import { render } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render component', () => {
    const { container } = render(<Footer />)

    expect(container).toBeInTheDocument()
  })
})
