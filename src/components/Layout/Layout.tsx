import Head from 'components/Head'

type LayoutProps = {
  children?: React.ReactNode | React.ReactNode[]
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-full">
    <Head />
    {children}
  </div>
)

export default Layout
