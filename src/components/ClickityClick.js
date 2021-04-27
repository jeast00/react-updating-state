// Code ClickityClick Component Here

import React, { Component } from 'react'

export default class ClickityClick extends Component {
    constructor() {
        super();

        // define initial state
        this.state = {
            hasBeenClicked: false
        };
    }

    //arrow function for event handling
    handleClick = () => {
        // update the state here
        this.setState({
            hasBeenClicked: true
        },
        () => console.log(this.state.hasBeenClicked)); //pass callback arrow function to enure setState method passes the change from the handleClick arrow function
    }



    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}
