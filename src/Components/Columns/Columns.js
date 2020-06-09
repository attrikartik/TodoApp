import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
/** claas Column 
 *  it displays current column with tasks
 */
class Columns extends Component {

    state = {
       startCol: null,
       dropCol: null,
       dragOver: null
    }

    onDragStart = ( e, colID) => {
        const idx = this.props.columns.findIndex(col=> col.colID === colID)
        e.dataTransfer.setData('colIdx', idx)
    }
    onDragOver = (e) => {
        e.preventDefault();
    }
    onDragEnter = ( e, colID) => {
        this.setState({ dragOver: colID})
    }
    OnDrop = (e,colID) => {
        const cols = [ ...this.props.columns]
        const droppedColIdx = cols.findIndex(col=> col.colID === colID)
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...cols];
    
        tempCols[draggedColIdx] = cols[droppedColIdx];
        tempCols[droppedColIdx] = cols[draggedColIdx];
        this.props.setCols(tempCols)
        this.setState({ dragOver: ''})
      };
    render(){
        const { colID, tasks, handleTitle,handleEdit,deleteColumn,deleteTaskHandle } = {...this.props}
        return(
            <div
              draggable 
              onDragStart={(e)=>this.onDragStart(e,colID)}
              onDragOver={(e)=>this.onDragOver(e)}
              onDragEnter={(e)=>this.onDragEnter(e,colID)}
              onDrop={(e)=>this.OnDrop(e,colID)}
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