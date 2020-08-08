import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NavigationDrawer extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div>
                Header: {this.props.header}
                { this.props.children }
                Footer: {this.props.footer}
            </div>
        )
    }
}

export default NavigationDrawer
