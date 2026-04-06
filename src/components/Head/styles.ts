import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  position: relative;
  width: 100%;
`

export const Fundo = styled.img`
  width: 100%;
  height: 384px;
`

export const Image = styled.img`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
`

export const H1 = styled.h1`
  font-size: 36px;
  text-align: center;
  color: ${cores.begeEscuro};
  position: absolute;
  top: calc(40px + 220px);
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 40px;
`
