import { Link, routes } from '@redwoodjs/router'

const PostListItem = ({ post, title, slug, excerpt, category }) => {
  return (
    <article>
      <header>
        <h2 className="text-3xl">
          <Link
            to={routes.post({
              category: category ? category : 'mindset',
              slug: slug ? slug : post.slug,
            })}
          >
            {title ? title : post.title.rendered}
          </Link>
        </h2>
        {excerpt !== undefined && post.excerpt.rendered !== undefined && (
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        )}
      </header>
    </article>
  )
}

export default PostListItem
