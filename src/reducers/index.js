import {combineReducers} from "redux";
import taskReducer from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditing from "./taskEditing";
import filterTask from "./filterTask";

const myReducer = combineReducers({
    tasks:taskReducer,
    isDisplayForm,
    taskEditing,
    filterTask
});

export default myReducer;