import {INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS} from './Actions'

export const increaseItem = (data) => {
    return {
        type:INCREASE, 
        payload: data,
    }
}

export const decreaseItem = (data) =>{
    return {
        type:DECREASE, 
        payload: data
    }
}

export const clearItems = () => {
    return {
        type: CLEAR_CART
    }
} 

export const removeItems = (itemId) => {
    return {
        type: REMOVE, 
        payload: itemId
    }
}



export const getTotals = () => {
    return {
        type: GET_TOTALS
    }
}