import React, { Component } from 'react'
import style from './Task.module.css'
import EditIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import ConfirmBox from '../UI/ConfirmBox/ConfirmBox'
import { store } from 'react-notifications-component';

/** class Task
 *  whcih displsy each task for each column
 */
class Task extends Component { 

    state = {
        showModal: false
    }
    
    /** function to toggle confirm box  */
    handleTask=()=> {
        this.setState({ showModal: !this.state.showModal})
    }
    handlerDelete = () => {
        this.setState({ showModal: !this.state.showModal})
        this.props.deletTask()
    }
    render () {
        const {title,editHandle} = this.props
        return (
            <React.Fragment>
          { this.state.showModal ? <ConfirmBox show={this.state.showModal} deleteHandler={this.handlerDelete} cancel={this.handleTask}/>: null}
            <div className={style.container}>
              <div className={style.task}>
              {title} <EditIcon onClick={editHandle}/> <DeleteIcon onClick={this.handleTask}/>
              </div>       
            </div>
            </React.Fragment>
        )
    }
}
export default Task