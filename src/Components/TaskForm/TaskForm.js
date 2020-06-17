import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {ERROR_TASK} from '../../Constants/Constants'
import {Draggable} from 'react-beautiful-dnd';

/** class TaskForm 
 *  which renders form with single input to create new task
 */
class TaskForm extends Component {
    state = {
        title:'',
        error:false
    }
    /** function after form is submitted, creatng new task */
    submitHandler = (e) => {
        e.preventDefault()
        
        const value= this.state.title

        /** if title is added then create new task */
        if(value !== ''){
         this.setState({title: '', error: false})
         this.props.titleHandle(value)
        }
        /** else throw error */
        else{
            this.setState({error: true})
        }
    }
    render() {
        return (
            <Draggable draggableId={this.props.id.toString()} index={5}>
              {(provided) => (
                 
                <div
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <form onSubmit={this.submitHandler}>
                          <TextField id={Math.random().toString()}
                            label="Add Task" color="secondary"
                            onChange={(e)=>this.setState({title: e.target.value})}
                            value={this.state.title}
                          />
                          {/* if error hen display it */}
                          { this.state.error && <p style={{color:'red'}}>{ERROR_TASK}</p>}
                    </form>           
                </div>
                 
              )}
           
            </Draggable>
             
          )
    }
}

export default TaskForm
