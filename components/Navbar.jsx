/* eslint-disable @next/next/no-html-link-for-pages */
import React, {useState, useEffect} from 'react'
import { Badge, IconButton } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import NextLink from 'next/link';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
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
            
            <NextLink href={`/`} passHref>
            <a href='/'>Kai Commerce</a>
            </NextLink>
            
                <ul className='nav-menu'>
                    <NextLink href={`/categories/new`} passHref>
                    <li className='nav-item'>
                        <a className='nav-link' href={`/categories/new`}>New In</a>
                    </li>
                    </NextLink>
                    <NextLink href={`/categories/clothing`}>
                    <li className='nav-item'>
                        <a href='/categories/clothing' className='nav-link'>Clothing</a>
                    </li>
                    </NextLink>
                    <NextLink href={`/categories/tops`}>
                    <li className='nav-item'>
                        <a href='/categories/tops' className='nav-link'>Tops</a>
                    </li>
                    </NextLink>
                    <NextLink href={`/categories/dresses`}>
                    <li className='nav-item'>
                        <a href='/categories/dresses' className='nav-link'>Dresses</a>
                    </li>
                    </NextLink>
                    <NextLink href={`/categories/accessories`}>
                    <li className='nav-item'>
                        <a href='/categories/accessories' className='nav-link'>Accessories</a>
                    </li>
                    </NextLink>
                    <NextLink href={`/categories/sale`}>
                    <li className='nav-item'>
                        <a href='/categories/sale' className='nav-link'>Sale</a>
                    </li>
                    </NextLink>
                    
                    <NextLink href='/Cart/cart'>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={cartCount} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    </NextLink>
                    
                    
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
