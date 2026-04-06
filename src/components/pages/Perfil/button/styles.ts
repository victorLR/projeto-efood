import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.begeCLaro};
  color: ${cores.begeEscuro};
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  height: 24px;
  margin-top: 16px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.begeCLaro};
  color: ${cores.begeEscuro};
  width: 304px;
  height: 24px;
  margin: 8px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
`
