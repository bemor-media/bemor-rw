import { Link, routes, useParams } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import SearchCell from 'src/components/SearchCell'

const SearchPage = () => {
  const { s } = useParams()

  const searchString = decodeURIComponent(s)

  return (
    <MainLayout>
      <h1>Search for: &ldquo;{searchString}&rdquo;</h1>

      <SearchCell query={searchString} />
    </MainLayout>
  )
}

export default SearchPage
