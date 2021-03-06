import * as types from '../constants/ActionTypes';

export const listAll = () =>
{
    return {
        type:types.LIST_ALL
    }
}

export const onSaveTask = (task) => {
    return {
        type:types.SAVE_TASK,
        task
    }
}
export const toggleStatusTask = (id) =>{
    return {
        type:types.TOGGLE_STATUS_TASK,
        id
    }
}
export const deleteTask = (id) =>{
    return {
        type:types.DELETE_TASK,
        id
    }
}
export const updateTaskEditing = (task) =>{
    return {
        type:types.UPDATE_TASK,
        task
    }
}
export const filterTask = (filter) =>{
    return {
        type:types.FILTER_TASK,
        filter
    }
}
export const searchTask = (keyword) =>{
    return {
        type:types.SEARCH_TASK,
        keyword
    }
}
export const sortTask = (keySort) =>{
    return {
        type:types.SORT_TASK,
        keySort
    }
}   
export const toggleForm = () =>
{
    return {
        type:types.TOGGLE_FORM
    }
}

export const openForm = () =>
{
    return {
        type:types.OPEN_FORM
    }
}
export const closeForm = () =>
{
    return {
        type:types.CLOSE_FORM
    }
}
