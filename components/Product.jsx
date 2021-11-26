import { IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React, { useState } from 'react'
import NextLink from 'next/link';
import { connect } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';
import Sizes from './Size'

const Product = ({product, addToCart}) => {
    const [size, setSize] = useState()
    var checkedSize = null;

    const clicked = () => {
        var checkedSize = localStorage.getItem('size')
        setSize(checkedSize)
    }
    
    console.log('size', size)

    return (
        <div>
            
            <div className='card'>
                <NextLink href={`/product/${product.slug}`} passHref>
                <a href={`/product/${product.slug}`} passHref>
                    <img className='card-image' src={product.image} />
                </a>
                </NextLink>
                
                <div className='info-container'>
                    
                    <div className='left-container'>
                        <div className='card-info'>
                            {product.name}
                        </div>

                        <div className='card-info'>
                            £{product.price}
                        </div>
                    </div>

                    <div className='sizeButtons'>
                        {product.sizes.map((sizes) => (
                            <div className='box' onClick={clicked} item key={product.sizes} xs={12} sm={6} md={4} lg={3}>
                                <Sizes sizes={sizes} onClick={clicked}/>
                            </div>

                        ))}
                        
                        
                        
                    </div>
                    
                
                <div>
                    <IconButton onClick={() => addToCart(product, size)}>
                        <AddShoppingCart/>
                    </IconButton>
                </div>

                </div>

            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    localStorage.setItem('checked', 0)
    localStorage.setItem('size', null)
    return {
        addToCart: (product, size) => dispatch(addToCart(product, size))
    }
}

export default connect(null, mapDispatchToProps)(Product);
