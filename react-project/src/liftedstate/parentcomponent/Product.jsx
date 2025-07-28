import  { useState } from 'react'
import Cart from './../childscomonent/Cart';
import Total from './../childscomonent/Total';


function Product() {
    const [cart, setCart] = useState([])
    
    return (
        <div>

            <Cart setCart={setCart}/>
            <Total item={cart} />

        </div>
    )
}

export default Product