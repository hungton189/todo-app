import * as types from "../constants/ActionTypes";
const initialState = {
    by:"",
    value:1,
};
const sortReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.SORT_TASK:
            return action.keySort;
        default:
            return state;    
    }
}
export default sortReducer;