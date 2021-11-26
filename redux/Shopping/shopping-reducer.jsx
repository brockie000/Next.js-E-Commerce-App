import * as actionTypes from './shopping-types';
import data from '../../utils/data';
import { useState } from 'react';

//const test = []

const INITIAL_STATE = {
    products: data.products,
    cart: [],
    currentItem: null,
};



const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find((product) => product.id === action.payload.id)
            const inCart = state.cart.find((item) => item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => 
                    item.id === action.payload.id
                     ? {...item, qty: item.qty + 1, price: item.price + item.price} 
                     : item)
                      : [...state.cart, {...item, qty: 1, size: action.payload.size}],
            };
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? 
                    {...item, qty: action.payload.qty} : item)
            }
        case actionTypes.CLEAR_CART:
            return{
                ...state,
                cart: [],
            }
        default:
            return state;
        }

};

export default shopReducer;