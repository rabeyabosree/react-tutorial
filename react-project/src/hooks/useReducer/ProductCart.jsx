import React, { useContext } from 'react'
import { CartContext } from '../../contex/CartContext'

function Productcart() {
    const { cart, dispatch } = useContext(CartContext)

   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <div>
            <h1>Cart</h1>
            {cart.length === 0 ? <p>No items in cart</p> :
                cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                        <p>{item.qty}</p>
                        <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
                        <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
                        <button onClick={() => dispatch({ type: "REMOVE", payload: item.id })}>remove</button>

                    </div>
                ))}

            {cart.length > 0 && (
                <>
                    <h3>TOTAL : {total} </h3>
                    <button onClick={() => dispatch({ type: "CLEAR" })}>Clear Cart</button>
                </>
            )}
        </div>
    )
}

export default Productcart