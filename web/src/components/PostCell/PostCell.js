export const QUERY = gql`
  query PostQuery($slug: String!) {
    postBySlug(slug: $slug)
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ postBySlug }) => {
  const postData = JSON.parse(postBySlug)[0]
  return (
    <>
      {console.log(postData)}
      <header className="mb-8">
        <h1 className="text-2xl bold">{postData.title.rendered}</h1>
        {postData.jetpack_featured_media_url && (
          <img
            src={postData.jetpack_featured_media_url}
            className="w-full mt-8"
          />
        )}
      </header>
      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
      />
    </>
  )
}
