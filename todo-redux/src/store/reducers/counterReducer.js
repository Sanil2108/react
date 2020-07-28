const initialState = { count: 0 };

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD':
            return { count: state.count + action.value }
        default:
            return state;
    }
}