import React from 'react';
import style from './Task.module.css'
import {Draggable} from 'react-beautiful-dnd';

export default class Task extends React.Component {
  render() {
    return(
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
       {(provided) => (
        <div
          className={style.Container}
          {...provided.draggableProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >{this.props.task.content}
        </div>
      )}
    </Draggable>
    )
  }
}