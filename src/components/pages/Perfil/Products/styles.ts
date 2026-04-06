import styled from 'styled-components'
import { cores } from '../../../../styles'

export const DivCard = styled.div`
  background-color: ${cores.begeEscuro};
  border: 1px solid ${cores.begeCLaro};
  width: 320px;
  min-height: 338px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`

export const DivSub = styled.div`
  width: 100%;
  margin-top: 8px;
  padding: 0 0 0 0;
`

export const ImageS = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  color: ${cores.bege};
  margin: 0 0 8px 0;
  padding-left: 0;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.bege};
  margin: 0 0 8px 0;
  padding-left: 0;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
