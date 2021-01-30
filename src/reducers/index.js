import {combineReducers} from "redux";
import taskReducer from "./tasks";
import isDisplayForm from "./isDisplayForm";
import taskEditing from "./taskEditing";
import filterTask from "./filterTask";
import keyword from "./searchTask";

const myReducer = combineReducers({
    tasks:taskReducer,
    isDisplayForm,
    taskEditing,
    filterTask,
    keyword
});

export default myReducer;