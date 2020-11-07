import { useParams } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import PostCell from 'src/components/PostCell'

const PostPage = () => {
  const { slug } = useParams()
  return (
    <MainLayout>
      <article className="py-12">
        <PostCell slug={slug} />
      </article>
    </MainLayout>
  )
}

export default PostPage
