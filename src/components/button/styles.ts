import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.begeCLaro};
  width: 70px;
  font-size: 14px;
  padding: 4px 6px;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.begeEscuro};
  color: ${cores.begeCLaro};
  width: 70px;
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  margin: 8px;
`
