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
      <header
        className={`${
          postData.jetpack_featured_media_url
            ? 'post-featured-image'
            : 'w-full max-w-4xl mx-auto'
        } mb-12 text-center`}
        style={
          postData.jetpack_featured_media_url && {
            backgroundImage: 'url(' + postData.jetpack_featured_media_url + ')',
          }
        }
      >
        <h1>{postData.title.rendered}</h1>
      </header>
      <div
        className="entry-content max-w-2xl mx-auto w-full"
        dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
      />
    </>
  )
}
