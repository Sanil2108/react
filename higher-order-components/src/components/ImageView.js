import React, { Component } from 'react'
import withLoader from './LoaderHOC'

class ImageView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                This is the image view, {this.props.loadedContent}, {this.props.someOtherProp}
            </div>
        )
    }
}

export default withLoader(ImageView);
