import fetch from 'node-fetch'

const baseUrl = `https://bemor.com/wp-json`

export const posts = async () => {
  const response = await fetch(`${baseUrl}/wp/v2/posts`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const postsByCategory = async ({ id, slug }) => {
  const response = await fetch(
    `${baseUrl}/wp/v2/posts?filter${
      id ? '[cat]=' + id : '[category_slug]=' + slug
    }`
  )
  const json = await response.json()

  return JSON.stringify(json)
}

export const postBySlug = async ({ slug }) => {
  const response = await fetch(`${baseUrl}/wp/v2/posts?slug=${slug}`)
  const json = await response.json()

  return JSON.stringify(json)
}

export const post = async ({ id }) => {
  const response = await fetch(`${baseUrl}/wp/v2/posts/${id}`)
  const json = await response.json()

  return JSON.stringify(json)
}
