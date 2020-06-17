import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import TaskForm from "../TaskForm/TaskForm";
import ConfirmBox from "../UI/ConfirmBox/ConfirmBox";
import Task from "../Task/Task";
import TextField from "@material-ui/core/TextField";
import style from "./Card.module.css";
import { Draggable, Droppable } from "react-beautiful-dnd";

/** component TaskCard
 *  which renders each TaskCard to users
 */
const TaskCard = (props) => {
  /** setting initial state */
  const [showModal, setShowModal] = useState(false);
  const [showForm, setForm] = useState(false);

  const [title, setTitle] = useState();

  /** getting props */
  const { colId, tasks } = props;

  /** function to alert user and then delete column */
  const handler = () => {
    setShowModal(true);
  };
  /**toggle side drawer and call delete function*/
  const handlerDelete = () => {
    setShowModal(false);
    setForm(false);
    props.deleteCol();
  };

  /**form submit */
  const submitHandler = (e) => {
    e.preventDefault();
    setForm(true);
  };
  const dragStart = () => {
    console.log('start........')
  }
  const dragEnd = () => {
    console.log('end....')
  }
  return (
    <Draggable draggableId={props.colId.toString()} onDragStart={dragStart} onDrageEnd={dragEnd}>
      {
        (provided) => (
          <div 
           innerRef={provided.innerRef}
           {...provided.droppableProps}>
          <Card className={style.root}>
          {showModal ? (
            <ConfirmBox
              show={showModal}
              deleteHandler={handlerDelete}
              cancel={handler}
            />
          ) : null}
          <CardHeader
            action={
              <IconButton aria-label="settings" onClick={handler}>
                <DeleteIcon />
              </IconButton>
            }
            title={title}
          />
          {!showForm ? (
            <form onSubmit={submitHandler}>
              <TextField
                id={Math.random().toString()}
                label="Add Title"
                color="secondary"
                onChange={(e) => setTitle(e.target.value)}
              />
            </form>
          ) : null}
          <CardContent>
            <TaskForm
              id={props.colId}
              titleHandle={(value) => props.title(colId, value)}
            />
            {
              tasks.length > 0 ? tasks.map((t, index) => (
                   <Droppable droppableId={index.toString()}>
                     {
                       (provided) =>
                       <div
                       innerRef={provided.innerRef}
                       {...provided.droppableProps}>
                        <Task
                          id={t.id}
                          key={index}
                          index={index}
                          priority={t.priority}
                          title={t.title}
                          editHandle={() => props.edit(t.id)}
                          deletTask={() => props.taskDelete(t.id)}
                        />      
                         {provided.placeholder}
                      </div> 
                    }
                   </Droppable>             
                  ))
              : null
            }
          </CardContent>
        </Card>
        </div>
      )
    }
  </Draggable>    
  )
}
export default TaskCard