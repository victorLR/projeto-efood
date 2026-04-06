import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.73);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`

export const ModalBox = styled.div`
  width: 100%;
  max-width: 1024px;
  min-height: 344px;
  background: ${cores.begeEscuro};
  display: flex;
  position: relative;
  padding: 32px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 24px;
  }
`

export const ModalFoto = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  object-position: center;
  flex-shrink: 0;
  display: block;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
  }
`

export const ModalConteudo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ModalNome = styled.h2`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  color: ${cores.bege};
  margin: 0 0 16px;
`

export const ModalDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.bege};
  margin: 0 0 24px;
`

export const ModalPorcao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${cores.bege};
  margin: 0 0 16px;
`

export const BotaoAdicionar = styled.button`
  background-color: ${cores.bege};
  color: ${cores.begeEscuro};
  border: none;
  height: 24px;
  min-width: 218px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  white-space: nowrap;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`

export const BotaoFechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: ${cores.bege};
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`
