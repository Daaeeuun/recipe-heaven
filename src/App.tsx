import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppLayout from './components/ui/AppLayout'
import Main from './pages/Main'
import RecipeSearchList from './pages/list/RecipeSearchList'
import RecipeCategoryList from './pages/RecipeCategoryList'
import Detail from './pages/Detail'
import Login from './pages/user/Login'
import Header from './components/common/Header'
import NicknameEdit from './pages/user/nicknameEdit'
import Callback from './pages/user/callBack'
import UploadRecipe from './pages/UploadRecipe'
// import Signup from './pages/user/Signup'
import LikedRecipes from './pages/myPage/LikedRecipes'
import MyComments from './pages/myPage/myComments'
import DeleteUser from './pages/user/deleteUser'
import Mypage from './components/myPage/myPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast'
import CategoryManagement from './pages/admin/CategoryMenagement'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/my" element={<Mypage />}>
            <Route index element={<NicknameEdit />} />
            <Route path="testComments" element={<MyComments />} />
            <Route path="test" element={<LikedRecipes />} />
          </Route>
          <Route path="/detail" element={<Detail />} />
          <Route path="/category" element={<RecipeCategoryList />} />
          <Route path="/login" element={<Login />} />
          <Route path="search" element={<RecipeSearchList />} />
          <Route path="category" element={<RecipeCategoryList />} />
          <Route path="login" element={<Login />} />
          <Route path="/delete" element={<DeleteUser />} />
          <Route path="oauth" element={<Callback />} />
          <Route path="uploadrecipe" element={<UploadRecipe />} />
          {/* <Route path="signUp" element={<Signup />} /> */}
          <Route path="admin_caterory" element={<CategoryManagement />} />
        </Route>
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          className: 'text-base max-w-screen-sm p-4 bg-lightgray text-darkgray',
        }}
      />
    </QueryClientProvider>
  )
}

export default App
