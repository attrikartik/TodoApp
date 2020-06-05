import React, { Component } from 'react'
import Card from '../Card/Card'
import style from './Board.module.css'
class Board extends Component { 
    render () {
        return (
            <div  className={style.Conatiner}>
               <div className={style.Board}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
               </div>                
            </div>
        )
    }
}
export default Board