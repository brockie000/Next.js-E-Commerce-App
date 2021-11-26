import React from 'react'
import { connect } from 'react-redux';
import { addToCart, clearCart, removeFromCart } from '../redux/Shopping/shopping-actions';


const CartItem = ({items}) => {
    console.log('items', items)

    const cartClearHandler = () => {
        onClearCart();
    }

    return (
        <div className='shopping-cart'>
            <div className='cart-item'>
                <div className="cart-buttons">
                    <span className='delete-btn'></span>
                    <span className='like-btn'></span>
                </div>

                <div className='cart-image'>
                    <img className='cart-image' src={items.image} alt='' />
                </div>

                <div className='cart-description'>
                    <span className='cart-description-name'>{items.name}</span>
                    <span className='cart-description-size'>Size {items.size}</span>
                    <span className='cart-description-color'>Item Colour</span>
                </div>

                <div className='cart-quantity'>
                    <button className='plus-btn' type='button' >+</button>
                    <div className='item-number'>{items.qty}</div>
                    <button className='minus-btn' type='button' onClick={cartClearHandler}>-</button>
                </div>

                <div className='item-price'>£{items.price}</div>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClearCart: () => dispatch(clearCart())
    }
}

export default connect(mapDispatchToProps)(CartItem);
