import fetch from 'node-fetch'

const baseUrl = `https://bemor.com/wp-json`

export const categories = async () => {
  const response = await fetch(`${baseUrl}/wp/v2/categories`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const categoryBySlug = async ({ slug }) => {
  const response = await fetch(`${baseUrl}/wp/v2/categories`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const category = async ({ id }) => {
  const response = await fetch(`${baseUrl}/wp/v2/categories/${id}`)
  const json = await response.json()

  return JSON.stringify(json)
}
