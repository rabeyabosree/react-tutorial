import React from 'react'

function Cart({ setCart }) {
    const addToCArt = () => {
        setCart((prev) => [...prev, "new item"])
    }
    return (


        <div>
            <button onClick={addToCArt}>add to cart</button>
        </div>
    )
}

export default Cart