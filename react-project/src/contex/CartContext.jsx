import React, { createContext, useReducer } from 'react'


export const CartContext = createContext()

export function CartContextProvider({ children }) {

    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const existing = state.find(item => item.id === action.payload.id)
                if (existing) {
                    return state.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
                }
                return [...state, { ...action.payload, qty: 1 }]

            case "REMOVE":
                return state.filter(item => item.id !== action.payload)

            case "INCREASE":
                return state.map(item => item.id === action.payload ? { ...item, qty: item.qty + 1 } : item)

            case "DECREASE":
                return state.map(item => item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)

            case "CLEAR":
                return []
            default:
                return state
        }

    }

    const initialeState = []
    const [cart, dispatch] = useReducer(cartReducer, initialeState)
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

