import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TaskForm from '../TaskForm/TaskForm'
import Task from '../Task/Task'
import style from './Card.module.css'

const TaskCard =(props)=> {

  const [colId, setColId] = useState(null)
  const [tasks,setTasks] = useState([])
  
  useEffect(() => {
    setColId(props.colId)
    setTasks(props.tasks)
  },[props.colId, props.tasks])

  const handler = () => {
    alert('Are Sure You want to Delete It !!')
    props.deleteCol()
  }
 
  return (
    <Card className={style.root}>
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