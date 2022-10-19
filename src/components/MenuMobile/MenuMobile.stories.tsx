import { Story, Meta } from '@storybook/react'
import { useState } from 'react'
import MenuMobile from '.'

export default {
  title: 'Components/MenuMobile',
  component: MenuMobile
} as Meta

export const Default: Story = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen((oldOpen) => !oldOpen)}>Open Menu</button>
      <MenuMobile open={open} setOpen={setOpen} />
    </>
  )
}
