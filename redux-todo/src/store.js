import { createStore } from 'redux';

const TABS = {
    ALL: 'all',
    COMPLETED: 'complete',
    INCOMPLETE: 'incomplete',
}
let globalId = 0;

const initialState = { currentTab: TABS.ALL, todos: [] };
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'switchToComplete':
            return {
                ...state,
                currentTab: TABS.COMPLETED
            };
        case 'switchToAll':
            return {
                ...state,
                currentTab: TABS.ALL
            };
        case 'switchToIncomplete':
            return {
                ...state,
                currentTab: TABS.INCOMPLETE
            };
        case 'add_todo':
            const todo = {
                id: globalId++,
                title: action.todoTitle,
                state: TABS.INCOMPLETE
            };
            return {
                ...state,
                todos: [...state.todos, todo],
            };
        case 'complete_todo':
            const todoIndex = state.todos.findIndex(todo => action.todoId === todo.id);
            const todos = [...state.todos];
            todos[todoIndex].state = TABS.COMPLETED;
            return {
                ...state,
                todos,
            };
        default:
            return state
    }
}

const store = createStore(rootReducer);

export default store;
