import React, { useEffect, useState } from 'react';
import './styles.css';
import CartItems from './cartItems'

const Cart = (props) => {

    const getRemovedBook = (removedBook) =>{
        let removedBooksList = props.books.filter(b => b.number === removedBook)
        let newBooksList = props.books.filter(b => b.number !== removedBook)
        props.updateList(newBooksList)
        props.removeBook(removedBooksList[0])
    }

    return(
        <aside className='container-sm customCart'>
            <h1 className='mt-3'>Cart</h1>
            <h5>
                Here are your items, would you like to continue? 
            </h5>
            <hr/>
            <CartItems  books={props.books} removeBook={getRemovedBook}/>
        </aside>
    )
}

export default Cart;