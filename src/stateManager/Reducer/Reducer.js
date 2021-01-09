import { combineReducers } from "redux";
import { SignUpReducer, SignInReducer, SignOutReducer } from "../Authentication/AuthReducer";
import {categoryReducer} from '../category/categoryReducer';

export const rootReducer = combineReducers({
  signup: SignUpReducer,
  signin: SignInReducer,
  signout: SignOutReducer,
  category : categoryReducer
});
