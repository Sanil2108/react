import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            return <>There was some error</>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundary
