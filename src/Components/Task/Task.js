import React, { Component } from 'react'

class Task extends Component { 
    state={
        title: '',
        priority:'',
    }
    render () {
        return (
            <div>
              <p>{this.props.title} EDIT</p>
            </div>
        )
    }
}
export default Task