import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore';

export default class Summary extends Component {

    constructor (props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            sum: SummaryStore.getSummary()
        };
    }

    render () {

        return (
            <div>Total Count: {this.state.sum}</div>
        )

    }

    componentDidMount () {

        SummaryStore.addChangeListener( this.onUpdate );

    }

    componentWillUnmount () {

        SummaryStore.removeChangeListener( this.onUpdate );

    }

    onUpdate () {

        this.setState({
            sum: SummaryStore.getSummary()
        });

    }

}
