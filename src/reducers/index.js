import { combineReducers } from "redux";
import Posts from './Posts';
import authReducer from "./authReducer";

export default combineReducers({
    Posts, authReducer
});
