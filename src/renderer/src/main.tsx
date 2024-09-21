import './assets/main.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root from './pages/root'
import ErrorPage from './error-page'
import HomeLayout, { homeLayoutloader } from './layout/home'
import Home from './pages/home'
import Top from './pages/top'
import Document from './pages/document'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeLayout />,
        loader: homeLayoutloader,
        children: [
          {
            path: '/',
            element: <Home />
          },
          {
            path: '/top',
            element: <Top />
          },
          {
            path: '/document/:documentId',
            element: <Document />
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
)
