import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: number
  nome: string
  foto: string
  preco: number
}

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload)
    },
    remove(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        (item, index) => index !== action.payload
      )
    },
    clear(state) {
      state.items = []
    },
    open(state) {
      state.isOpen = true
    },
    close(state) {
      state.isOpen = false
    }
  }
})

export const { add, remove, clear, open, close } = cartSlice.actions
export default cartSlice.reducer
