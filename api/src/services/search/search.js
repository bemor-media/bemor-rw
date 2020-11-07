import fetch from 'node-fetch'

const baseUrl = `${process.env.WP_URL}wp-json`

export const search = async ({ query }) => {
  const response = await fetch(
    `${baseUrl}/wp/v2/search?search=${query}&context=embed`
  )
  const json = await response.json()

  return JSON.stringify(json)
}
