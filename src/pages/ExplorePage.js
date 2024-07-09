import React from 'react'
import CategoryList from '../components/CategoryList'

const ExplorePage = (props) => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        Explore Categories
      </h1>
      <h1 className="text-center text-2xl mb-10">
        Pick a category below to learn more.
      </h1>
      <CategoryList />
    </div>
  )
}

export default ExplorePage