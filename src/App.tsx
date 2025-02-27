import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { CssGlobal } from './styles'

import Rotas from './routes'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CssGlobal />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
