import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TaskForm from '../TaskForm/TaskForm'
import ConfirmBox  from '../UI/ConfirmBox/ConfirmBox'
import Task from '../Task/Task'
import style from './Card.module.css'

/** component TaskCard
 *  which renders each TaskCard to users
 */
const TaskCard =(props)=> {

  /** setting initial state */
  const [colId, setColId] = useState(null)
  const [tasks,setTasks] = useState([])
  const [showModal,setShowModal] = useState(false)
  
  /** hook with its dependencies for setting state  */
  useEffect(() => {
    setColId(props.colId)
    setTasks(props.tasks)
  },[props.colId, props.tasks])

  /** function to alert user and then delete column */
  const handler = () => {
    setShowModal(!showModal)
  }
  /**toggle side drawer and call delete function*/
  const handlerDelete = () => {
    setShowModal(false)
    props.deleteCol()
  }
  return (
    <Card className={style.root}>
      { showModal ? <ConfirmBox show={showModal} deleteHandler={handlerDelete} cancel={handler}/>: null}
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handler} >
            <DeleteIcon/>
          </IconButton>
        }
        title="TASK"
      />
      <CardContent>
        <TaskForm  
          titleHandle={(value)=>props.title(colId,value)}
        />
        {
         tasks.length > 0 ? tasks.map((t,index)=>
            <Task 
              id={t.id}
              key={index}
              title={t.title}
              editHandle={()=>props.edit(t.id)}
              deletTask={()=>props.taskDelete(t.id)}
              />) : null
        } 
      </CardContent>
    </Card>
  );
}
export default TaskCard