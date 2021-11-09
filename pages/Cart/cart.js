import { Container, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import CartItem from '../../components/cartItem';
import { removeFromCart } from '../../redux/Shopping/shopping-actions';

const Cart = ({cart}) => {
    
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.price;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    const RemoveCart = () => {
        cart: []
    }

    const EmptyCart = () => (
        <Typography variant='subtitle1'>Cart is Empty</Typography>
    ) 

    var id = 2;
    
    const FilledCart = () => (
    
        <main>
            <Navbar/>
            <div className='products-container' spacing={0}>
                {cart.map((items) => (
                <div item key={items.name} xs={12} sm={6} md={4} lg={3}>
                    <CartItem items={items}/>
                </div>))}
            </div>
            
            <div>
                {cartCount}
                <button>Empty Cart</button>
            </div>
        </main>)

    if(cartCount == 0) 
        return (
                <EmptyCart/>
        )
        else 
            return(
                <FilledCart/>
            )
}




const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}


export default connect(mapStateToProps)(Cart);