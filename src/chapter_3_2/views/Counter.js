import React, { Component } from 'react'
import * as Actions from '../Actions'
import store from '../Store'

export default class Counter extends Component {

    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

        this.state = this.getOwnState();
    }

    render () {

        const value = this.state.value;
        const { caption } = this.props;
        const buttonStyle = {
            fontSize: 16,
            margin: '10px'
        };

        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )

    }

    componentDidMount () {

        store.subscribe(this.onChange);

    }

    componentWillUnmount () {

        store.unsubscribe(this.onChange);

    }

    onChange () {

        this.setState(this.getOwnState());
    }

    onIncrement () {

        store.dispatch(Actions.increment(this.props.caption));

    }

    onDecrement () {

        store.dispatch(Actions.decrement(this.props.caption));

    }

    getOwnState () {
        return {
            value: store.getState()[this.props.caption]
        }
    }

};
