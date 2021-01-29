import * as types from "../constants/ActionTypes";
const initialState = JSON.parse(localStorage.getItem('listTask'));

const taskReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            state.push(action.task);
            localStorage.setItem("listTask",JSON.stringify(state));
            return [...state];
        case types.TOGGLE_STATUS_TASK:
            var tasks = [...state];
            const task = tasks.find(task => task.id === action.id);
            const index = tasks.indexOf(task);
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
        default:
            return [...state];
        
    }
}

export default taskReducer;