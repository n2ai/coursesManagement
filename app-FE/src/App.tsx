import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from 'react-router-dom'
import './App.css'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<LoginPage/>} ></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
