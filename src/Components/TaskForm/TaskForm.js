import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class TaskForm extends Component {
    state = {
        title:''
    }
    submitHandler = (e) => {
        e.preventDefault()
        this.props.titleHandle(this.state.title)
    }
    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <TextField id={Math.random().toString()} label="Add Task" color="secondary" onChange={(e)=>this.setState({title: e.target.value})}/>
            </form>        
        )
    }
}

export default TaskForm