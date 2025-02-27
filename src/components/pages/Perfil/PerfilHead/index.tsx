import React from 'react'
import Banner from '../../../../assets/images/fundo.png'
import Logo from '../../../../assets/images/logo.png'
import Dolce from '../../../../assets/images/imagem de fundo.png'
import {
  Header,
  FundoPerf,
  Image,
  Div,
  H1,
  ImagePerf,
  TitleContainer,
  MainTitle,
  SubTitle,
  DivHeader
} from './styles'

const PerfilHead = () => (
  <Header>
    <DivHeader>
      <FundoPerf src={Banner} alt="fundo" />
      <Image src={Logo} alt="Efood logo" />
      <Div>0 produto(s) no carrinho</Div>
      <H1>Restaurantes</H1>
    </DivHeader>
    <TitleContainer>
      <MainTitle>Italiana</MainTitle>
      <SubTitle>La Dolce Vita Trattoria</SubTitle>
      <ImagePerf src={Dolce} alt="Imagem de fundo" />
    </TitleContainer>
  </Header>
)

export default PerfilHead
