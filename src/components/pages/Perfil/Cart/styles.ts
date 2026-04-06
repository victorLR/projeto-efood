import styled from 'styled-components'
import { cores } from '../../../../styles'

export const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.73);
  z-index: 998;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transition: opacity 0.3s ease;
`

export const Sidebar = styled.aside<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background: ${cores.begeEscuro};
  z-index: 999;
  padding: 32px 8px 16px;
  display: flex;
  flex-direction: column;
  transform: translateX(${({ $visible }) => ($visible ? '0' : '100%')});
  transition: transform 0.3s ease;
  overflow-y: auto;
`

export const Items = styled.ul`
  list-style: none;
  padding-right: 2px;
`

export const Item = styled.li`
  background: ${cores.bege};
  min-height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;
  gap: 8px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  color: ${cores.begeEscuro};
`

export const ItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-bottom: 16px;
`

export const ItemPrice = styled.span`
  font-size: 14px;
  line-height: 22px;
  display: block;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  width: 16px;
  height: 16px;

  img {
    display: block;
    width: 16px;
    height: 16px;
  }
`

export const Footer = styled.div`
  margin-top: 16px;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin: 24px 0 16px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  height: 24px;
  border: none;
  background: ${cores.bege};
  color: ${cores.begeEscuro};
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  cursor: pointer;
  margin-bottom: 8px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const SectionTitle = styled.h3`
  color: ${cores.bege};
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 16px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  border: none;
  background: ${cores.bege};
  margin-bottom: 8px;
  padding: 0 8px;
  color: ${cores.begeEscuro};
  font-size: 14px;
  font-weight: 700;

  &:focus {
    outline: 2px solid rgba(255, 248, 242, 0.6);
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 155px;
  gap: 34px;

  > div:last-child {
    min-width: 0;
  }
`

export const BackButton = styled(CheckoutButton)`
  margin-bottom: 0;
`

export const ConfirmationText = styled.p`
  color: ${cores.bege};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`
