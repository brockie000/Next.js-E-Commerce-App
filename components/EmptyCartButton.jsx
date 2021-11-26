import React from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../redux/Shopping/shopping-actions';


const EmptyCart = () => {

    const clearCart = () => {
        localStorage.setItem('state', 0)
        window.location.replace('/')
    }
    return (
        <div>
            <button onClick={() => clearCart()}>Empty Cart v2</button>
        </div>
    )
}

export default EmptyCart;