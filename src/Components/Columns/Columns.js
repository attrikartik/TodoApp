import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
/** claas Column 
 *  it displays current column with tasks
 */
class Columns extends Component {

    state = {
       startCol: null,
       dropCol: null
    }

    onDragStart = ( e, colID) => {
        this.setState({ startCol: colID})
    }
    onDragOver = (e) => {
        e.preventDefault();
    }
    
    onDrop = (e,colID) => {
        this.setState({ dropCol: colID})
    }
    render(){
        const { colID, tasks, handleTitle,handleEdit,deleteColumn,deleteTaskHandle } = {...this.props}
        return(
            <div
              draggable 
              onDragStart={(e)=>this.onDragStart(e,colID)}
              onDragOver={(e)=>this.onDragOver(e)}
              onDrop={(e)=>this.onDrop(e,colID)}
            >
                {/* rendering task for each column */}
            <TaskCard 
                colId={colID}
                tasks={tasks}
                title={(colId,value)=> handleTitle (colId,value)}
                edit={(id)=>handleEdit(id,colID)}
                deleteCol={()=>deleteColumn(colID)}
                taskDelete={(taskID)=>deleteTaskHandle(taskID,colID)}
            />
            </div>
        )
    }
}

export default Columns