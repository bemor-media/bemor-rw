import { NavLink, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query CategoriesQuery {
    categories
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ categories }) => {
  return (
    <>
      {JSON.parse(categories).map(
        (category, i) =>
          category.count > 0 && (
            <li key={i}>
              <NavLink
                to={routes.category({ slug: category.slug })}
                className="block text-pale rounded-md py-1 px-3"
                activeClassName="bg-pale text-night rounded-b-none -mb-1 pb-2"
              >
                {category.name}
              </NavLink>
            </li>
          )
      )}
    </>
  )
}
