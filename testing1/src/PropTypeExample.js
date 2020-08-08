import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PropTypeExample extends Component {
    static propTypes = {
        name: PropTypes.isRequired,
    }

    static defaultProps = {
        name: 'Sanil',
    }

    render() {
        return (
            <div>
                Hello, the name is {this.props.name}
            </div>
        )
    }
}

export default PropTypeExample
