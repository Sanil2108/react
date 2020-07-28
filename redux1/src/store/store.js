import { configureStore, createSlice, createSelector } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

export const selectCount = createSelector(state => state.counter.value);

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
});
