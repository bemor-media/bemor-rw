import { Link, routes } from '@redwoodjs/router'
import PostListItem from 'src/components/PostListItem'

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
        <PostListItem key={i} post={post} />
      ))}
    </>
  )
}
