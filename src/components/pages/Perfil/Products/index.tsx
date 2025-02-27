import Button from '../button'
import Tag from '../../../Tag'
import { Descricao, DivCard, DivSub, Infos, Titulo, ImageS } from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Products = ({ title, description, infos, image }: Props) => (
  <DivCard>
    <ImageS src={image} alt={title} />
    <Infos>
      {infos?.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <DivSub>
      <Titulo>{title}</Titulo>
    </DivSub>
    <Descricao>{description}</Descricao>
    <Button
      title="Clique aqui e veja mais produtos como este"
      type="link"
      to="/Perfil"
    >
      Adicionar ao carrinho
    </Button>
  </DivCard>
)

export default Products
