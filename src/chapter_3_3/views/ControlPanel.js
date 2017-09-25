import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends Component {

    render () {

        const style = {
            padding: '10px'
        }

        return (
            <div style={style}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <Summary />
            </div>
        )

    }

};
