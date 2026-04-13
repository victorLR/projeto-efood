import styled from 'styled-components'
import { cores } from '../../../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  min-height: 298px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0;
`

export const LogoEfood = styled.img`
  margin-top: 0;
  max-width: 125px;
`

export const RedesSociais = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
`

export const RedeSocialIcon = styled.img`
  width: 88px;
  height: 24px;
  margin-bottom: 80px;
`

export const P = styled.p`
  color: ${cores.begeEscuro};
  margin-top: 0;
  text-align: center;
  font-size: 10px;
  line-height: 12px;
  max-width: 480px;
  margin-bottom: 0;
`
