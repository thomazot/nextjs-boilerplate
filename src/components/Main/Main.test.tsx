import { render } from 'utils/test-utils'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
