import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Home from '../Components/Home/Home'
import Apps from '../Components/Apps/Apps'
import Installation from '../Components/Installation/Installation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path : 'apps',
        element : <Apps></Apps>
      },
      {
        path : 'installation',
        element : <Installation></Installation>
      }

    ],
  }
])

export default router
