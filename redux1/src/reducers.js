export default (state, action) => {
    if (action.type === 'CHANGE') {
        return { name: action.payload }
    }
    else {
        return { name: 'Sanil' };
    }
}