export const QUERY = gql`
  query SiteSettingsQuery {
    siteTitle
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ siteTitle }) => {
  const siteData = JSON.parse(siteTitle)
  return <span>{siteData.name}</span>
}
