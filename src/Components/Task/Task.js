import React, { Component } from "react";
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmBox from "../UI/ConfirmBox/ConfirmBox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Tooltip from "@material-ui/core/Tooltip";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import DoneIcon from "@material-ui/icons/Done";
import { FONTSIZE_SMALL } from "../../Constants/Constants";
import style from "./Task.module.css";
import {connect} from 'react-redux'
import * as actions from '../../store/actions/actions'
/** class Task
 *  which displsy each task for each column
 */
class Task extends Component {
  state = {
    showModal: false,
  };

  /** function to toggle confirm box  */
  handleTask = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  handlerDelete = () => {
    this.setState({ showModal: !this.state.showModal });
    this.props.deleteTaskHandle(this.props.taskId,this.props.colId,this.props.columns);
  };
  render() {
    const { title, estimate, status, priority, taskId, colId } = this.props;
    return (
        
             <React.Fragment>
             {this.state.showModal ? (
               <ConfirmBox
                 show={this.state.showModal}
                 deleteHandler={this.handlerDelete}
                 cancel={this.handleTask}
               />
             ) : null}
             <div className={style.container}>
                 <div className={style.task}>
                   {estimate && (
                     <Tooltip title={`Estimate ${estimate}`}>
                       <AccessTimeIcon fontSize={FONTSIZE_SMALL} />
                     </Tooltip>
                   )}
     
                   {priority && (
                     <Tooltip title={`Priority ${priority}`}>
                       <PriorityHighIcon fontSize={FONTSIZE_SMALL} />
                     </Tooltip>
                   )}
     
                   {status && (
                     <Tooltip title={`Status ${status}`}>
                       <DoneIcon fontSize={FONTSIZE_SMALL} />
                     </Tooltip>
                   )}
     
                   <Tooltip title="Edit">
                     <EditIcon onClick={()=>this.props.handleEdit(taskId,colId)} fontSize={FONTSIZE_SMALL} />
                   </Tooltip>
                   <Tooltip title="Delete">
                     <DeleteIcon
                       onClick={this.handleTask}
                       fontSize={FONTSIZE_SMALL}
                     />
                   </Tooltip>
                   <p>{title}</p>
                 </div>
               </div>
           </React.Fragment>
         
    );
  }
}

const mapStateToProps = state =>{
  return{
    columns: state.lists
  }
}


const mapDispatchToProps = dispatch =>{
  return{
    deleteTaskHandle: (taskId,colId,columns) => dispatch(actions.deleteTask({taskId: taskId, colId: colId, columns: columns})),
    handleEdit: (taskId,colId) =>  dispatch(actions.handleEdit({taskId: taskId, colId: colId})),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Task);
