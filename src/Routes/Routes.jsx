import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout'
import Home from '../Components/Home/Home'
import Apps from '../Components/Apps/Apps'
import Installation from '../Components/Installation/Installation'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import AppsDetailsPage from '../Components/AppsDetailsPage/AppsDetailsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    hydrateFallbackElement: <p>Loading...</p>,
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
      },
      {
        path : '/apps/:id',
        element : <AppsDetailsPage></AppsDetailsPage>
      }

    ],
  }
])

export default router
