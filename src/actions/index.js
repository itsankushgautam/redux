export const incNumber = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
}

export const insertNumber = (value) => {
    return {
        type: 'INSERT',
        value: parseInt(value)
    }
}