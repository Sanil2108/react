import React from 'react';

export class RefForwardExampleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>This is from RefForwardExampleButton <button ref={this.props.innerRef}>Hello</button></div>
    }
}

export default React.forwardRef((props, ref) => {
    return <RefForwardExampleButton {...props} innerRef={ref}></RefForwardExampleButton>
})
