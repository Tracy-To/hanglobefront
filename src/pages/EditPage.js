import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import EditForm from '../components/EditForm'
import { apiURL } from '../App'

const EditPage = (props) => {
  const { article_id } = useParams()
  const [article, setArticle] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getArticle = async () => {
      const response = await fetch(`${apiURL}/articles/${article_id}`)
      const data = await response.json()
      setArticle(data)
    }
    getArticle()
  }, [article_id]) 

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`${apiURL}/articles/${article_id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        navigate(`/articles/${article_id}`)
      } else {
        console.error('Failed to update article:', response.status)
      }
    } catch (error) {
      console.error('Error updating article:', error)
    }
  }

  return (
    <div>
      <h1>Edit Page</h1>
      {article ? <EditForm article={article} onSubmit={handleSubmit} /> : <p></p>}
    </div>
  )

}

export default EditPage