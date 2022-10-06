import { render } from 'utils/test-utils'

import Home from '.'

describe('<Home />', () => {
  it('should render component', () => {
    const { container } = render(<Home />)

    expect(container).toBeInTheDocument()
  })
})
