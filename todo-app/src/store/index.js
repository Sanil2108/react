import users from './users/reducers';
import { createStore } from 'redux';

function rootReducer(state = {}, action) {
    return {
        users,
    }
}

// TODO: Right now working with a single reducer, will switch to multiple reducers.
export default createStore(users);