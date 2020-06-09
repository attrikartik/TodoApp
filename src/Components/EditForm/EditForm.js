import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import RadioOptions from '../UI/RadioOptions/RadioOptions'
import TextField from '@material-ui/core/TextField';
class Register extends Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
          title:'',
          priority:'',
          estimate: '',
          status:'',
          comments: '',
        }
    })
    /** setting state when component gets mounted */
    componentDidMount = () => {
        const { task } =  this.props
        this.setState({
          data: {
            title: task[0].title,
            priority: task[0].priority,
            estimate: task[0].estimate,
            status: task[0].status,
            comments: task[0].comments
           }
        })
    }
    /** function set state with user input values */
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }
    /** function when form is submitted */
    handleSubmit = (e) => {
      e.preventDefault()
      this.setState({ updated: true})
      /** create new task with properties */
      const task = {
        title: this.state.data.title,
        priority: this.state.data.priority,
        estimate: this.state.data.estimate,
        status: this.state.data.status,
        comments: this.state.data.comments
      }
      /** update the task */
      this.props.update(task)
    }
    
    /** function to set priority and status of function */
    setProp = (value,name) => {
      this.setState({
        data: {
            ...this.state.data,
            [name]: value
        }
      })
    }

    cancelHandler = (e) => {
        e.preventDefault()
        /** set all state as empty */
        this.setState({
            data: {
              title: '',
              priority: '',
              estimate: '',
              status: '',
              comments: ''
             }
        })
        this.props.toggle()
    }
    render() {
        const {data} = this.state;
        return (
            <Form>
                <Label for="editForm" style={{color:'#284756'}}> <h3>Edit Task</h3></Label>
                <h3>
                <TextField id={Math.random().toString()}
                  name='title'
                  label="Edit Task Label" color="secondary"
                  onChange={this.handleChange}
                  value={data.title}
                /></h3>
                <FormGroup>
                    {/* <Label for="priority" style={{color:'#1B88BE'}}>Set Task Priority</Label> */}
                    <RadioOptions 
                       title='Task Priority'
                       name="priority" 
                       options={['Normal', 'Medium','High']} 
                       setProperty={(v)=>this.setProp(v,'priority')}
                       value={data.priority}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="estimate" style={{color:'#1B88BE'}}>Estimate (in Hrs)</Label>
                    <Input id="estimate" value={data.estimate} name="estimate" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    {/* <Label for="status" style={{color:'#1B88BE'}}>Set Status</Label> */}
                    <RadioOptions 
                        title='Task Status' 
                        name="status" 
                        options={['Un Touched', 'On Hold', 'In Progress', 'Partially Done', 'Done']}  
                        setProperty={(v)=>this.setProp(v,'status')}
                        value={data.status}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="comments" style={{color:'#1B88BE'}}>Comments</Label>
                    <Input type="textarea" value={data.comments} name="comments" id="comments" onChange={this.handleChange}/>
                </FormGroup>

                <Button style={{marginRight: '8px'}}color="primary" onClick={this.handleSubmit}>Update</Button>
                <Button color="primary" onClick={this.cancelHandler}>Cancel</Button>
            </Form>
        );
    }
}

export default Register;