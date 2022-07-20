import React from 'react';
import './styles.css';
import CartItems from './cartItems'

const Cart = (props) => {
    return(
        <aside className='container-sm customCart'>
            <h1 className='mt-3'>Cart</h1>
            <h5>
                Here are your items, would you like to continue? 
            </h5>
            <CartItems  books={props.books}/>
        </aside>
    )
}

export default Cart;