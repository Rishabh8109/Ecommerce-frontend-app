import {
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILED,
  } from "./categoryType";

const categoryState = {
  loading : false, 
  data : [],
}



export const categoryReducer = (state = categoryState , action ) => {
   
    switch(action.type) {
        case GET_CATEGORY_REQUEST : return {
            loading : true,
        }
        case GET_CATEGORY_SUCCESS : return {
            loading : false,
            data :  action.payload
        }
        case GET_CATEGORY_FAILED : return {
            loading : false,
        }
        default : return state
    }
}


