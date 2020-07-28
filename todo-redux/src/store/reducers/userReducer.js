const initialState = {
    
}

const userReducer = (state = initialState, payload) => {
    console.log(payload);
    switch (payload.type) {
        default:
            return state;
    }
}

export default userReducer;
