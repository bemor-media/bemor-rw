import { useParams } from '@redwoodjs/router'
import MainLayout from 'src/layouts/MainLayout'
import PostsByCategoryCell from 'src/components/PostsByCategoryCell'

const CategoryPage = () => {
  const { slug } = useParams()
  return (
    <MainLayout>
      <div className="py-12 flex flex-col gap-4 md:gap-8">
        <PostsByCategoryCell slug={slug} />
      </div>
    </MainLayout>
  )
}

export default CategoryPage
