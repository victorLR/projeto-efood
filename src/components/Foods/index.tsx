import estrela from '../../assets/images/estrela.png'
import Button from '../button'

import Tag from '../Tag'
import {
  Descricao,
  DivCard,
  DivSub,
  ImageS,
  Img,
  Infos,
  Span,
  StarContainer,
  Titulo
} from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
}

const Foods = ({ title, description, infos, image }: Props) => (
  <DivCard>
    <Img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <DivSub>
      <Titulo>{title}</Titulo>
      <StarContainer>
        <Span>4.9</Span>
        <ImageS src={estrela} alt="estrela img" />
      </StarContainer>
    </DivSub>
    <Descricao>{description}</Descricao>
    <Button
      title="clique aqui e veja mais produtos como este"
      type="link"
      to="/Perfil"
    >
      Saiba mais
    </Button>
  </DivCard>
)

export default Foods
