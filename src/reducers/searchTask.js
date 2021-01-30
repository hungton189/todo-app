import * as types from "../constants/ActionTypes";
const initialState = "";
const searchReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.SEARCH_TASK:
            return action.keyword;
        default:
            return state;    
    }
}
export default searchReducer;