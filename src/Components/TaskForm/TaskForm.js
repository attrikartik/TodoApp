import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import Notification from '../UI/Notificaion/Notification'
/** class TaskForm 
 *  which renders form with single input to create new task
 */

Notification('Enter Valid Value!','Empty Field', 'danger')

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
            Notification('Enter Valid Value!','Empty Field', 'danger')
        }
    }
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <TextField id={Math.random().toString()}
                  label="Add Task"
                  onChange={(e)=>this.setState({title: e.target.value})}
                  value={this.state.title}
                />
            </form>        
        )
    }
}

export default TaskForm