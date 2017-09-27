import React, { Component, PropTypes } from 'react'
import * as Actions from '../Actions'

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

    constructor () {
        super(...arguments);

        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.store = this.context.store;

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

        this.store.subscribe(this.onChange);

    }

    componentWillUnmount () {

        this.store.unsubscribe(this.onChange);

    }

    onChange () {

        this.setState(this.getOwnState());
    }

    onIncrement () {

        this.store.dispatch(Actions.increment(this.props.caption));

    }

    onDecrement () {

        this.store.dispatch(Actions.decrement(this.props.caption));

    }

    getOwnState () {
        return {
            value: this.store.getState()[this.props.caption]
        }
    }

}

CounterContainer.contextTypes = {
    store: PropTypes.object
};

export default CounterContainer;
