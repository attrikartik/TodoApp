import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

/** class RadioOptions 
 *  it renders option to users 
 */
class RadioOptions extends Component {

    handleSelect = (option) => {     
             this.props.setProperty(option)     
    }

    render() {
        const buts =  this.props.options.map((option,index)=>{
                        if(option === this.props.value){
                          return   <Button style={{margin:'3px'}}key={index} color="secondary" onClick={() =>this.handleSelect(option)}>{option}</Button>

                        }
                        return <Button style={{margin:'3px'}}key={index} color="primary" onClick={() =>this.handleSelect(option)}>{option}</Button>
                    })
    return(
        <div>
            <ButtonGroup>
             {buts}
            </ButtonGroup>    
        </div>
        )
    }
}

export default RadioOptions;