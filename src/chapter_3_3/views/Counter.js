import React, { Component } from 'react'
import * as Actions from '../Actions'
import store from '../Store'

 class Counter extends Component {

    render () {

        const { caption, onIncrement, onDecrement, value } = this.props;
        const buttonStyle = {
            fontSize: 16,
            margin: '10px'
        };

        return (
            <div>
                <button style={buttonStyle} onClick={onIncrement}>+</button>
                <button style={buttonStyle} onClick={onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )

    }

};

class CounterContainer extends Component {

    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    render () {
        return (
            <Counter
                caption={this.props.caption}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
                value={this.state.value}
            />
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

}

export default CounterContainer;
