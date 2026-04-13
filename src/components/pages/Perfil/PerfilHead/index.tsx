import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../../../../assets/images/fundo.png'
import Logo from '../../../../assets/images/logo.png'
import { RootReducer } from '../../../../store'
import { open } from '../../../../store/reducers/cart'
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

type Props = {
  tipo: string
  titulo: string
  capa: string
}

const PerfilHead = ({ tipo, titulo, capa }: Props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootReducer) => state.cart.items)

  return (
    <Header>
      <DivHeader>
        <FundoPerf src={Banner} alt="fundo" />
        <Image src={Logo} alt="Efood logo" />
        <Div onClick={() => dispatch(open())}>
          {cartItems.length} produto(s) no carrinho
        </Div>
        <H1>Restaurantes</H1>
      </DivHeader>
      <TitleContainer>
        <MainTitle>{tipo}</MainTitle>
        <SubTitle>{titulo}</SubTitle>
        <ImagePerf src={capa} alt={titulo} />
      </TitleContainer>
    </Header>
  )
}

export default PerfilHead
