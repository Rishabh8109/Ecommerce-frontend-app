import {
    ADD_CART_REQUEST,
    ADD_CART_SUCCESS,
    ADD_CART_FAILED,
    GET_CART_PRODUCT_REQUEST,
    GET_CART_PRODUCT_SUCCESS,
    GET_CART_PRODUCT_FAILED  
  } from "./CartType";
  
  
  
  export const AddToCartRequest = () => {
      return {
          type : ADD_CART_REQUEST
      }
  }
  
  export const AddToCartSuccess = (data) => {
      return {
          type : ADD_CART_SUCCESS,
          payload : data
      }
  }
  export const AddToCartFailed = (error) => {
      return {
          type : ADD_CART_FAILED,
          payload : error
      }
  }
  
  export const GetCartProductRequest = () => {
      return {
          type : GET_CART_PRODUCT_REQUEST
      }
  }
  
  export const GetCartProductSuccess = (data) => {
    let product = [];
     var x,y;
     for(x of data.cartItems) {
         for(y of x.cartItem){
             product.push({
                Id : y.productId,
                quantity : y.quantity
            })
         }
     }
      return {
          type : GET_CART_PRODUCT_SUCCESS,
          payload : product
      }
  }
  export const GetCartProductFailed = (error) => {
      return {
          type : GET_CART_PRODUCT_FAILED,
          payload : error
      }
  }
  
  
  