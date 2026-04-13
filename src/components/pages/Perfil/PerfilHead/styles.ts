import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Header = styled.header`
  width: 100%;
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`

export const FundoPerf = styled.img`
  width: 100%;
  height: 148px;
  object-fit: cover;
  display: block;
`

export const Image = styled.img`
  position: absolute;
  width: 125px;
  height: 58px;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
`

export const H1 = styled.h1`
  position: absolute;
  top: 58px;
  left: calc(50% - 512px);
  color: ${cores.begeEscuro};
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
`

export const Div = styled.div`
  position: absolute;
  top: 58px;
  right: calc(50% - 512px);
  font-size: 18px;
  line-height: 21px;
  color: ${cores.begeEscuro};
  font-weight: 900;
  cursor: pointer;
`

export const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
`

export const ImagePerf = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  filter: brightness(0.55);
`

export const MainTitle = styled.h2`
  position: absolute;
  top: 24px;
  left: calc(50% - 512px);
  font-weight: 100;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  z-index: 1;
`

export const SubTitle = styled.p`
  position: absolute;
  left: calc(50% - 512px);
  bottom: 32px;
  font-weight: 900;
  font-size: 32px;
  line-height: 37px;
  color: #fff;
  z-index: 1;
`
