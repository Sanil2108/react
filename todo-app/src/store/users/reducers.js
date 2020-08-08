import * as constants from './constants';

const initialState = {
    user: null,
};

export default function users(state = initialState, action) {
    switch(action.type) {
        case constants.SET_USER:
            return Object.assign({}, state, { user: action.user });
        case constants.RESET_USER:
            return Object.assign({}, state, { user: null });
        default:
            return state;
    }
}