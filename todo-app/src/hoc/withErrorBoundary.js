import React from 'react';
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function withErrorBoundary(WrappedComponent) {
    return class extends React.Component {
        render() {
            return <ErrorBoundary><WrappedComponent></WrappedComponent></ErrorBoundary>
        }
    }
}