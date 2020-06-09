import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class RadioOptions extends Component {
    state={
        selected: ''
    }
    
    handleSelect = (option) => {
        this.setState(prevState=>({
             selected: option
        }), ()=>{
             this.props.setProperty(this.state.selected)
        })       
    }

    render() {
    return(
        <div>
            <ButtonGroup>
             {
                this.props.options.map((option,index)=>(
                <Button key={index} color="primary" onClick={() =>this.handleSelect(option)} active={this.state.selected === option}>{option}</Button>
               ))
             }
            </ButtonGroup>
            <p>{this.props.title}: {this.state.selected ? this.state.selected : this.props.value}</p>
     
        </div>
        )
    }
}

export default RadioOptions;