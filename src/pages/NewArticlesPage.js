import React from 'react'
import ArticleCard from '../components/ArticleCard'

const NewArticlesPage = ({articles}) => {
  return (
    <div>
      <h1>New Articles Page</h1>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default NewArticlesPage