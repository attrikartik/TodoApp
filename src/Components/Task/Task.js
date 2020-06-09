import React, { Component } from 'react'
import style from './Task.module.css'
import EditIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete';

class Task extends Component { 

    handleTask=()=> {
        alert(`Are Sure You want to Delete Current Task '${ this.props.title}' !!`)
        this.props.deletTask()
    }
    render () {
        const {title,editHandle,priority} = this.props
        return (
            <div className={style.container}>
              <div className={style.task}>
              {title} <EditIcon onClick={editHandle}/> <DeleteIcon onClick={this.handleTask}/>
              </div>       
            </div>
        )
    }
}
export default Task