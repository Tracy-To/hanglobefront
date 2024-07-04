import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleDetails from '../components/ArticleDetails'
import { apiURL } from '../App'

const ArticlePage = (props) => {
  const { article_id } = useParams()
  const [article, setArticle] = useState(null)

  useEffect(() => {
    const getArticle = async () => {
      const response = await fetch(`${apiURL}/articles/${article_id}`)
      const data = await response.json()
      setArticle(data)
    }
    getArticle()
  }, [article_id])

  return (
    <div>
      {article ? <ArticleDetails article={article} /> : <p>Loading...</p>}
    </div>
  )
}

export default ArticlePage