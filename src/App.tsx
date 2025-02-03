import React from 'react'
import EmailForm from './components/EmailForm'
import EmailList from './components/EmailList'
import {
  Container,
  H1,
  FormContainer,
  ListContainer
} from './components/styles'

const App: React.FC = () => {
  return (
    <Container>
      <H1>Cadastro de Emails</H1>
      <FormContainer>
        <EmailForm />
      </FormContainer>
      <ListContainer>
        <EmailList />
      </ListContainer>
    </Container>
  )
}

export default App
