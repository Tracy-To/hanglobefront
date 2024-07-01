import './App.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

// import components 
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import NewArticlesPage from './pages/NewArticlesPage'
import ExplorePage from './pages/ExplorePage'
import CategoryPage from './pages/CategoryPage'
import PostPage from './pages/PostPage'
import ArticlePage from './pages/ArticlePage'
import EditArticlePage from './pages/EditArticlePage'

// API URL
export const apiURL = 'https://hanglobe-b620817ad35f.herokuapp.com'

function App() {
  // setup state for posts
  const [posts, setPosts] = useState([])

  // functions

  // useEffect

  return (
    <div className="App">
      <h1>HanGlobe</h1>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/new_articles" element={<NewArticlesPage />} />
        <Route exact path="/explore" element={<ExplorePage />} />
        <Route exact path="/explore/:category" element={<CategoryPage />} />
        <Route exact path="/post" element={<PostPage />} />
        <Route exact path="/articles/:article_id" element={<ArticlePage />} />
        <Route exact path="/articles/:article_id/edit" element={<EditArticlePage />} />
      </Routes>
    </div>
  )
}

export default App
