import { useEffect, useState } from 'react'
import FoodList from '../../FoodList'
import Footer from '../../Footer'
import Head from '../../Head'
import Restaurante from '../../../models/Produtos'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((dados) => setRestaurantes(dados))
  }, [])

  return (
    <>
      <Head />
      <FoodList produtos={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
