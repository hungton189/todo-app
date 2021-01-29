import {combineReducers} from "redux";
import taskReducer from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditing from "./taskEditing";

const myReducer = combineReducers({
    tasks:taskReducer,
    isDisplayForm,
    taskEditing
});

export default myReducer;