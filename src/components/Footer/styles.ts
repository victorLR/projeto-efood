import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.div`
  background-color: ${cores.bege};
  width: 100%;
  height: 298px;
  padding: 40px 0; /* Ajuste o padding conforme necessário */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoEfood = styled.img`
  margin-top: 40px;
  max-width: 125px;
`

export const RedesSociais = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const RedeSocialIcon = styled.img`
  width: 88px;
  height: 24px;
  margin-bottom: 80px;
`

export const P = styled.p`
  color: ${cores.begeEscuro};
  margin-top: 20px;
  text-align: center;
  font-size: 10px;
  max-width: 480px;
  margin-bottom: 40px;
`
