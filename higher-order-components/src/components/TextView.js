import React, { Component } from 'react'
import withLoader from './LoaderHOC'

class TextView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                This is the text view, {this.props.loadedContent}
            </div>
        )
    }
}

export default withLoader(TextView);
