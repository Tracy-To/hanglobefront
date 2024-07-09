import React from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm'
import { apiURL } from '../App'

const PostPage = (props) => {
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`${apiURL}/articles/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (response.ok) {
        navigate('/new_articles')
      } else {
        console.error('Failed to create article:', response.status);
      }
    } catch (error) {
      console.error('Error creating article:', error);
    }
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-10 mb-10">
        Post an Article
      </h1>
      <h1 className="text-center text-2xl mb-10">
        Share your unique experiences and insights about life in Korea.
      </h1>
      <PostForm onSubmit={handleSubmit} />
    </div>
  )

}

export default PostPage