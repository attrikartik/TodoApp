import React, { Component } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

/** class Column 
 *  it displays current column with tasks (also kanban view)
 */
class Columns extends Component {
    /** when user start column drag */
    onDragStart = ( e, colID) => {
        // console.log('as')
        /** getting index of dragged column */
        const idx = this.props.columns.findIndex(col=> col.colID === colID)
        
        // /** setting data of dragged column in event  */
        // e.dataTransfer.setData('colIdx', idx)
        console.log(e)
    }
    /** dragging over the column */
    // onDragOver = (e) => {
    //     e.preventDefault();
    // }
    // onDragEnter = ( e, colID) => {
    //     e.preventDefault()
    // }
    /** when column is droppped after drag */
    onDragEnd = result => {
        console.log(result)
        const {destination, source, draggableId } = result;
        const { columns } = this.props
        if(!destination) {
          return;
        }
      
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
          return;
        }
        //  console.log(source.draggableId)
        //  console.log(destination.draggableId)    
        if(source.draggableId === destination.draggableId) {
          const newTaskIds = Array.from(columns.taskIds);
        // newTaskIds.splice(source.index, 1);
        // newTaskIds.splice(destination.index, 0, draggableId);
      
        // const newColumn = {
        //   ...finish,
        //   taskIds: newTaskIds,
        // };
    
      
        // const newState = {
        //   columns,
        //   columns: {
        //     ...this.state.columns,
        //     [newColumn.id]: newColumn,
        //   },
        // };
        // console.log(newState)
        // // this.setState(newState);
        // return;  
      
        }
      // Moving from one list to another
    //   const startTaskIds = Array.from(start.taskIds);
    //   startTaskIds.splice(source.index, 1);
    //   const newStart = {
    //     ...start,
    //     taskIds: startTaskIds,
    //   };
      
    //   const finishTaskIds = Array.from(finish.taskIds);
    //   finishTaskIds.splice(destination.index, 0, draggableId);
    //   const newFinish = {
    //     ...finish,
    //     taskIds: finishTaskIds,
    //   };
      
    //   const newState = {
    //     ...this.state,
    //     columns: {
    //       ...this.state.columns,
    //       [newStart.id]: newStart,
    //       [newFinish.id]: newFinish,
    //     },
    //   };
    //   this.setState(newState);
      };
    render(){
        const { colID, tasks, handleTitle,handleEdit,deleteColumn,deleteTaskHandle } = {...this.props}
        return(
            // <div
            //   draggable 
            //   onDragStart={(e)=>this.onDragStart(e,colID)}
            //   onDragOver={(e)=>this.onDragOver(e)}
            //   onDragEnter={(e)=>this.onDragEnter(e,colID)}
            //   onDrop={(e)=>this.OnDrop(e,colID)}
            // >
            //     {/* rendering task for each column */}
            // <TaskCard 
            //     colId={colID}
            //     tasks={tasks}
            //     title={(colId,value)=> handleTitle (colId,value)}
            //     edit={(id)=>handleEdit(id,colID)}
            //     deleteCol={()=>deleteColumn(colID)}
            //     taskDelete={(taskID)=>deleteTaskHandle(taskID,colID)}
            // />
            // </div>
            <DragDropContext onDragEnd={this.onDragEnd} onDragStart={this.onDragStart}>
               <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {
                (provided) => (
                  <div  
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  index={this.props.index}
                  >
                    <TaskCard
                    colId={colID}
                    tasks={tasks}
                    title={(colId,value)=> handleTitle (colId,value)}
                    edit={(id)=>handleEdit(id,colID)}
                    deleteCol={()=>deleteColumn(colID)}
                    taskDelete={(taskID)=>deleteTaskHandle(taskID,colID)}
                    />
                    {provided.placeholder}
                  </div>
                )
            }
              </Droppable>
            </DragDropContext>
        )
    }
}

export default Columns