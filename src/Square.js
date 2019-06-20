import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props)
        this.state = {
            square: "",
        }
    }

    changeColor = () => {
        this.setState({square: 'hit'})
        console.log("i am working");
    }

    render () {
        return (
            <div id={this.state.square} onClick={this.changeColor}>

            </div>
        )
    }
}

export default Square;
