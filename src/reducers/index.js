import {combineReducers} from "redux";
import taskReducer from "./tasks";
import isDisplayForm from "./isDisplayForm";

const myReducer = combineReducers({
    tasks:taskReducer,
    isDisplayForm
});

export default myReducer;