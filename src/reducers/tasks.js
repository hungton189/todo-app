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
        default:
            return state;
        
    }
}

export default taskReducer;