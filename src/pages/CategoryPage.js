import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  // use useParams to get the category slug from the URL
  const { category } = useParams()

  // create an object to link each slug to its corresponding category name
  const categoryNames = {
    sights_landmarks: 'Sights & Landmarks',
    cities_towns: 'Cities & Towns',
    food_dining: 'Food & Dining',
    cafes: 'Cafés',
    activities_leisure: 'Activities & Leisure',
    daily_life: 'Daily Life Essentials',
    travel_tips: 'Travel Tips'
  }

  // get the category name based on the slug
  const categoryName = categoryNames[category] || 'Category'

  return (
    <div>
      <h1>{categoryName}</h1>
      <h2>Category specific articles</h2>
    </div>
  )
}

export default CategoryPage