import React, { Component, PropTypes } from 'react'

class Summary extends Component {

    render () {

        return (
            <div>Total Count: { this.props.sum }</div>
        )

    }

}

class SummaryContainer extends Component {

    constructor () {
        super(...arguments);

        this.onUpdate = this.onUpdate.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.store = this.context.store;

        this.state = this.getOwnState();
    }

    render () {

        return (
            <Summary sum={this.state.sum} />
        )

    }

    componentDidMount () {

        this.store.subscribe(this.onUpdate);

    }

    shouldComponentUpdate(nextProps, nextState) {

        return nextState.sum !== this.state.sum;

    }

    componentWillUnmount () {

        this.store.unsubscribe(this.onUpdate);

    }

    onUpdate () {

        this.setState(this.getOwnState());

    }

    getOwnState () {
        const state = this.store.getState();
        let sum = 0;

        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }

        return { sum: sum };
    }

}

SummaryContainer.contextTypes = {
    store: PropTypes.object
};

export default SummaryContainer;
