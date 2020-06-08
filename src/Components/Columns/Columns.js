import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
class Columns extends Component {

    render(){
        const { colID, tasks, handleTitle,handleEdit } = {...this.props}
        return(
            <div>
                <TaskCard 
                  colId={colID}
                  tasks={tasks}
                  title={(colId,value)=> handleTitle (colId,value)}
                  edit={(id)=>handleEdit(id,colID)}/>
            </div>
        )
    }
}

export default Columns