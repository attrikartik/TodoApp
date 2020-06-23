import * as actionTypes from './actionTypes'

// import { setList } from '../utility';
import axios from 'axios'

export const fetchLists = () => {
   
    return dispatch => {
        dispatch(setLoading())
        axios.get(`https://todoapp-291f4.firebaseio.com/events.json`)
     .then(response=>{
            if(response.data){
                dispatch(setLists(response.data))
            }else{
                dispatch(setLists([]))
            }
         dispatch(stopLoading())
     })
     .catch(err=>console.log(err))
    }    
}

export const setLists = ( lists ) => {
    return{
        type: actionTypes.FETCH_LISTS,
        lists: lists
    }
}
export const setLoading = (  ) => {
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
    return dispatch => {
        dispatch(setLoading())
     /** getting current list of columns */
     let columns = [...data.columns]
     let colIndex = columns.findIndex(column=> column.colID === data.colId)

     /** create new task */
     const newTask={
       id: ++data.currentId,
       title: data.title,
       priority: '',
       estimate: '',
       status: '',
       comments: ''
    }
    if( columns[colIndex].tasks){
       columns[colIndex].tasks.push(newTask)
    }else{
        columns[colIndex].tasks = []
        columns[colIndex].tasks.push(newTask)
    }
     axios.put(`https://todoapp-291f4.firebaseio.com/events.json`,columns)
     .then(response=>{   
         dispatch(addNewTask({colIndex: colIndex, columns: columns}))
         dispatch(stopLoading())
       })
     .catch(err=>console.log(err))
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
    return dispatch => {
        /** getting current list of columns */
    dispatch(setLoading())
    let columns = [...data.columns]
    let colIndex = columns.findIndex(column=> column.colID === data.editColId)
    let tasks = data.columns[colIndex].tasks
    let taskIndex = tasks.findIndex(t=> t.id === data.editTaskId)
    columns[colIndex].tasks[taskIndex] = data.task
    axios.put(`https://todoapp-291f4.firebaseio.com/events/${colIndex}/tasks/${taskIndex}.json`, data.task)
    .then(response=>{
       dispatch(taskEdit({columns:columns}))
    })
    .catch(err=>console.log(err))
   
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
    let colIndex = data.columns.findIndex(col=> col.colID === data.colId)
    let tasks = data.columns[colIndex].tasks
    let taskIndex = tasks.findIndex(t=> t.id === data.taskId)
    return dispatch => {
     dispatch(setLoading())
     axios.delete(`https://todoapp-291f4.firebaseio.com/events/${colIndex}/tasks/${taskIndex}.json`)
     .then(response=>{
        dispatch(taskDelete({colIndex: colIndex, taskId: data.taskId}))
     })
     .catch(err=>console.log(err))
    }
    
}

export const taskDelete = (data) => {
    return{
        type: actionTypes.DELETE_TASK,
        data: data
    }
}
export const deleteColumn = (data) => {
    let index = data.columns.findIndex(col=> col.colID === data.colId)
    return dispatch => {
    dispatch(setLoading())
     axios.delete(`https://todoapp-291f4.firebaseio.com/events/${index}.json`)
     .then(response=>{
        dispatch(columnDelete(data.colId))
     })
     .catch(err=>console.log(err))
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

export const setTitleCol = data => {
    let index = data.columns.findIndex(col=> col.colID === data.colId)
    let column = data.columns[index]
    column.title = data.title

    return dispatch => {

     axios.put(`https://todoapp-291f4.firebaseio.com/events/${index}.json`,column)
     .then(response=>{
        dispatch(titleColSet())
     })
     .catch(err=>console.log(err))
    }
}

export const titleColSet = () =>{
    return{
      type: actionTypes.SET_COL_TITLE
    }
}