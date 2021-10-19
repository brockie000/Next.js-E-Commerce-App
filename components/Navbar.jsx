/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useState, useEffect} from 'react'
import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import NextLink from 'next/link';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom'

const Navbar = ({totalItems, cart}) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount])

    return (
        <header className='nav-header'>
            <div className="navbar">
            
            <a href='/'>Kai Commerce</a>
            
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <a href={`/categories/new`} className='nav-link'>New In</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/categories/clothing' className='nav-link'>Clothing</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/categories/tops' className='nav-link'>Tops</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/categories/dresses' className='nav-link'>Dresses</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/categories/accessories' className='nav-link'>Accessories</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/categories/sale' className='nav-link'>Sale</a>
                    </li>
                    
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={cartCount} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    
                    
                </ul>
            </div>
            
        </header>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Navbar);
