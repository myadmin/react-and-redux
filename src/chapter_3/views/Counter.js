import React, { Component } from 'react';
import CounterStore from '../stores/CounterStore';
import * as Actions from '../Actions';

export default class Counter extends Component {

    constructor (props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValue()[props.caption]
        };
    }

    render () {

        const { caption } = this.props;
        const buttonStyle = {
            fontSize: 16,
            margin: '10px'
        };

        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )

    }

    componentDidMount () {

        CounterStore.addChangeListener( this.onChange );

    }

    componentWillUnmount () {

        CounterStore.removeChangeListener( this.onChange );

    }

    onChange () {
        const newCount = CounterStore.getCounterValue()[this.props.caption];

        this.setState({
            count: newCount
        });
    }

    onClickIncrementButton () {

        Actions.increment( this.props.caption );

    }

    onClickDecrementButton () {

        Actions.decrement( this.props.caption );

    }

};
