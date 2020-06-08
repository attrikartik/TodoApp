import React, { Component } from 'react'
import style from './Board.module.css'
import Columns from '../Columns/Columns'

var COL_ID = 3
var TASK_ID = 2
class Board extends Component {
    state={
        columns:[
            {
                colID: 1,
                tasks: [
                    {
                        id: 1,
                        title: 'task 1'
                    },

                    {
                        id: 2,
                        title: 'task 2'
                    }
                ]
            },

            {
                colID: 2,
                tasks: [
                    {
                        id: 1,
                        title: 'task 3'
                    },

                    {
                        id: 2,
                        title: 'task 4'
                    }
                ]
            },

            {
                colID: 3,
                tasks: [
                    {
                        id: 1,
                        title: 'task 4'
                    },

                    {
                        id: 2,
                        title: 'task 5'
                    }
                ]
            }
        ]
    } 
    
    titleHandler = (colId,value) => {
        var columns = [...this.state.columns]
        var column = columns.filter(column=> column.colID === colId)
        const newTask={
          id: ++TASK_ID,
          title: value
        }
        column[0].tasks.push(newTask)

        this.setState({ columns: columns})
        
    }
    addList = () => {
        ++COL_ID
        const newColumn = {
           colID: COL_ID,
           tasks:[]
        }
        const columns = [...this.state.columns]
        columns.push(newColumn)
        this.setState({columns: columns})
    }
    render () {
        const columns = [...this.state.columns]
        return (
            <div  className={style.Container}>
               <div className={style.Board}>
                {
                    columns.length > 0 ? columns.map(column => (
                      <Columns key={column.colID} {...column} handleTitle={(colId,value) => this.titleHandler(colId,value)}/>
                    )): null
                }
               </div>                
               <button onClick={this.addList}>Add New List</button>
            </div>
        )
    }
}
export default Board