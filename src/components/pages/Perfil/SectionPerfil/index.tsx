import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../ProductList'
import Footer from '../Footer'
import PerfilHead from '../PerfilHead'
import Cart from '../Cart'
import Restaurante from '../../../../models/Produtos'

const resumirTexto = (texto: string, limite = 130) => {
  if (texto.length <= limite) {
    return texto
  }

  return `${texto.slice(0, limite).trim()}...`
}

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((dados: Restaurante[]) => {
        const restauranteEncontrado = dados.find(
          (item) => item.id === Number(id)
        )

        setRestaurante(restauranteEncontrado || null)
      })
  }, [id])

  if (!restaurante) {
    return null
  }

  const produtos = restaurante.cardapio.map((item) => ({
    id: item.id,
    title: item.nome,
    infos: [],
    description: resumirTexto(item.descricao),
    fullDescription: item.descricao,
    image: item.foto,
    preco: item.preco,
    porcao: item.porcao
  }))

  return (
    <>
      <PerfilHead
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
        capa={restaurante.capa}
      />
      <ProductList produtos={produtos} />
      <Footer />
      <Cart />
    </>
  )
}

export default Perfil
