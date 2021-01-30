import * as types from "../constants/ActionTypes";
const initialState = {
    name:"",
    status:1
};
const filterReducer = (state = initialState, action)=>
{
    switch (action.type)
    {
        case types.FILTER_TASK:
            console.log(action.filter);
            return action.filter;
        default:
            return state;    
    }
}
export default filterReducer;