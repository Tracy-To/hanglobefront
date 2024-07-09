import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = (props) => {
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
    <div className="max-w-lg mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-6">
          {categories.map(category => (
            <div key={category.id}>
              <Link 
                to={`/explore/${category.slug}`}
                className="block text-center text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-110"
                >
                  {category.name}
                </Link>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryList