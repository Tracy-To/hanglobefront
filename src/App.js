import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// import components and pages
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewArticlesPage from './pages/NewArticlesPage'
import ExplorePage from './pages/ExplorePage'
import CategoryPage from './pages/CategoryPage'
import PostPage from './pages/PostPage'
import ArticlePage from './pages/ArticlePage'
import EditPage from './pages/EditPage'

// API URL
export const apiURL = 'https://hanglobe-b620817ad35f.herokuapp.com'

function App() {
  // setup state for articles
  const [articles, setArticles] = useState([])

  // function to get all articles
  const getArticles = async () => {
    const response = await fetch(apiURL + '/articles/')
    const data = await response.json()
    // console.log(data)
    setArticles(data)
  }

  // useEffect
  useEffect(() => {
    getArticles()
  }, [])


  return (
    <div className="bg-blue-300 min-h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/new_articles" element={<NewArticlesPage articles={articles} />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/explore/:category" element={<CategoryPage articles={articles} />} />
        <Route exact path="/post" element={<PostPage />} />
        <Route exact path="/articles/:article_id" element={<ArticlePage />} />
        <Route exact path="/articles/:article_id/edit" element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default App
