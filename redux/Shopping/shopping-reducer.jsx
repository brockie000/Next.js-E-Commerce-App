import * as actionTypes from './shopping-types';
import data from '../../utils/data';
import { DataStore } from 'aws-amplify';
import { Products } from '../../src/models';
import { useEffect, useState } from 'react';



const INITIAL_STATE = {
    products: DataStore.query(Products),
    cart: [],
    currentItem: null,
};



const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const inCart = state.cart.find((item) => item.name === action.payload.name ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => 
                    item.name === action.payload.name
                     ? {...item, qty: item.qty + 1, price: item.price + action.payload.price} 
                     : item)
                    :[...state.cart, {name: action.payload.name, image:action.payload.image, price: action.payload.price, qty: 1, size: action.payload.size}],
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