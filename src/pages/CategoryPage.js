import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'

const CategoryPage = ({articles}) => {
  // use useParams to get the category slug from the URL
  const { category } = useParams()

  // link each slug to its corresponding category name
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

  // filter articles based on their category and sort by newest first
  const filteredArticles = articles
    .filter(article => article.category === category)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

  return (
    <div>
      <h1>{categoryName}</h1>
      {filteredArticles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default CategoryPage