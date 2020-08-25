import React, { Component } from 'react'
import DraggableEmailListItem from './DraggableEmailListItem';
import ErrorBoundary from './ErrorBoundary';

export class EmailList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailObjects: props.emailObjects,
        }
    }

    render() {
        return (
            <div>
                { this.state.emailObjects.map(emailObject =>
                    <ErrorBoundary>
                        <DraggableEmailListItem emailData={emailObject}></DraggableEmailListItem>
                    </ErrorBoundary>
                ) }
            </div>
        )
    }
}

export default EmailList
