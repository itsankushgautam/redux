const initialState = 0;


export const updateNumber = (state = initialState, action) => {
if (action.type === "INCREMENT") {
    return state + 1;
} else if (action.type === "DECREMENT") {
    return state - 1;
} else if (action.type === "INSERT") {
    return state = action.value;
} else {
    return state;
}
}

export default updateNumber;