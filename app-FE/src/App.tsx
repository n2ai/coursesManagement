import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements, Routes } from 'react-router-dom'
import './App.css'
import { CookiesProvider } from 'react-cookie'
import HomePage from './pages/HomePage'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<LoginPage/>} ></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/profile' element={<HomePage/>}>
          
        </Route>
      </Route>
    )
  )

  return (
    <CookiesProvider defaultSetOptions={{path:'/'}}>
      <RouterProvider router={router}>
      </RouterProvider>
    </CookiesProvider>
  )
}

export default App
