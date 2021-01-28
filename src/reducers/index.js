import {combineReducers} from "redux";
import taskReducer from "./tasks";

const myReducer = combineReducers({
    tasks:taskReducer
});

export default myReducer;