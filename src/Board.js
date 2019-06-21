import React, { Component } from 'react';
import Square from './Square'
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaces: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            treasure: Math.floor(Math.random() * 8),
            guesses: 5,
        }
    }

    useGuess = () => {
        let guesses = this.state.guesses
        this.setState({guesses: guesses - 1})
        if(this.state.guesses  <= 1){
            alert("Ran out of turns!")
            window.location.reload()
        }
    }

    onClickReload = () => {
        window.location.reload()
    }

    render () {

        return (
            <div>
                <h1 className = 'title'>Treasure Hunt</h1>
                <div className = 'board' onClick={this.useGuess}>
                {this.state.spaces.map((value, index) =>
                    <Square index={index} treasure={this.state.treasure}/>
                )}
                </div>
                <br></br>
                <div className = 'turns'>
                    Remaining Energy: {this.state.guesses} guesses
                </div>
                <div>
                <br></br>
                    <button className = 'button' onClick= {this.onClickReload}>
                    New Game
                    </button>
                </div>
            </div>
        )
    }
}

export default Board;
