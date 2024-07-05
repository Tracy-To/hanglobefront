import React from 'react'
import ArticleCard from '../components/ArticleCard'

const NewArticlesPage = ({articles}) => {
  // sort articles by newest first
  const sortedArticles = [...articles].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return (
    <div>
      <h1>New Articles Page</h1>
      {sortedArticles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default NewArticlesPage