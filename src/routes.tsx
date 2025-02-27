import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Perfil from './components/pages/Perfil/SectionPerfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
