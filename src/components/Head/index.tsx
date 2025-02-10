import Logo from '../../assets/images/logo.png'
import Banner from '../../assets/images/fundo.png'
import { Header, Image, H1, Fundo } from './styles'

const Head = () => (
  <Header>
    <Fundo src={Banner} alt="fundo" />
    <Image src={Logo} alt="Efood logo" />
    <H1>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </H1>
  </Header>
)

export default Head
