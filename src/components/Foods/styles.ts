import styled from 'styled-components'
import { cores } from '../../styles'

export const DivCard = styled.div`
  background-color: #fff;
  border: 0px 1px 1px 1px;
  color: ${cores.begeEscuro};
  width: 472px;
  height: 408px;
  margin-bottom: 48px;
  margin-top: 80px;
  position: relative;
`
export const DivSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StarContainer = styled.div`
  display: flex;
  align-items: center
  gap: 5px;
`
export const Span = styled.span`
  font-size: 18px;
  margin-right: 8px;
`
export const ImageS = styled.img`
  margin-right: 8px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  margin: 7px 8px;
  margin-right: 10px;
`

export const Descricao = styled.p`
  display: block;
  width: 456px;
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
