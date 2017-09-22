import React, { Component } from 'react';

export default class Counter extends Component {

    constructor (props) {
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue || 0
        };

    }

    render () {

        const { caption } = this.props;
        const buttonStyle = {
            fontSize: 16,
            margin: '10px'
        };

        console.log('enter render: ' + caption);

        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )

    }

    onClickIncrementButton () {
        this.updateCount(true);
    }

    onClickDecrementButton () {
        this.updateCount(false);
    }

    updateCount (isIncremet) {

        const previousValue = this.state.count;
        const newValue = isIncremet ? previousValue + 1 : previousValue - 1;
        this.setState({
            count: newValue
        });
        this.props.onUpdate(newValue, previousValue);

    }

};

/*
Counter.propType = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};
*/
