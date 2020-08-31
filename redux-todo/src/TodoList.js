import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo';

class TodoList extends Component {

    render() {
        return (
            <div>
                {/* { this.props.todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>) } */}
                { this.props.todos.map((todo) => <Todo key={todo.id} todo={{...todo}}></Todo>) }
            </div>
        )
    }
}

function getTodos(allTodos, currentTab) {
    switch(currentTab) {
        case 'all':
            return allTodos;
        case 'complete':
            return allTodos.filter(todo => todo.state === 'complete');
        case 'incomplete':
            return allTodos.filter(todo => todo.state === 'incomplete');
        default:
            return allTodos;
    }
}

export default connect((storeState) => {
    // return { todos: storeState.todos };
    return { todos: getTodos(storeState.todos, storeState.currentTab) };
})(TodoList);
