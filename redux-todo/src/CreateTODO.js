import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTODO extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ''
        }
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.todoTitle}
                    onChange={e => this.setState({ todoTitle: e.target.value })}
                ></input>
                <button
                    onClick={this.props.createTodo.bind(null, this.state.todoTitle)}
                >
                    Add
                </button>
            </div>
        )
    }
}

export default connect(
    null,
    dispatch => {
        return {
            createTodo: (title) => dispatch({ type: 'add_todo', todoTitle: title })
        }
    }
)(CreateTODO)
