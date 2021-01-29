import * as types from "../constants/ActionTypes";
const initialState = {};

const taskEditingReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.UPDATE_TASK:
            return action.task;
        default:
            return state;
        
    }
}

export default taskEditingReducer;