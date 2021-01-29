import {generateId} from "../components/generateID";
import * as types from "../constants/ActionTypes";
const initialState = JSON.parse(localStorage.getItem('listTask'));

const taskReducer = (state = initialState, action)=>
{
    let task;
    switch (action.type)
    {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            task = action.task;
            if(!action.task.id){
                task.id = generateId();
                state.push(task);
            }
            else
            {
                const indexItem = state.findIndex(item=> item.id ===action.task.id);
                state = [
                    ...state.slice(0,indexItem),
                    {
                        ...task
                    },
                    ...state.slice(indexItem + 1)
                ];
            }
            localStorage.setItem("listTask",JSON.stringify(state));
            return [...state];
        case types.TOGGLE_STATUS_TASK:
            var tasks = [...state];
            task = tasks.find(task => task.id === action.id);
            let index = tasks.indexOf(task);
            state = [
                ...tasks.slice(0,index),
                {
                    ...task,
                    status:!task.status,
                },
                ...tasks.slice(index + 1)
            ];
            localStorage.setItem("listTask",JSON.stringify(state));
            return [...state];
        case types.DELETE_TASK:
            const indexItem = state.findIndex(item=> item.id ===action.id)
            state.splice(indexItem, 1);
            localStorage.setItem("listTask",JSON.stringify(state));
            return [...state];
        default:
            return [...state];
        
    }
}

export default taskReducer;