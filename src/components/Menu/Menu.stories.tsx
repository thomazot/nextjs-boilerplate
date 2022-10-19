import { Story, Meta } from '@storybook/react'
import Menu from '.'

export default {
  title: 'Components/Menu',
  component: Menu
} as Meta

export const Default: Story = () => (
  <div className="relative">
    <Menu />
  </div>
)
