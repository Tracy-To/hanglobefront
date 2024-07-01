import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = () => {
  // define categories
  const categories = [
    // using category.slug for site URLS
    { id: 1, name: 'Sights & Landmarks', slug: 'sights_landmarks' },
    { id: 2, name: 'Cities & Towns', slug: 'cities_towns' },
    { id: 3, name: 'Food & Dining', slug: 'food_dining' },
    { id: 4, name: 'Cafés', slug: 'cafes' },
    { id: 5, name: 'Activities & Leisure', slug: 'activities_leisure' },
    { id: 6, name: 'Daily Life Essentials', slug: 'daily_life' },
    { id: 7, name: 'Travel Tips', slug: 'travel_tips' }
  ]

  return (
    <div>
      {categories.map(category => (
        <div key={category.id}>
          <Link to={`/explore/${category.slug}`}>{category.name}</Link>
          <br /> <br />
        </div>
        ))}
    </div>
  )
}

export default CategoryList