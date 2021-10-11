import { combineReducers } from "redux";
import cartItems from './reducer';
//... more reducers here

export default combineReducers({
    cartItems,
    //... more reducers here
})