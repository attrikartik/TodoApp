import React, { Component } from 'react'
import Columns from '../Columns/Columns'
import style from './Board.module.css'
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Modal from '../UI/Modal/Modal'
var COL_ID = 0
var TASK_ID = 0
class Board extends Component {
    state={
        columns:[],
        isEdit:false,
        editTask: null,
        editTaskId:null,
        editColId:null
    } 
    
    addNewTask = (colId,value) => {
        var columns = [...this.state.columns]
        var column = columns.filter(column=> column.colID === colId)
        const newTask={
          id: ++TASK_ID,
          title: value,
          priority: '',
          estimate: '',
          status: '',
          comments: ''
        }
        column[0].tasks.push(newTask)

        this.setState({ columns: columns})        
    }
    addList = () => {
        ++COL_ID
        const newColumn = {
           colID: COL_ID,
           tasks:[]
        }
        const columns = [...this.state.columns]
        columns.push(newColumn)
        this.setState({columns: columns})
    }

    editHandler = (taskId,colID) => {
        this.setState({ isEdit: !this.state.isEdit })
        const column = [...this.state.columns].filter(column=> column.colID === colID)
        const task =column[0].tasks.filter(task => task.id === taskId)
        this.setState({editTask: task, editTaskId: taskId, editColId: colID})
    }
    toggleDrawer = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    updatetaskHandler = (task) => {
        const { editTaskId, editColId } = this.state
        const column = [...this.state.columns].filter(column=> column.colID === editColId)
        const id = column[0].tasks.findIndex(task=> task.id === editTaskId)
        column[0].tasks[id] = task
        const updateColID = this.state.columns.findIndex(col=>col.colID === editColId) 
        this.setState({
            ...this.state.columns, [this.state.columns[updateColID]]:column
        })
        alert('task updated')
    }
    render () {
        const {columns,isEdit, editTask} = this.state
        return (
            <div  className={style.Container}>
                {
                    isEdit && <Modal 
                                show={isEdit}
                                toggleShow={this.toggleDrawer}
                                task={editTask}
                                updateTask={this.updatetaskHandler}
                              />
                }
                <Button size="medium"  variant="contained" color="primary" onClick={this.addList}> 
                  <AddCircleOutlineIcon/> New List
                </Button>
               <div className={style.Board}>
                {
                    columns.length > 0 ? columns.map(column => (
                      <Columns 
                        key={column.colID}
                        {...column}
                        handleTitle={(colId,value) => this.addNewTask(colId,value)}
                        handleEdit={(id,colID)=>this.editHandler(id,colID)}/>
                    )): null
                }
               </div>      
            </div>
        )
    }
}
export default Board