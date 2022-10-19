import { render } from 'utils/test-utils'

import MenuMobile from '.'

describe('<MenuMobile />', () => {
  it('should render component', () => {
    const { container } = render(
      <MenuMobile open={false} setOpen={() => true} />
    )

    expect(container).toBeInTheDocument()
  })
})
