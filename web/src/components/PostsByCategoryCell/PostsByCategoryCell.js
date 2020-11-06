export const QUERY = gql`
  query PostsByCategoryQuery {
    postsByCategory {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ postsByCategory }) => {
  return JSON.stringify(postsByCategory)
}
