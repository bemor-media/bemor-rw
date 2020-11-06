import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query PostsQuery {
    posts
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ posts }) => {
  return (
    <>
      {JSON.parse(posts).map((post, i) => (
        <article key={i}>
          {console.log(post)}
          <header>
            <h2>
              <Link
                to={routes.post({ year: parseInt(post.date), slug: post.slug })}
              >
                {post.title.rendered}
              </Link>
            </h2>
          </header>
        </article>
      ))}
    </>
  )
}
