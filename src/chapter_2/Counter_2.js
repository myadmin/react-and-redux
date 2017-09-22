import React, { Component } from 'react';

export default class Counter extends Component {
    /*
    * 装载过程 start
    */
    constructor (props) {
        super(props);

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue || 0
        };

        //console.log('enter constructor: ' + this.props.caption);
    }

    componentWillMount () {
        //console.log('enter componentWillMount: ' + this.props.caption);
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

    componentDidMount () {
        //console.log('enter componentDidMount: ' + this.props.caption);
    }
    /*
    * 装载过程 end
    */

   /*
    * 更新过程 start
    */
    componentWillReceiveProps (nextProps) {
        console.log('enter componentWillReceiveProps: ' + this.props.caption);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentWillUpdate () {
        console.log('enter componentWillUpdate: ' + this.state.count);
    }

    componentDidUpdate () {
        console.log('enter componentDidUpdate: ' + this.state.count);
    }

    onClickIncrementButton () {

        this.setState({
            count: this.state.count + 1
        });

    }

    onClickDecrementButton () {

        this.setState({
            count: this.state.count - 1
        });

    }

};
