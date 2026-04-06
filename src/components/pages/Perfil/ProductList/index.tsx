import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Products from '../Products'
import Modal, { PratoModal } from '../Modal'
import { List, Container } from './styles'
import Produto from '../../../../models/PerfilProducts'
import { add, open } from '../../../../store/reducers/cart'

type Props = {
  title?: string
  produtos: Produto[]
}

const FoodList = ({ title, produtos }: Props) => {
  const [pratoSelecionado, setPratoSelecionado] = useState<PratoModal | null>(
    null
  )
  const dispatch = useDispatch()

  const handleAdicionar = (prato: PratoModal) => {
    dispatch(
      add({
        id: prato.id,
        nome: prato.nome,
        foto: prato.foto,
        preco: prato.preco
      })
    )
    dispatch(open())
    setPratoSelecionado(null)
  }

  return (
    <>
      <Container>
        <div className="container">
          <h2>{title}</h2>
          <List>
            {produtos.map((produto) => (
              <Products
                key={produto.id}
                id={produto.id}
                title={produto.title}
                infos={produto.infos}
                description={produto.description}
                fullDescription={produto.fullDescription}
                image={produto.image}
                preco={produto.preco}
                porcao={produto.porcao}
                onVerMais={(p) => setPratoSelecionado(p)}
              />
            ))}
          </List>
        </div>
      </Container>
      <Modal
        prato={pratoSelecionado}
        onFechar={() => setPratoSelecionado(null)}
        onAdicionar={handleAdicionar}
      />
    </>
  )
}

export default FoodList
