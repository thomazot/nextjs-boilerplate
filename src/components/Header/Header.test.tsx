import { render } from 'utils/test-utils'

import Header from '.'

describe('<Header />', () => {
  it('should render component', () => {
    const { container } = render(<Header />)

    expect(container).toBeInTheDocument()
  })
})
