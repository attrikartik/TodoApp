import React, { Component } from 'react'
import Columns from '../../Components/Columns/Columns'
import style from './Board.module.css'
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Modal from '../../Components/UI/Modal/Modal'
var COL_ID = 0
var TASK_ID = 0
/** class Board which maintains all the states and fucntionalities regarging TODOAPP */
class Board extends Component {
    state={
        columns:[],
        isEdit:false,
        editTask: null,
        editTaskId:null,
        editColId:null
    } 
    
    /** fucntion to add new task to particlar list
     *  @param colId id of list where to add new task
     *  @param value title of task
     */
    addNewTask = (colId,value) => {
        /** getting current list of columns */
        var columns = [...this.state.columns]
        var column = columns.filter(column=> column.colID === colId)
        /** create new task */
        const newTask={
          id: ++TASK_ID,
          title: value,
          priority: '',
          estimate: '',
          status: '',
          comments: ''
        }
        /** add new task to column list  */
        column[0].tasks.push(newTask)
        
        /** update state */
        this.setState({ columns: columns})        
    }

    /** add new list column to main Board */
    addList = () => {
        /** increment colID for new column */
        ++COL_ID
        /** create new column */
        const newColumn = {
           colID: COL_ID,
           tasks:[]
        }
        /** getting current columns and new column */
        const columns = [...this.state.columns]
        columns.push(newColumn)

        /** update state */
        this.setState({columns: columns})
    }
    /** function to get  task whcih has to be edit and send to side drawer 
     * @param taskid id for task which is to be edit
     * @param colID  id of column where task resides
    */
    editTaskHandler = (taskId,colID) => {
        this.setState({ isEdit: !this.state.isEdit })
        /** getting column in which task is there */
        const column = [...this.state.columns].filter(column=> column.colID === colID)
        /** get task to be updated */
        const task =column[0].tasks.filter(task => task.id === taskId)
        /** update the state */
        this.setState({editTask: task, editTaskId: taskId, editColId: colID})
    }

    /** function to toggle side drawer */
    toggleDrawer = () => {
        this.setState({ isEdit: !this.state.isEdit })
    }

    /** function to update task with new properties 
     * @param task task with new properties
    */
    updatetaskHandler = (task) => {
        const { editTaskId, editColId } = this.state
        /** getting column  */
        const column = [...this.state.columns].filter(column=> column.colID === editColId)
        /** getting task id */
        const id = column[0].tasks.findIndex(task=> task.id === editTaskId)
        /** update task wuth new new task properties */
        column[0].tasks[id] = task
        /** getting column id */
        const updateColID = this.state.columns.findIndex(col=>col.colID === editColId) 
        /** updatin gthe stat */
        this.setState({
            ...this.state.columns, [this.state.columns[updateColID]]:column, isEdit: !this.state.isEdit
        })
        alert('task updated')
    }
    /** functio to delete full column list 
     * @param colID id for column whihch is to be deleted
     */
    deletColumnHandler = ( colID ) => {
        /** deleting column */
        const columns = [...this.state.columns].filter(col=> col.colID !== colID)
        /** updating state */
        this.setState({columns: columns})
    }
    /** function to delete particular task from column
     *  @param taskID id of task which is to be delted
     *  @param colID  id of column where task resids
     */
    deleteTaskHandler = (taskID,colID)=>{
        /** getting column */
        const column = [...this.state.columns].filter(col=> col.colID === colID)
        /** deleting task */
        const tasks = column[0].tasks.filter(task=>task.id !== taskID)
        /** updating column  */
        column[0].tasks = tasks
        /** updating the state */
        this.setState({
            ...this.state.columns, [this.state.columns[colID]]:column})

    }
    /** function rendering columns when the are shuffled(kanban view) */
    drag = (cols) => {
        console.log(cols)
        this.setState({ columns: cols})
    }
    render () {
        /** getting properties from state */
        const {columns,isEdit, editTask} = this.state
        return (
            <div  className={style.Container}>
                 {/* render modal of is task is being edited */}
                {
                    isEdit && <Modal 
                                show={isEdit}
                                toggleShow={this.toggleDrawer}
                                task={editTask}
                                updateTask={this.updatetaskHandler}
                              />
                }
                {/* buuton to add new column */}
                <Button size="medium"  variant="contained" color="primary" onClick={this.addList}> 
                  <AddCircleOutlineIcon/> New List
                </Button>
                {/* rendering columns */}
               <div className={style.Board}>
                {
                    // passing props to single column
                    columns.length > 0 ? columns.map(column => (
                      <Columns 
                        key={column.colID}
                        columns={columns}
                        setCols={(cols)=>this.drag(cols)}
                        {...column}
                        handleTitle={(colId,value) => this.addNewTask(colId,value)}
                        handleEdit={(id,colID)=>this.editTaskHandler(id,colID)}
                        deleteColumn={(colID)=> this.deletColumnHandler(colID)}
                        deleteTaskHandle={(taskID,colID) =>this.deleteTaskHandler(taskID,colID)}/>
                    )): null
                }
               </div>      
            </div>
        )
    }
}
export default Board