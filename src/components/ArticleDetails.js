import React from 'react'
import { useNavigate } from 'react-router-dom'
import { apiURL } from '../App'

// the same as ArticleCard.js, but this does not splice the content and this has edit and delete buttons

// link each backend name to its frontend name 
const categoryNames = {
  sights_landmarks: 'Sights & Landmarks',
  cities_towns: 'Cities & Towns',
  food_dining: 'Food & Dining',
  cafes: 'Cafés',
  activities_leisure: 'Activities & Leisure',
  daily_life: 'Daily Life Essentials',
  travel_tips: 'Travel Tips'
}

const ArticleDetails = ({article}) => {
  const navigate = useNavigate()

  // get the frontend name based on the backend name
  const categoryName = categoryNames[article.category] || article.category

  // format the 'created_at' and 'updated_at' dates
  const formattedCreatedAt = new Date(article.created_at).toLocaleDateString('en-US', {
    // ex. 2024
    year: 'numeric',
    // ex. July
    month: 'long',
    // ex. 2
    day: 'numeric'
  })

  const formattedUpdatedAt = new Date(article.updated_at).toLocaleDateString('en-US', {
    // ex. 2024
    year: 'numeric',
    // ex. July
    month: 'long',
    // ex. 2
    day: 'numeric'
  })

  // create Date objects without microseconds for comparison
  const createdAt = new Date(article.created_at).setMilliseconds(0)
  const updatedAt = new Date(article.updated_at).setMilliseconds(0)
  // check if article has been updated
  const hasBeenUpdated = createdAt !== updatedAt

  const handleEdit = () => {
    navigate(`/articles/${article.id}/edit`)
  }

  const handleDelete = async () => {
    // adding a confirm window so users can make sure
    const confirmed = window.confirm("Are you sure you want to delete this article?")
    if (confirmed) {
      await fetch(`${apiURL}/articles/${article.id}/`, {
        method: 'DELETE',
      })
      navigate('/')
    }
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>{article.title}</h2>
      <p>Category: {categoryName}</p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{article.content}</p>
      {article.media && <img src={article.media} alt="" style={{ width: '100%', height: 'auto', maxWidth: '400px' }} />}
      {article.author && <p>Written by: {article.author}</p>}
      <p>Written on: {formattedCreatedAt}</p>
      {hasBeenUpdated && <p>Last updated on: {formattedUpdatedAt}</p>}
      <div>
        <button onClick={handleEdit}>Edit Article</button>
        <br /> <br />
        <button onClick={handleDelete}>Delete Article</button>
        <br /> <br />
      </div>
    </div>
  )
}

export default ArticleDetails