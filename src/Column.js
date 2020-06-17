import React from 'react';
import Task from './Task'
import style from './column.module.css'
import {Droppable} from 'react-beautiful-dnd';



export default class Column extends React.Component {
  render() {
    return (
      <div className={style.Container}>
        <p className={style.Title}>{this.props.column.title}</p>
        <Droppable droppableId={this.props.column.id}>
          {(provided,snapshot) => 
            <div
              className={style.TaskList}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          }
        </Droppable>
      </div>
    );
  }
}
