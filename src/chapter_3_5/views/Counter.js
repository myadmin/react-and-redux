import React, { Component } from 'react'
import { connect } from 'react-redux'
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

function mapStateToProps (state, props) {
    return {
        value: state[props.caption]
    };
}

function mapDispatchToProps (dispatch, props) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(props.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(props.caption));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
