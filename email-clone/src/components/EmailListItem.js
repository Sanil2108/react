import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class EmailListItem extends Component {
    static propTypes = {
        emailData: PropTypes.shape({
            sender: PropTypes.string,
            title: PropTypes.string,
            time: PropTypes.string,
        }),
        enableDragging: PropTypes.func,
        disableDragging: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            starred: this.props.starred,
        };
    }

    render() {
        return (
            <div style={{ padding: '10px', background: 'rgba(100, 100, 100, 0.5)' }}>
                <button onMouseDown={this.props.enableDragging} onMouseUp={this.props.disableDragging}>Hold to drag</button>
                <div
                    onClick={ this.setState.bind(this, { starred: !this.state.starred }, () => {}) }
                    style={{
                        background: (this.state.starred) ? 'yellow' : 'gray'
                    }}
                >Star</div>
                <span>{ this.props.emailData.sender.split(' ')[0] }</span>
                <span>{ this.props.emailData.title }</span>
                <span>{ this.props.emailData.time }</span>
            </div>
        )
    }
}

export default EmailListItem
