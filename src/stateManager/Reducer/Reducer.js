import { combineReducers } from "redux";
import { SignUpReducer, SignInReducer, SignOutReducer } from "../Authentication/AuthReducer";
import {categoryReducer} from '../category/categoryReducer';
import {cartReducer} from '../myCart/cartReduer';

export const rootReducer = combineReducers({
  signup: SignUpReducer,
  signin: SignInReducer,
  signout: SignOutReducer,
  category : categoryReducer,
  cart : cartReducer
});
