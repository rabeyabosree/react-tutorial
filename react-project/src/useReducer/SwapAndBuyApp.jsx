import React, { useReducer, useState } from 'react'

function SwapAndBuyApp() {
    const initialState = {
        sellItem: null,
        buyItem: null,
        result: null
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_SELL_ITEM":
                return { ...state, sellItem: action.payload, result: null }
            case "SET_BUY_ITEM":
                return { ...state, buyItem: action.payload, result: null }
            case "CALCULATE_RESULT":
                const { sellItem, buyItem } = state;
                if (!sellItem || !buyItem) {
                    return { ...state, result: "please enter both items" }
                }

                const difference = sellItem.price - buyItem.price
                let message
                if (difference > 0) {
                    message = `You can buy ${buyItem.name}. you will have ${difference}`
                } else if (difference === 0) {
                    message = `You can buy ${buyItem.name}. Exact price match!`
                } else {
                    message = `you can buy ${buyItem.name}. You nedd ${Math.abs(difference)} more`
                }
                return { ...state, result: message }
            case "RESET":
                return initialState

            default:
                return state
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const [selName, setSellName] = useState("")
    const [buyName, setBuyName] = useState("")
    const [sellPrice, setSellPrice] = useState("")
    const [buyPrice, setBuyPrice] = useState("")

    const handleSellItem = () => {
        dispatch({ type: "SET_SELL_ITEM", payload: { name: selName, price: Number(sellPrice) } })
    }

    const handleBuyItem = () => {
        dispatch({ type: "SET_BUY_ITEM", payload: { name: buyName, price: Number(buyPrice) } })
    }
    return (
        <div>
            <div>
                <input type="text" value={selName} onChange={(e) => setSellName(e.target.value)} />
                <input type="number" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
                <button onClick={handleSellItem}>set Sell item</button>
            </div>

            <div>
                <input type="text" value={buyName} onChange={(e) => setBuyName(e.target.value)} />
                <input type="number" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
                <button onClick={handleBuyItem}>set Buy item</button>
            </div>

            <div>
                <button onClick={() => dispatch({ type: "CALCULATE_RESULT" })}>calculate</button>

                {state.result && (
                    <div>{state.result}</div>
                )}
            </div>
        </div>
    )
}

export default SwapAndBuyApp