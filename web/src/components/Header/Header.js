import { Link, routes, useLocation } from '@redwoodjs/router'
import SiteSettingsCell from 'src/components/SiteSettingsCell'
import CategoriesCell from 'src/components/CategoriesCell'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <>
      <header className="px-wrap py-2">
        <Link to={routes.home()}>
          <SiteSettingsCell />
        </Link>
      </header>
      <nav
        className={`px-wrap py-2 bg-night text-pale${
          pathname === '/' ? ' flex-1 flex items-center justify-center' : ''
        }`}
      >
        <ul
          className={`flex items-center w-full gap-3${
            pathname === '/' ? ' flex-col items-center justify-center' : ''
          }`}
        >
          <CategoriesCell />
        </ul>
      </nav>
    </>
  )
}

export default Header
