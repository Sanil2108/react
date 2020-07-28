const initialState = {
    lists: [],
};

const listReducer = (state = initialState, payload) => {
    console.log(payload);
    switch(payload.type) {
        case 'ADD_TODO':
            const newLists = [...state.lists, { name: payload.name }]
            return Object.assign({}, state, { lists: newLists });
        default:
            return state;
    }
}

export default listReducer;