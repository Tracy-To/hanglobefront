import React from 'react'
import ArticleCard from '../components/ArticleCard'

const NewArticlesPage = ({articles}) => {
  // sort articles by newest first
  const sortedArticles = [...articles].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">New Articles Page</h1>
      <h2 className="text-center text-2xl mb-12">Check out the latest articles below!</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {sortedArticles.map(article => (
            <div key={article.id} className="flex justify-center">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewArticlesPage