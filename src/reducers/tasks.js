import * as types from "../constants/ActionTypes";
const initialState = JSON.parse(localStorage.getItem('listTask'));

const taskReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.LIST_ALL:
            return state;
        default:
            return state
    }
}

export default taskReducer;