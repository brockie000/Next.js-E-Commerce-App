import * as actionTypes from './shopping-types';

export const addToCart = (product, size) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            size: size,
        }
}
}

export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
}
}

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
}
}

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART,
    }
}