import React, { Component } from 'react'
import style from './Task.module.css'
import EditIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import ConfirmBox from '../UI/ConfirmBox/ConfirmBox'
import {Draggable} from 'react-beautiful-dnd';

/** class Task
 *  which display each task for each column
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
          <Draggable 
            draggableId={this.props.id.toString()}
            index={this.props.index}
            >
            {(provided) => (               
                <div className={style.container}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className={style.task} {...provided.dragHandleProps}   >
                        {title} <EditIcon onClick={editHandle}/> <DeleteIcon onClick={this.handleTask}/>
                    </div>   
                </div>
               
            )}         
          </Draggable>           
        )
    }
}
export default Task

