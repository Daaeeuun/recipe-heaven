import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Main from './pages/Login'
import RecipeSearchList from './pages/RecipeCategoryList'
import RecipeCategoryList from './pages/RecipeCategoryList'
import Detail from './pages/Detail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="search" element={<RecipeSearchList />} />
      <Route path="category" element={<RecipeCategoryList />} />
    </Routes>
  )
}

export default App
