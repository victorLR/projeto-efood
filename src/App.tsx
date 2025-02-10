import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import Head from './components/Head'
import { CssGlobal } from './styles'
import FoodList from './components/FoodList'
import Footer from './components/Footer'

const caminhos = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Head />
        <FoodList />
        <Footer />
      </>
    )
  }
])

const App: React.FC = () => {
  return (
    <>
      <CssGlobal />
      <RouterProvider router={caminhos} />
    </>
  )
}

export default App
