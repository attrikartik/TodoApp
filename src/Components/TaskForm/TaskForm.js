import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

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
        return(
            <form onSubmit={this.submitHandler}>
                <TextField id={Math.random().toString()}
                  label="Add Task" color="secondary"
                  onChange={(e)=>this.setState({title: e.target.value})}
                  value={this.state.title}
                />
                {/* if error hen display it */}
                { this.state.error && <p style={{color:'red'}}>Please add task</p>}
            </form>        
        )
    }
}

export default TaskForm