import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`
// email list

export const Div = styled.div`
  display: flex;
  padding-top: 40px;
`

export const Ul = styled.ul`
  list-style: none;
`

export const P = styled.p`
  font-size: 18px;
`

export const ButDel = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #0056b3;
  }
`

export const InputEdit = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  max-width: 300px;
`

export const ButEdit = styled.button`
  padding: 10px;
  margin: 10px;
  background-color: #ffc107;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e0a800;
  }
`

// App.tsx

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Garantir que ocupe toda a altura da tela */
`

export const H1 = styled.h1`
  margin-bottom: 40px;
  color: rgb(108, 119, 131);
`

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`
