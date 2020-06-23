import React, { Component } from 'react'
import Columns from '../../Components/Columns/Columns'
import style from './Board.module.css'
import Button from '@material-ui/core/Button'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Modal from '../../Components/UI/Modal/Modal'
import EditForm from '../../Components/EditForm/EditForm'
import Header from '../../Components/UI/Header/Header'
import {NO_LIST_FOUND, NEW_LIST} from '../../Constants/Constants'
import Loading from '../../Components/UI/Progress/Progress'
import {connect } from 'react-redux'
import * as actions from'../../store/actions/actions'

/** class Board which maintains all the states and functionalities regardging TODOAPP */
class Board extends Component {
   
    componentDidMount(){
           this.props.fetchtLists()     
    }  

    /** function to filter list based on tasks
     * @param value filter tasks bases on this 
     */
    searchHandler = ( value ) => {
          /** getting current state */
        const columns = [...this.props.lists]   

        /** new arrays to store filtered results*/
        let newTasks = []
        let newColumns = []

        /** traversing current state columns and it's tasks */
        columns.forEach(col => {
            newTasks=[]
            col.tasks.forEach(task=>{
                /** if current tasks title match give input store in new array */
                if(task.title === value){
                   newTasks.push(task)
                }
            })

            /** with new tasks create new column */
            if( newTasks.length > 0)
            {
                const newCol = {
                    colID: col.colID,
                    tasks: newTasks
                }

                /** store new column in new array */
                newColumns.push(newCol)
            }         
        })
           if(newColumns.length > 0){
            /** updating the state with new filtered columns and it's tasks */
             this.props.search(newColumns)

             /**  successful search notification */
             Notification('Successfull!','Data Found', 'success')
            }
            else{
                /**no search data found  notification */
                Notification('No data found!','Try Again', 'danger')
            }
    }    

    render () {
        /** getting properties from state */
        
        const {lists, isEdit, cancelEdit,taskToBeEdit,updateTask,editTaskId,editColId,addList} = this.props
        return (
            <div  className={style.Container}>
                
                <Header search={this.searchHandler}/>

                 {/* render modal of is task is being edited */}
                {
                    isEdit  && <Modal show={isEdit}>
                               <EditForm
                               toggleShow={cancelEdit}
                               taskToBeEdit={taskToBeEdit}
                               updateTask={(task)=>updateTask(task,editTaskId,editColId,lists)}
                               />
                               </Modal> 
                }
                {/* buuton to add new column */}
                <Button size="medium" style={{marginBottom: '5px'}}  variant="contained" color="primary" onClick={()=>addList()}> 
                  <AddCircleOutlineIcon/> {NEW_LIST}
                </Button>
                
                {/* rendering columns */}

                {
                    this.props.loading === true ? <Loading/> :               
                 
                <div className={style.Board}>
                {
                    // passing props to single column
                   lists.length > 0  ? lists.map((column,index) =>
                    {
                        
                        return  (
                                <Columns 
                                    key={index}
                                    columns={lists}
                                    {...column}
                                />
                 
                            )
                    }): <h5 style={{color:'red'}}>{NO_LIST_FOUND}</h5>
                }
                 </div>  
                } 
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        lists: state.lists,
        COL_ID: state.COL_ID,
        TASK_ID: state.TASK_ID,
        loading: state.loading,
        taskToBeEdit: state.taskToBeEdit,
        editTaskId: state.editTaskId,
        editColId: state.editColId,
        isEdit: state.isEdit
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchtLists: () => dispatch(actions.fetchLists()),
        addList: () => dispatch(actions.addColumn()),
        updateTask: (task,editTaskId,editColId,lists) => dispatch(actions.editTask({task:task, editTaskId: editTaskId, editColId: editColId, columns:lists})),
        search: (newColumns) => dispatch(actions.search(newColumns)),
        cancelEdit: () =>dispatch(actions.cancelEdit())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Board)                  
