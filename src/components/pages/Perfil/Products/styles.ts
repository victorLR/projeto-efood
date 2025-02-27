import styled from 'styled-components'
import { cores } from '../../../../styles'

export const DivCard = styled.div`
  background-color: ${cores.begeEscuro};
  border: 0px 1px 1px 1px;
  color: ${cores.begeEscuro};
  width: 320px;
  height: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-right: 32px;
`

export const DivSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
`

export const ImageS = styled.img`
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 304px;
  height: auto;
  object-fit: contain;
`

export const Titulo = styled.h3`
  font-size: 18px;
  margin: 0 8px;
  color: ${cores.begeCLaro};
  text-align: left;
  width: 100%;
`

export const Descricao = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 8px;
  color: ${cores.begeCLaro};
  text-align: left;
  width: 100%;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
