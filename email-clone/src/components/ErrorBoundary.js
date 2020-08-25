import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error) {
        console.log("Something")
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <span>Something went wrong</span>
        }
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

export default ErrorBoundary
