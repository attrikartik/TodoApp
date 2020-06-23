import React, { useState } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import TaskForm from '../TaskForm/TaskForm'
import ConfirmBox  from '../UI/ConfirmBox/ConfirmBox'
import Task from '../Task/Task'
import TextField from '@material-ui/core/TextField'
import style from './TaskCard.module.css'
import {connect} from 'react-redux'
import * as actions from '../../store/actions/actions'

/** component TaskCard
 *  which renders each TaskCard to users
 */
const TaskCard =(props)=> {

  /** getting props */
  const { colId, tasks, titleCol } = props
 

  /** setting initial state */
  const [showModal,setShowModal] = useState(false)
  const [form,setForm] = useState(titleCol? true: false)
  const [title,setTitle] = useState(titleCol || '')
  
  

  /** function to alert user and then delete column */
  const handler = () => {
    setShowModal(true)
  }
  /**toggle side drawer and call delete function*/
  const handlerDelete = () => {
    setShowModal(false)
    props.deleteCol(colId,props.columns)
  }

  const cancelHandler = () => {
    setShowModal(false)
  }

  /**form submit */
  const submitHandler = (e) => {
    e.preventDefault()
    if(title === ''){
      setForm(false)
      Notification('Enter Valid Value!','Empty Field', 'danger')
    }
    else{

      setForm(true)
      props.setTitleCol(title,colId,props.columns)
    }
  }

return (
   
         <Card className={style.root}>
         <CardHeader
           action={
           <IconButton aria-label="settings" onClick={handler} >
             <DeleteIcon/>
           </IconButton>
         }
           title={title}
         />
          { showModal ? <ConfirmBox show={showModal} deleteHandler={handlerDelete} cancel={cancelHandler}/>: null}
         {
           !form ? <form onSubmit={submitHandler}>
             <TextField id={Math.random().toString()}
             label="Add Title" 
             onChange={(e)=>setTitle(e.target.value)}
             />
              
           </form>: null    
         }
         <CardContent>
           <TaskForm 
                id={props.colId} 
                titleHandle={(value)=>props.addNewTask(colId,value,props.currentTaskId,props.columns)}
           />
            {
               tasks && tasks.length > 0 ? tasks.map((t,index)=>
                  <Task 
                    key={index}
                    taskId={t.id}
                    colId={colId}
                    priority={t.priority}
                    title={t.title}
                    estimate={t.estimate}
                    status={t.status}
                 />) : null
             } 
         </CardContent>
       </Card>
  )
}

const mapStateToProps = state => {
  return{
    currentTaskId: state.TASK_ID,
    columns: state.lists
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addNewTask: (colId,title,currentTaskId,columns) => dispatch(actions.addTask({colId: colId, title: title, currentId: currentTaskId,columns: columns})),
    deleteCol: (colId,columns) => dispatch(actions.deleteColumn({colId: colId, columns: columns})),
    setTitleCol: (title,colId,columns) => dispatch(actions.setTitleCol({title: title, colId: colId, columns: columns}))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskCard)