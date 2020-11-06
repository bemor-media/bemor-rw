import { Link, routes } from '@redwoodjs/router'

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
      {JSON.parse(categories).map((category, i) => (
        <li key={i}>
          {console.log(category)}
          <Link
            to={routes.category({ slug: category.slug })}
            className="text-pale"
          >
            {category.name}
          </Link>
        </li>
      ))}
    </>
  )
}
