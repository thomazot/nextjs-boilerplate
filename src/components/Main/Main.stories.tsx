import { Story, Meta } from '@storybook/react'
import Main from '.'

export default {
  title: 'Components/Main',
  component: Main,
  args: {
    children: 'Component Main'
  }
} as Meta

export const Default: Story = (args) => <Main {...args} />
