import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: center;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  column-gap: 32px;
  row-gap: 32px;
  margin-top: 56px;
  width: 1024px;
  margin-bottom: 56px;
`
