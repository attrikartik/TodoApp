import React, { Component } from 'react'
import Header from '../Components/UI/Header'
import Board from '../Components/Board/Board'
class Todo extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Board/>
            </div>
        )
    }
}
export default Todo