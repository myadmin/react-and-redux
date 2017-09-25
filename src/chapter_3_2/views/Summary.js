import React, { Component } from 'react'
import store from '../Store'

export default class Summary extends Component {

    constructor (props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = this.getOwnState();
    }

    render () {

        return (
            <div>Total Count: {this.state.sum}</div>
        )

    }

    componentDidMount () {

        store.subscribe(this.onUpdate);

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
