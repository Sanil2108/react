import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Todo extends Component {
    render() {
        return (
            <div onClick={this.props.setComplete.bind(null, this.props.todo.id)}>
                <span style={{ marginRight: '40px' }}>{ this.props.todo.id }</span>
                <span style={{ marginRight: '40px' }}>{ this.props.todo.title }</span>
                <span style={{ marginRight: '40px' }}>{ this.props.todo.state }</span>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => {
        return {
            setComplete: todoId => dispatch({
                type: 'complete_todo',
                todoId,
            })
        }
    }
)(Todo)
