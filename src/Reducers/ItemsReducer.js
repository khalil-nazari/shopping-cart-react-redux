import { act } from 'react-dom/test-utils'
import {DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS} from '../Actions/Actions'
import CartItems from '../Data/CartItems'; 

const initialStore = {
    cart : CartItems, 
    total:0, 
    amount: 0,
}

const ItemReducer = (state = initialStore, action) => {

    if(action.type === CLEAR_CART) {
        return { 
            ...state, 
            cart:[], 
            amount:0
        }
    }

    if(action.type === INCREASE) {
        let tempCart = state.cart.map(cartItem => {
            if(cartItem.id === action.payload.id) {
                cartItem = {...cartItem, amount:cartItem.amount + 1}
            }

            return cartItem; 
        })
        return {
            ...state, 
            cart : tempCart
        }
    }

    if(action.type === DECREASE) {
        
        let tempCart = []; 

        if(action.payload.amount === 1 ) {
            tempCart = state.cart.filter(item => item.id !== action.payload.id);
        } else {
             tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id) {
                    cartItem = {...cartItem, amount:cartItem.amount - 1}
                }
    
                return cartItem; 
            })
        }


        return {
            ...state, 
            cart : tempCart,
        }
    }

    if(action.type === REMOVE) {
        return {
            ...state, 
            cart:state.cart.filter(item => item.id !== action.payload), 
            amount: state.amount-1
        }
    }


    if(action.type === GET_TOTALS) {

        
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            // price and item amount from cart 
            const {price, amount} = cartItem;
            
            // add to reduce object
            cartTotal.amount += amount;
            cartTotal.total += price*amount; 
            return cartTotal;
        }, {
            total: 0, 
            amount: 0
        })
       total = parseFloat(total.toFixed(2));
        return {
            ...state, 
            amount, 
            total
        }
    }

    return state; 
}

export default ItemReducer;