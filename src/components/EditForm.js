import React, { useState, useEffect } from 'react'

const EditForm = ({ article, onSubmit }) => {

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    media: '',
    category: 'sights_landmarks',
    author: ''
  })

  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title,
        content: article.content,
        media: article.media || '',
        category: article.category,
        author: article.author || ''
      })
    }
  }, [article])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="max-w-xl mx-auto mb-12 p-8 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-10">
        <div>
          <label>Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label>Content: </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="mt-1 p-2 h-20 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label>Picture URL: </label>
          <input
            type="url"
            id="media"
            name="media"
            value={formData.media}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label>Category: </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 h-8 w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="sights_landmarks">Sights & Landmarks</option>
            <option value="cities_towns">Cities & Towns</option>
            <option value="food_dining">Food & Dining</option>
            <option value="cafes">Cafés</option>
            <option value="activities_leisure">Activities & Leisure</option>
            <option value="daily_life">Daily Life Essentials</option>
            <option value="travel_tips">Travel Tips</option>
          </select>
        </div>
        <div>
          <label>Author: </label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-32 p-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
  
}

export default EditForm