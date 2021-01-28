import {
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    ADD_CART_FAILED,
    GET_CART_PRODUCT_REQUEST,
    GET_CART_PRODUCT_SUCCESS,
    GET_CART_PRODUCT_FAILED  
  } from "./CartType";
  

const cartState = {
  loading : false, 
  data : [],
  product : {},
}



export const cartReducer = (state = cartState , action ) => {
   
    switch(action.type) {
        case ADD_CART_REQUEST : return {
            loading : true,
        }
        case ADD_CART_SUCCESS : return {
            loading : false,
            data :  action.payload
        }
        case ADD_CART_FAILED : return {
            loading : false,
        }
        case GET_CART_PRODUCT_REQUEST : return {
            loading : true,
           
        }
        case GET_CART_PRODUCT_SUCCESS : return {
            loading : false,
            product :  action.payload,
        }
        case GET_CART_PRODUCT_FAILED : return {
            loading : false,
        }
        default : return state
    }
}


