import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmail } from '../redux/emailSlice'
import { Form, Input, Button } from './styles'

const EmailForm: React.FC = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (nome && email && telefone) {
      dispatch(addEmail({ nome, email, telefone }))
      setNome('')
      setEmail('')
      setTelefone('')
    }
  }

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = event.target.value.replace(/\D/g, '')
    setTelefone(onlyNumbers)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={handlePhoneChange}
        maxLength={11}
      />

      <Button type="submit">Adicionar</Button>
    </Form>
  )
}

export default EmailForm
