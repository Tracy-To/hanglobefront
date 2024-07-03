import React from 'react'

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

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Category: {categoryName}</p>
      <p>{article.content.slice(0, 25)}</p>
      {article.media && <img src={article.media} alt="" />}
      {article.author && <p>Written by: {article.author}</p>}
    </div>
  )
}

export default ArticleCard