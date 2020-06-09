import React, { Component } from 'react'
import Header from '../Header/Header'
import Board from '../../../Containers/Board/Board'
/**
 * class Layout to render 
 *  @Header Component 
 *  @Board Component
 */
class Layout extends Component {
    render(){
        return(
            <div>
                <Header/>
                <Board/>
            </div>
        )
    }
}
export default Layout