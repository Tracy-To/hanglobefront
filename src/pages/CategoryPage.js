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
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">{categoryName}</h1>
      <h2 className="text-center text-2xl mb-12">
        Find articles related to <span className="italic">{categoryName}</span> below!
      </h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {filteredArticles.map(article => (
            <div key={article.id} className="flex justify-center">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage