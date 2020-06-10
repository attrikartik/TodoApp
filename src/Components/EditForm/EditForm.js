import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap'
import RadioOptions from '../UI/RadioOptions/RadioOptions'
import TextField from '@material-ui/core/TextField'
import { EDIT_TASK, ESTIMATE, CANCEL, UPDATE, COMMENTS, PRIORITY_OPTIONS, STATUS_OPTIONS} from '../../Constants/Constants'

class Register extends Component {

    state={
            title:'',
            priority:'',
            estimate: '',
            status:'',
            comments: '',
        }
    componentDidMount = () => {
        const { task } =  this.props
        this.setState({
            title: task[0].title,
            priority: task[0].priority,
            estimate: task[0].estimate,
            status: task[0].status,
            comments: task[0].comments
        })
    }
    /** function set state with user input values */
    handleChange = (e) => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value
        });
    }
    /** function when form is submitted */
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({ updated: true})
      /** create new task with properties */
      const task = {
        title: this.state.title,
        priority: this.state.priority,
        estimate: this.state.estimate,
        status: this.state.status,
        comments: this.state.comments
      }
      /** update the task */
      this.props.update(task)
    }
    
    /** function to set priority and status of function */
    setProp = (value,name) => {
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    cancelHandler = (e) => {
        e.preventDefault()
        /** set all state as empty */
        this.setState({
              title: '',
              priority: '',
              estimate: '',
              status: '',
              comments: ''
        })
        this.props.toggle()
    }
    render() {
        const {title,priority,status,estimate,comments} = this.state
        return (
            <Form>
                <Label for="editForm" style={{color:'#284756'}}> <h3>{EDIT_TASK}</h3></Label>
                <h3>
                <TextField id={Math.random().toString()}
                  name='title'
                  label="Edit Task Label" color="secondary"
                  onChange={this.handleChange}
                  value={title}
                /></h3>
                <FormGroup>
                    {/* <Label for="priority" style={{color:'#1B88BE'}}>Set Task Priority</Label> */}
                    <RadioOptions 
                       title='Task Priority'
                       name="priority" 
                       options={PRIORITY_OPTIONS} 
                       value={priority ? priority : 'null'}
                       setProperty={(v)=>this.setProp(v,'priority')}                       
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="estimate" style={{color:'#1B88BE'}}>{ESTIMATE}</Label>
                    <Input type='number' id="estimate" value={estimate} name="estimate" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    {/* <Label for="status" style={{color:'#1B88BE'}}>Set Status</Label> */}
                    <RadioOptions 
                        title='Task Status' 
                        name="status" 
                        options={STATUS_OPTIONS}  
                        setProperty={(v)=>this.setProp(v,'status')}
                        value={status}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="comments" style={{color:'#1B88BE'}}>{COMMENTS}</Label>
                    <Input type="textarea" value={comments} name="comments" id="comments" onChange={this.handleChange}/>
                </FormGroup>

                <Button style={{marginRight: '8px'}}color="primary" onClick={this.handleSubmit}>{UPDATE}</Button>
                <Button color="primary" onClick={this.cancelHandler}>{CANCEL}</Button>
            </Form>
        );
    }
}

export default Register;