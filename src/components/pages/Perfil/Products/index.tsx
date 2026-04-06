import Tag from '../../../Tag'
import { Descricao, DivCard, DivSub, Infos, Titulo, ImageS } from './styles'
import { ButtonContainer } from '../button/styles'
import { PratoModal } from '../Modal'

type Props = {
  title: string
  description: string
  fullDescription?: string
  infos: string[]
  image: string
  preco?: number
  porcao?: string
  id: number
  onVerMais: (prato: PratoModal) => void
}

const Products = ({
  title,
  description,
  fullDescription,
  infos,
  image,
  preco,
  porcao,
  id,
  onVerMais
}: Props) => (
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
    <ButtonContainer
      type="button"
      title="Adicionar ao carrinho"
      onClick={() =>
        onVerMais({
          id,
          nome: title,
          descricao: fullDescription || description,
          foto: image,
          preco: preco ?? 0,
          porcao
        })
      }
    >
      Adicionar ao carrinho
    </ButtonContainer>
  </DivCard>
)

export default Products
