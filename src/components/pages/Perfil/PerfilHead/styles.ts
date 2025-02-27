import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Header = styled.header``

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const FundoPerf = styled.img`
  position: relative;
  width: 100vw;
  height: 186px;
`

export const Image = styled.img`
  position: absolute;
  width: 125px;
  height: 58px;
  top: 40px;
`
export const H1 = styled.h1`
  position: absolute;
  width: 109px;
  height: 21px;
  top: 59px;
  left: 400px;
  color: ${cores.begeEscuro};
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`

export const Div = styled.div`
  position: absolute;
  width: 256px;
  height: 21px;
  top: 59px;
  left: 68%;
  line-height: 21px;
  font-size: 18px;
  color: ${cores.begeEscuro};
  font-weight: 900;
`

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  display: flex;
  flex-direction: column;
`

export const ImagePerf = styled.img`
  position: absolute;
  height: 280px;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

export const MainTitle = styled.h2`
  position: absolute;
  top: 25px;
  left: 400px;
  height: 33px;
  font-weight: 100;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
`

export const SubTitle = styled.p`
  position: absolute;
  top: 214px;
  height: 33px;
  left: 400px;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
`
