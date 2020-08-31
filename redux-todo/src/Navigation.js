import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.switchToAll}
                    style={{ color: (this.props.currentTab === 'all') ? 'red' : 'black' }}
                >All</button>
                <button
                    onClick={this.props.switchToCompleted}
                    style={{ color: (this.props.currentTab === 'complete') ? 'red' : 'black' }}
                >Completed</button>
                <button
                    onClick={this.props.switchToIncomplete}
                    style={{ color: (this.props.currentTab === 'incomplete') ? 'red' : 'black' }}
                >Incomplete</button>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => {
        return {
            switchToAll: () => dispatch({ type: 'switchToAll' }),
            switchToCompleted: () => dispatch({ type: 'switchToComplete' }),
            switchToIncomplete: () => dispatch({ type: 'switchToIncomplete' }),
        }
    }
)(Navigation);
