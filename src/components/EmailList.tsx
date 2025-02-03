import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { deleteEmail, editEmail } from '../redux/emailSlice'
import { ButDel, P, Ul, ButEdit, InputEdit, Div } from './styles'
import { Email } from '../redux/emailSlice' // Importar o tipo Email aqui

const EmailList: React.FC = () => {
  const emails = useSelector((state: RootState) => state.emails.emails)
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState<{ [key: string]: boolean }>({}) // Controle de edição
  const [editedEmail, setEditedEmail] = useState<Email | null>(null) // Dados do email que está sendo editado

  const handleDelete = (email: string) => {
    dispatch(deleteEmail(email))
  }

  const handleEdit = (email: Email) => {
    setEditedEmail(email)
    setEditMode((prev) => ({ ...prev, [email.email]: true })) // Ativa o modo de edição para esse item
  }

  const handleSave = () => {
    if (editedEmail) {
      dispatch(editEmail(editedEmail))
      setEditMode((prev) => ({ ...prev, [editedEmail.email]: false })) // Desativa o modo de edição
      setEditedEmail(null)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof Email
  ) => {
    if (editedEmail) {
      setEditedEmail({ ...editedEmail, [field]: e.target.value })
    }
  }

  return (
    <div>
      <Ul>
        {emails.map((emailItem) => (
          <li key={emailItem.email}>
            {editMode[emailItem.email] ? (
              <Div>
                <InputEdit
                  type="text"
                  value={editedEmail?.nome || ''}
                  onChange={(e) => handleChange(e, 'nome')}
                />
                <InputEdit
                  type="email"
                  value={editedEmail?.email || ''}
                  onChange={(e) => handleChange(e, 'email')}
                />
                <InputEdit
                  type="text"
                  value={editedEmail?.telefone || ''}
                  onChange={(e) => handleChange(e, 'telefone')}
                />
                <ButDel onClick={handleSave}>Salvar</ButDel>
              </Div>
            ) : (
              <>
                <P>
                  <strong>Nome:</strong> {emailItem.nome}
                </P>
                <P>
                  <strong>Email:</strong> {emailItem.email}
                </P>
                <P>
                  <strong>Telefone:</strong> {emailItem.telefone}
                </P>
                <ButEdit onClick={() => handleEdit(emailItem)}>Editar</ButEdit>
                <ButDel onClick={() => handleDelete(emailItem.email)}>
                  Deletar
                </ButDel>
              </>
            )}
          </li>
        ))}
      </Ul>
    </div>
  )
}

export default EmailList
