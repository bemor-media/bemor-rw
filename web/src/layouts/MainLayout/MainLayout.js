import { useLocation } from '@redwoodjs/router'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const MainLayout = ({ children }) => {
  const { pathname } = useLocation()
  return (
    <>
      <Header />
      <main className={`px-wrap${pathname !== '/' ? ' flex-1' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
