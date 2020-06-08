import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
class Columns extends Component {

    render(){
        const { colID, tasks, handleTitle } = {...this.props}
        return(
            <div>
                <TaskCard colId={colID} tasks={tasks} title={(colId,value)=> handleTitle (colId,value)}/>
            </div>
        )
    }
}

export default Columns