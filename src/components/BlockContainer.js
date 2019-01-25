import React, { Component } from 'react';
import Block from './Block';

class BlockContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "isShown1": false,
            "isShown2": false,
            "isShown3": false,
        };
        this.handleOverflow = this.handleOverflow.bind(this);
    }

    handleOverflow(isShownNum) {
        let isShown = !this.state[isShownNum];
        let shownState = {};
        shownState[isShownNum] = isShown;

        console.log(shownState);
        
        
        
        this.setState(shownState);
    }

    render() {
        return (
            <div id="container">
                <Block num={1} isShown={this.state.isShown1} onClick={this.handleOverflow} />
                <Block num={2} isShown={this.state.isShown2} onClick={this.handleOverflow} />
                <Block num={3} isShown={this.state.isShown3} onClick={this.handleOverflow} />
            </div>
        );
    }
}

export default BlockContainer;