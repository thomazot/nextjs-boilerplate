import NextHead from 'next/head'
import { useHead } from 'hooks/useHead'

const Head: React.FC = () => {
  const { head } = useHead()

  return (
    <NextHead>
      <title>{head.title}</title>
      <link rel="icon" href={head.icon} />

      <meta name="theme-color" content={head.themeColor} />
      <meta name="description" content={head.description} />
    </NextHead>
  )
}

export default Head
