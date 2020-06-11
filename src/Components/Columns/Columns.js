import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
/** class Column 
 *  it displays current column with tasks (also kanban view)
 */
class Columns extends Component {
    /** when user start column drag */
    onDragStart = ( e, colID) => {
        /** getting index of dragged column */
        const idx = this.props.columns.findIndex(col=> col.colID === colID)
        
        /** setting data of dragged column in event  */
        e.dataTransfer.setData('colIdx', idx)
    }
    /** dragging over the column */
    onDragOver = (e) => {
        e.preventDefault();
    }
    onDragEnter = ( e, colID) => {
        e.preventDefault()
    }
    /** when column is droppped after drag */
    OnDrop = (e,colID) => {
        /** get current state of columns */
        const cols = [ ...this.props.columns]
        
        /** getting index of dragged columns*/
        const droppedColIdx = cols.findIndex(col=> col.colID === colID)
        
        /** get data of dragged column from event */
        const draggedColIdx = e.dataTransfer.getData("colIdx");
        const tempCols = [...cols]

        /*** swapping / updating columns */
        tempCols[draggedColIdx] = cols[droppedColIdx];
        tempCols[droppedColIdx] = cols[draggedColIdx];
        
        /** updating state with new columns*/
        this.props.setCols(tempCols)
    }
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