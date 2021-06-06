import types from './types'

const INITIAL_STATE = {
    list: [
    ]
}

const seatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_SEATS:
            return {
                ...state, list: [...state.list, action.item]
            }
        default:
            return state
    }
}

export default seatsReducer