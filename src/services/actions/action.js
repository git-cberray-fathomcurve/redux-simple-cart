import {ADD_TO_CART} from '../constants.js';
import {REMOVE_TO_CART} from '../constants.js';

export const addToCart=(item)=>{
    //console.warn("action: ", item)
    return{
        type:'ADD_TO_CART',
        data: item
    }
}

export const removeToCart=()=>{
    return{
        type:'REMOVE_TO_CART',
    }
}