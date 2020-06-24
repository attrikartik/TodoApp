import axios from 'axios'
import {put} from 'redux-saga/effects'
import * as actions from '../store/actions/actions'

/** generator fetch all lsist from DB */
export function* fetchListsSaga() {
    let response = null
    yield put(actions.setLoading())
    try{
        response = yield axios.get(`https://todoapp-291f4.firebaseio.com/events.json`)
        if(response.data){
          yield put(actions.setLists(response.data))
        }
        else{
            yield put(actions.setLists([]))
        }
        yield put(actions.stopLoading())
    }
    catch(error){
        yield console.log(error)
    }
}

/** generator to set list title */
export function* setTitleColSaga( action ){
    let   index = action.columns.findIndex(col=> col.colID === action.colId)
    let   column = action.columns[index]
    column.title = action.title

    try{
         yield axios.put(`https://todoapp-291f4.firebaseio.com/events/${index}.json`,column)
         yield put(actions.titleColSet())
    }
    catch(error){
        yield console.log(error)
    }
}

/** generator to delete compelete single list */
export function* deleteColumnSaga(action){
    let index = action.data.columns.findIndex(col=> col.colID === action.data.colId)
    yield put(actions.setLoading())
    try{
         yield axios.delete(`https://todoapp-291f4.firebaseio.com/events/${index}.json`)
         yield put(actions.columnDelete(action.data.colId))
    }
    catch(error){
        console.log(error)
    }
}

/** generator to add task in paticular list/column */
export function* addTaskSaga(data){
    yield put(actions.setLoading())
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
    try{
         yield axios.put(`https://todoapp-291f4.firebaseio.com/events.json`,columns)
         yield put(actions.addNewTask({colIndex: colIndex, columns: columns}))
         yield put(actions.stopLoading())
    }
    catch(error){
        console.log(error)
    }
}

/** generator to edit task  */
export function* editTaskSaga(data){
    
    yield put(actions.setLoading())
    /** getting current list of columns */
    let columns = [...data.columns]
    let colIndex = columns.findIndex(column=> column.colID === data.editColId)
    let tasks = data.columns[colIndex].tasks
    let taskIndex = tasks.findIndex(t=> t.id === data.editTaskId)
    columns[colIndex].tasks[taskIndex] = data.task
    try{
        yield axios.put(`https://todoapp-291f4.firebaseio.com/events/${colIndex}/tasks/${taskIndex}.json`, data.task)
        yield put(actions.taskEdit({columns:columns}))
    }
    catch(error){
     console.log(error)
    }    
}

/** generator to delete task from particular list */
export function* deleteTaskSaga(data){
    console.log(data)
    let colIndex = data.columns.findIndex(col=> col.colID === data.colId)
    let tasks = data.columns[colIndex].tasks
    let taskIndex = tasks.findIndex(t=> t.id === data.taskId)
    try{ 
         yield put(actions.setLoading())
         yield axios.delete(`https://todoapp-291f4.firebaseio.com/events/${colIndex}/tasks/${taskIndex}.json`)
         yield put(actions.taskDelete({colIndex: colIndex, taskId: data.taskId}))
    }
    catch(error){
        console.log(error)
    }    
}