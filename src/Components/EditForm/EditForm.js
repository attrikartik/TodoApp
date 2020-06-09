import React, { Component } from 'react';
import { Form, Input, Label, FormGroup, Button } from 'reactstrap';
import RadioOptions from '../UI/RadioOptions/RadioOptions'
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

    componentDidMount = () => {
        const { task } =  this.props
        // console.log(task)
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
    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = (e) => {
      e.preventDefault()
      const task = {
        title: this.state.data.title,
        priority: this.state.data.priority,
        estimate: this.state.data.estimate,
        status: this.state.data.status,
        comments: this.state.data.comments
      }
      this.props.update(task)
    }
   
    setProp = (value,name) => {
      this.setState({
        data: {
            ...this.state.data,
            [name]: value
        }
      })
    }
    render() {
        const {data} = this.state;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Label for="editForm" style={{color:'#284756'}}><h3>Edit Task: {data.status}</h3></Label>
                <FormGroup>
                    {/* <Label for="priority" style={{color:'#1B88BE'}}>Set Task Priority</Label> */}
                    <RadioOptions 
                       title={'Priority'} 
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
                        title={'Status'} 
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

                <Button color="primary">Update</Button>
            </Form>
        );
    }
}

export default Register;