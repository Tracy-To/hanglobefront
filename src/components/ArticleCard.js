import React from 'react'
import { Link } from 'react-router-dom'

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

const ArticleCard = ({article}) => {
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

  // determine content length and add dots if necessary
  const contentPreview = article.content.length > 100
    ? article.content.slice(0, 100) + '. . .'
    : article.content

  return (
    <Link to={`/articles/${article.id}`}>
      <div className="bg-white rounded-lg border shadow-md p-6 mb-6 max-w-md text-center transition duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold mb-4">
          {article.title}
        </h2>
        <p className="text-lg mb-4 italic">
          {categoryName}
        </p>
        <p>
          {contentPreview}
        </p>
        {article.media && (
          <img src={article.media} alt="" className="mt-4 mb-4 rounded-lg mx-auto" style={{ maxWidth: '200px' }} />
        )}
        {article.author && 
          <p>{article.author}</p>
        }
        <p>Written on: {formattedCreatedAt}</p>
        {hasBeenUpdated && 
          <p>Last updated on: {formattedUpdatedAt}</p>
        }
      </div>
    </Link>
  )
}

export default ArticleCard