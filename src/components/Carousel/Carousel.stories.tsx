import { Story, Meta } from '@storybook/react'
import Image from 'next/image'
import Carousel from '.'

export default {
  title: 'Components/Carousel',
  component: Carousel
} as Meta

export const Default: Story = () => (
  <Carousel>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
    <div>
      <Image src="https://placeimg.com/300/300/any" alt="" />
    </div>
  </Carousel>
)
