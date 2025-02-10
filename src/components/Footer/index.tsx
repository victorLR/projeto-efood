import efood from '../../assets/images/logo.png'
import redes from '../../assets/images/redes sociais.png'
import {
  FooterContainer,
  LogoEfood,
  P,
  RedeSocialIcon,
  RedesSociais
} from './styles'

const Footer = () => (
  <FooterContainer>
    <LogoEfood src={efood} alt="logo do efood" />
    <RedesSociais>
      <RedeSocialIcon src={redes} alt="redes sociais" />
    </RedesSociais>
    <P>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </P>
  </FooterContainer>
)

export default Footer
