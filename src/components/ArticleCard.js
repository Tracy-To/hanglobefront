import React from 'react'

// create an object to link each backend category name to its user-friendly version
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
  // get the user-friendly name based on the backend one
  const categoryName = categoryNames[article.category] || article.category

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content.slice(0, 25)}</p>
      {article.media && <img src={article.media} alt="" />}
      <p>Category: {categoryName}</p>
      {article.author && <p>Written by: {article.author}</p>}
    </div>
  )
}

export default ArticleCard