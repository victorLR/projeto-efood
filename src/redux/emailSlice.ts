import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Email {
  nome: string
  email: string
  telefone: string
}

interface EmailState {
  emails: Email[]
}

const initialState: EmailState = {
  emails: []
}

const emailSlice = createSlice({
  name: 'emails',
  initialState,
  reducers: {
    addEmail(state, action: PayloadAction<Email>) {
      state.emails.push(action.payload)
    },
    deleteEmail(state, action: PayloadAction<string>) {
      state.emails = state.emails.filter(
        (email) => email.email !== action.payload
      )
    },
    editEmail(state, action: PayloadAction<Email>) {
      const index = state.emails.findIndex(
        (email) => email.email === action.payload.email
      )
      if (index !== -1) {
        state.emails[index] = action.payload
      }
    }
  }
})

export const { addEmail, deleteEmail, editEmail } = emailSlice.actions
export default emailSlice.reducer
