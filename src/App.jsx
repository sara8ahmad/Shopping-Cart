
import './App.scss'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AppLayout from './Pages/AppLayout'
import Error from './Pages/Error'
import Home from './Pages/Home/Home'
import Cart from './Featuers/Card/Cart'
import Menu from './Featuers/Menu/Menu' 



function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
  
      children: [
        {
          path: '/',
          element: <Home />,
        },
      
        {
          path: '/menu',
          element: <Menu />
        },
        { path: '/cart', element: <Cart /> },
      ],
    },
  ]);
  

  return (
     <RouterProvider router={router} />
  )
}

export default App
