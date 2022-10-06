import HomeTemplate from 'templates/Home'

export default function Home() {
  return <HomeTemplate />
}

export function getServerSideProps() {
  return {
    props: {
      initialStore: {
        head: {
          title: 'Home Page'
        }
      }
    }
  }
}
