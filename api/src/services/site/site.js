import fetch from 'node-fetch'

const baseUrl = `${process.env.WP_URL}wp-json`

export const siteTitle = async () => {
  const response = await fetch(`${baseUrl}/`)
  const json = await response.json()

  return JSON.stringify(json)
}
