import PostListItem from 'src/components/PostListItem'

export const QUERY = gql`
  query SearchQuery($query: String!) {
    search(query: $query)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ search }) => {
  const searchData = JSON.parse(search)

  return !searchData?.length ? (
    <p>No search results!</p>
  ) : (
    <div className="py-12 flex flex-col gap-4 md:gap-8">
      {searchData.map((post, i) => (
        <PostListItem
          key={i}
          title={post.title}
          slug={post.url.split('/')[post.url.split('/').length - 2]}
        />
      ))}
    </div>
  )
}
