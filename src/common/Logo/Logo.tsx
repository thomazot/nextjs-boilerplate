import Image from 'next/image'
const Logo = () => (
  <div className="ml-4 flex lg:ml-0">
    <a href="#">
      <span className="sr-only">Your Company</span>
      <Image
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt=""
        width="38"
        height="32"
      />
    </a>
  </div>
)

export default Logo
