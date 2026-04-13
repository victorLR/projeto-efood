import Foods from '../Foods'
import { List, Container } from './styles'
import Restaurante from '../../models/Produtos'

const resumirTexto = (texto: string, limite = 260) => {
  if (texto.length <= limite) {
    return texto
  }

  return `${texto.slice(0, limite).trim()}...`
}

type Props = {
  title?: string
  produtos: Restaurante[]
}

const FoodList = ({ title, produtos }: Props) => (
  <Container>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {produtos.map((produto) => (
          <Foods
            key={produto.id}
            id={produto.id}
            title={produto.titulo}
            infos={
              produto.destacado
                ? ['Destaque da semana', produto.tipo]
                : [produto.tipo]
            }
            description={resumirTexto(produto.descricao)}
            image={produto.capa}
            rating={produto.avaliacao}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
