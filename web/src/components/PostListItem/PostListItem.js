import { Link, routes } from '@redwoodjs/router'

const PostListItem = ({ post }) => {
  return (
    <article>
      <header>
        <h2>
          <Link
            to={routes.post({ year: parseInt(post.date), slug: post.slug })}
          >
            {post.title.rendered}
          </Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </header>
    </article>
  )
}

export default PostListItem
