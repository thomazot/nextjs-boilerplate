import { render } from 'utils/test-utils'

import Carousel from '.'

describe('<Carousel />', () => {
  it('should render component', () => {
    const { container } = render(<Carousel />)

    expect(container).toBeInTheDocument()
  })
})
