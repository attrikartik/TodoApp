import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../store/actions/actionTypes'
import {fetchListsSaga, setTitleColSaga, deleteColumnSaga, addTaskSaga, editTaskSaga, deleteTaskSaga} from './events'

export function* watchAll(){
    yield takeEvery(actionTypes.FETCH_LISTS_SAGA, fetchListsSaga)
    yield takeEvery(actionTypes.SET_COL_TITLE_SAGA, setTitleColSaga)
    yield takeEvery(actionTypes.DELETE_COLUMN_SAGA, deleteColumnSaga)
    yield takeEvery(actionTypes.ADD_TASK_SAGA, addTaskSaga)
    yield takeEvery(actionTypes.EDIT_TASK_SAGA, editTaskSaga)
    yield takeEvery(actionTypes.DELETE_TASK_SAGA, deleteTaskSaga)
}