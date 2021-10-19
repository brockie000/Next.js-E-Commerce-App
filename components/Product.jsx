import { IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';

const Product = ({product, addToCart}) => {

    return (
        <div>
            <div className='card'>
                
                <a href={`/product/${product.slug}`} passHref>
                <img className='card-image' src={product.image} />
                </a>
                
                <div className='info-container'>
                    
                    <div className='left-container'>
                        <div className='card-info'>
                            {product.name}
                        </div>

                        <div className='card-info'>
                            {product.price}
                        </div>
                    </div>
                
                <div>
                    <IconButton onClick={() => addToCart(product.id)}>
                        <AddShoppingCart/>
                    </IconButton>
                </div>

                </div>

            </div>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);
