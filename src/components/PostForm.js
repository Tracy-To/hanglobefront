import React, { useState } from 'react'

const PostForm = ({ onSubmit }) => {

  const [formData, setFormData] = useState({
    // default form values
    title: '',
    content: '',
    media: '',
    category: 'sights_landmarks',
    author: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div> <br />
      <div>
        <label>Content: </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div> <br />
      <div>
        <label>Media URL: </label>
        <input
          type="url"
          id="media"
          name="media"
          value={formData.media}
          onChange={handleChange}
        />
      </div> <br />
      <div>
        <label>Category: </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="sights_landmarks">Sights & Landmarks</option>
          <option value="cities_towns">Cities & Towns</option>
          <option value="food_dining">Food & Dining</option>
          <option value="cafes">Cafés</option>
          <option value="activities_leisure">Activities & Leisure</option>
          <option value="daily_life">Daily Life Essentials</option>
          <option value="travel_tips">Travel Tips</option>
        </select>
      </div> <br />
      <div>
        <label>Author: </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div> <br />
      <button type="submit">Submit</button>
    </form>
  )

}

export default PostForm