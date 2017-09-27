import React, { Component } from 'react'
import { connect } from 'react-redux'

class Summary extends Component {

    render () {

        return (
            <div>Total Count: { this.props.value }</div>
        )

    }

}

function mapStateToProps (state) {
    let sum = 0;

    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key];
        }
    }

    return {
        value: sum
    }
}

export default connect(mapStateToProps)(Summary);
