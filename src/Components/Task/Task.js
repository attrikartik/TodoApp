import React, { Component } from 'react'
import style from './Task.module.css'
import EditIcon from '@material-ui/icons/Create';
class Task extends Component { 
    render () {
        return (
            <div className={style.contaier}>
              <div className={style.task}>
              {this.props.title} <EditIcon onClick={this.props.editHandle}/>
              </div>       
            </div>
        )
    }
}
export default Task