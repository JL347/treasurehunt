import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    }
    render () {

        return (
            <div className = 'board'>
            {this.state.spaces.map((value, index) =>
                <Square index={index}/>
            )}
            </div>
        )
    }
}

export default Board;
