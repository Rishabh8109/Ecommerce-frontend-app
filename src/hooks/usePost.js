import  React , {useState } from 'react'
import axios from 'axios';
import {
  AddToCartRequest,
  AddToCartSuccess,
  AddToCartFailed
} from '../stateManager/myCart/cartAction';

function useFetch(url , initalState ,Id , quantity) {
  const [data , setData] = useState(initalState);
 
    dispatch(AddToCartRequest());
    axios({
      method : "post",
      url : url,
      headers : headers,
      data : {
          productId : Id,
          quantity : quantity
      }
    }).then(res => {
    dispatch(AddToCartSuccess(res.data));
    history.go(0);
    }).catch(err => {
      dispatch(AddToCartFailed(err.response.data.error))
    }) 
   return data;
}

export default useFetch;
