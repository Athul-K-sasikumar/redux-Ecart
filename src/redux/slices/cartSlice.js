import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: [],
    reducers: {

        //add to cart
        addToCart: (state, actionFromView) => {
            const existingProduct = state.find(item => item.id == actionFromView.payload.id)
            if (existingProduct) {
                const remainingProducts = state.filter(item => item.id != existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                state = [...remainingProducts, existingProduct]
            } else {
                state.push({ ...actionFromView.payload, quantity: 1, totalPrice: actionFromView.payload.price })
            }
        },
        removeCartItem: (state, actionFromCart) => {
            return state.filter(item => item.id!= actionFromCart.payload)
        },
        incQuantity: (state, actionFromCart) => {
            const existingProduct = state?.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]
        },
        decQuantity: (state, actionFromCart) => {
            const existingProduct = state?.find(item => item.id == actionFromCart.payload)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProducts = state.filter(item => item.id != existingProduct.id)
            state = [...remainingProducts, existingProduct]
        },
        emptyCart: (state) => {
            return state = []
        }
        //increment quantity
        //decrement quantity 
        //empty cart
    }
})

export const { addToCart, removeCartItem, incQuantity, decQuantity, emptyCart } = cartSlice.actions
export default cartSlice.reducer