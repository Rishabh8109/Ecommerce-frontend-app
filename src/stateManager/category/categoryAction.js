import {
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
} from "./categoryType";



export const getCategoryRequest = () => {
    return {
        type : GET_CATEGORY_REQUEST
    }
}

export const getCategorySuccess = (data) => {
    return {
        type : GET_CATEGORY_SUCCESS,
        payload : data
    }
}
export const getCategoryFailed = (error) => {
    return {
        type : GET_CATEGORY_FAILED,
        payload : error
    }
}


