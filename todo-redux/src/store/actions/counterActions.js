export const INCREMENT = () => {
    return {
        type: 'ADD',
        value: 1
    };
}

export const DECREMENT = () => {
    return {
        type: 'ADD',
        value: -1
    };
}

export const ADD = (value) => {
    return {
        type: 'ADD',
        value
    };
}
