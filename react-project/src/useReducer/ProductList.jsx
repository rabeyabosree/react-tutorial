import React, { useContext } from 'react'
import { CartContext } from '../contex/CartContext'

function ProductList() {
    const { dispatch } = useContext(CartContext)

    const products = [
        { id: 1, name: "product1", price: 9878 },
        { id: 2, name: "product2", price: 98734 },
        { id: 3, name: "product3", price: 3578 },
        { id: 4, name: "product4", price: 7778 },
        { id: 5, name: "product5", price: 4378 },
    ]
    return (
        <div>
            <h1>ProductList</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <h4>{product.price}</h4>
                    <button onClick={()=> dispatch({type : "ADD", payload: product})}>add to cart</button>

                </div>
            ))}
        </div>
    )
}

export default ProductList