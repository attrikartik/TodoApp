import React, { Component } from 'react'
import Header from '../../Components/UI/Header/Header'
import Board from '../../Containers/Board/Board'
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