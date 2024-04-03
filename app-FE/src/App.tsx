import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { createBrowserRouter,useParams, RouterProvider,Route,createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { CookiesProvider } from 'react-cookie';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AddClassPage from './pages/AddClassPage';

function App() {
  
  const {id} = useParams()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<LoginPage/>} ></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/profile/:id' element={<Layout/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='/profile/:id/addClass' element={<AddClassPage/>}></Route>
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
