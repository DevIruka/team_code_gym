import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ showSearchBar = true }) => {
  return (
    <>
      <Header showSearchBar={showSearchBar} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
