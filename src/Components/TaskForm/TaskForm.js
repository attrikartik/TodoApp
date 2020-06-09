import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';

class TaskForm extends Component {
    state = {
        title:'',
        error:false
    }
    submitHandler = (e) => {
        e.preventDefault()
        const value= this.state.title
        if(value !== ''){
         this.setState({title: '', error: false})
         this.props.titleHandle(value)
        }
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
                { this.state.error && <p style={{color:'red'}}>Please add task</p>}
            </form>        
        )
    }
}

export default TaskForm