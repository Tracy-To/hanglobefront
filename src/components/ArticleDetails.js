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
    <div className="container mx-auto bg-white rounded-xl border shadow-lg p-12 mt-20 mb-20 text-center max-w-4xl">
      <h2 className="text-2xl font-semibold mb-8">
        {article.title}
      </h2>
      <p className="text-xl italic mb-8">
        {categoryName}
      </p>
      <p className="text-lg mx-auto max-w-prose whitespace-pre-wrap mb-8">
        {article.content}
      </p>
      {article.media && <img src={article.media} alt="" className="rounded-lg mx-auto mb-8" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />}
      {article.author && <p className="text-lg mb-2">{article.author}</p>}
      <p className="text-lg mb-2">Written on: {formattedCreatedAt}</p>
      {hasBeenUpdated && <p className="text-lg mb-2">Last updated on: {formattedUpdatedAt}</p>}
      <div className="flex justify-center space-x-12">
        <button onClick={handleEdit} className="bg-blue-500 text-lg text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-blue-700 mt-8">
          Edit Article
        </button>
        <button onClick={handleDelete} className="bg-red-500 text-lg text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-red-700 mt-8">
          Delete Article
        </button>
      </div>
    </div>
  )
}

export default ArticleDetails