import { Link, routes, useLocation } from '@redwoodjs/router'
import SearchForm from 'src/components/SearchForm'
import SiteSettingsCell from 'src/components/SiteSettingsCell'
import CategoriesCell from 'src/components/CategoriesCell'

const Header = () => {
  const { pathname } = useLocation()
  return (
    <>
      <header className="font-sans px-wrap py-2 flex items-center justify-between">
        <Link to={routes.home()} className="text-2xl font-bold text-dark">
          <SiteSettingsCell />
        </Link>
        <SearchForm />
      </header>
      <nav
        className={`px-wrap py-1 bg-night text-pale${
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
