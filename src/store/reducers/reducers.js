import * as actionTypes from '../actions/actionTypes'
import { setList, startLoading, stopLoading, addTask, updateTask, handleEdit, deleteTask,
    deleteColumn, cancelEdit, addColumn } from '../utility'

const initialState = {
    lists: [],
    COL_ID: 0,
    TASK_ID: 0,
    loading: false,
    isEdit:false,
    editTaskId:0,
    editColId:0,
    taskToBeEdit: null
}
const reducer = ( state = initialState, action) => {
    switch(action.type){

        case actionTypes.FETCH_LISTS:
            return setList(state,action.lists)

        case actionTypes.LOADING_START:
            return startLoading(state)

        case actionTypes.LOADING_STOP:
            return stopLoading(state)

        case actionTypes.ADD_TASK:
           return addTask(state, action.data.columns)          
                         
        case actionTypes.ADD_COLUMN:
           return addColumn(state)

           case actionTypes.EDIT_TASK:
            return updateTask(state, action.data.columns)

        case actionTypes.HANDLE_EDIT:
            return handleEdit(state,action.data)

        case actionTypes.DELETE_TASK:
            return deleteTask(state, action.data)
     
        case actionTypes.DELETE_COLUMN:
           return deleteColumn(state,action.id)

        case actionTypes.SEARCH:
            return{
                ...state,
                lists: action.data
            }

        case actionTypes.CANCEL_EDIT:
            return cancelEdit(state)

        case actionTypes.SET_COL_TITLE:
            return {...state}
        default:
            return {...state}
    }
} 

export default reducer