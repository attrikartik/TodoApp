import React, { Component } from 'react';
import './App.css';
import Todo from './Components/UI/Layout/Layout'
import ReactNotification from 'react-notifications-component'
import initialData from './Data'
import Column from './Column'
import {DragDropContext} from 'react-beautiful-dnd'
// function App() {
//   return (
//     <div className="App">
//       <ReactNotification />
//       <Todo/>
//     </div>
//   );
// }


class App extends Component {
  state = initialData
  OnDragStart= (e) => {
    console.log(e)
  }
  onDragEnd = result => {
    console.log(result)
    // const {destination, source, draggableId } = result;
  
    // if(!destination) {
    //   return;
    // }
  
    // if (destination.droppableId === source.droppableId && destination.index === source.index) {
    //   return;
    // }
  
    // const column = this.state.columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    // newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);
  
    // const newColumn = {
    //   ...column,
    //   taskIds: newTaskIds,
    // };
  
    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newColumn.id]: newColumn,
    //   },
    // };
  
    // this.setState(newState);
  };
  render() {
    return (
      <DragDropContext>
        <div className="App" onDragEnd={this.onDragEnd}>
          <ReactNotification />
          <Todo/>
        </div>
      </DragDropContext>
    )
  }
}
export default App;
