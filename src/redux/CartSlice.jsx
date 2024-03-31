import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [] 

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },

        deleteFromCart(state, action) {
            return state.filter((item) => item.id != action.payload.id)
        },

        incrementQuantity(state, action) {
            state = state.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity++
                }
                return item
            })
        },

        decrementQuantity(state, action) {
            return state.map((item) => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }; // Create a new object with decremented quantity
                }
                return item; // Return the original item if no change is needed
            });
        }


    }
})

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer