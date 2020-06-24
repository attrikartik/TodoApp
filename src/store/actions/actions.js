import * as actionTypes from './actionTypes'

export const fetchLists = () => {  

    return {
        type: actionTypes.FETCH_LISTS_SAGA
    }
}

export const setLists = ( lists ) => {

    return{
        type: actionTypes.FETCH_LISTS,
        lists: lists
    }
}

export const setLoading = () => {

    return{
        type: actionTypes.LOADING_START,
    }
}

export const addColumn = () => {

    return{
        type: actionTypes.ADD_COLUMN
    }
}

export const addTask = ( data ) => {

    return{
        type: actionTypes.ADD_TASK_SAGA,
        columns: data.columns,
        colId: data.colId,
        currentId: data.currentId,
        title: data.title
    }
}

export const stopLoading = () => {

    return{
        type: actionTypes.LOADING_STOP,
    }
}

export const addNewTask = (data) => {

    return{
        type: actionTypes.ADD_TASK,
        data: data
    }
}

export const editTask = (data) => {

    return{
        type: actionTypes.EDIT_TASK_SAGA,
        columns: data.columns,
        editColId: data.editColId,
        editTaskId: data.editTaskId,
        task: data.task
    }   
}

export const taskEdit = (data) => {

    return{
        type: actionTypes.EDIT_TASK,
        data: data
    }
}

export const handleEdit = (data) => {
       return{
           type: actionTypes.HANDLE_EDIT,
           data: data
       }
}

export const deleteTask = (data) => {

    return{
        type: actionTypes.DELETE_TASK_SAGA,
        columns: data.columns,
        colId: data.colId,
        taskId: data.taskId,
    }
}

export const taskDelete = (data) => {

    return{
        type: actionTypes.DELETE_TASK,
        data: data
    }
}

export const deleteColumn = (data) => {
    
    return{
        type: actionTypes.DELETE_COLUMN_SAGA,
        data: data
    } 
}

export const columnDelete = id => {

    return{
        type: actionTypes.DELETE_COLUMN,
        id: id
    }
}

export const search = newColumns => {

    return{
        type: actionTypes.SEARCH,
        data: newColumns
    }
}

export const cancelEdit = () =>{

    return{
      type: actionTypes.CANCEL_EDIT
    }
}

export const setTitleCol = (data) => {

    return{
        type: actionTypes.SET_COL_TITLE_SAGA,
        columns: data.columns,
        colId: data.colId,
        title: data.title
    }
}

export const titleColSet = () =>{

    return{
      type: actionTypes.SET_COL_TITLE
    }
}