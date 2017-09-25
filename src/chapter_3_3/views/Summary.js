import React, { Component } from 'react'
import store from '../Store'

class Summary extends Component {

    render () {

        return (
            <div>Total Count: { this.props.sum }</div>
        )

    }

}

class SummaryContainer extends Component {

    constructor (props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    render () {

        return (
            <Summary sum={this.state.sum} />
        )

    }

    componentDidMount () {

        store.subscribe(this.onUpdate);

    }

    shouldComponentUpdate(nextProps, nextState) {

        return nextState.sum !== this.state.sum;
        
    }

    componentWillUnmount () {

        store.unsubscribe(this.onUpdate);

    }

    onUpdate () {

        this.setState(this.getOwnState());

    }

    getOwnState () {
        const state = store.getState();
        let sum = 0;

        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return { sum: sum };
    }

}

export default SummaryContainer;
