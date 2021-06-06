import types from './types'

const INITIAL_STATE = {
    list: [],
    defaultSeats: []
}

const seatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_SEATS:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.ADD_DEFAULT_SEATS:
            return {
                ...state, defaultSeats: [...state.defaultSeats, action.item]
            }
        case types.REMOVE_DEFAULT_SEATS:
            return {
                ...state, defaultSeats: state.defaultSeats.filter((item) => item.id !== action.item.id)
            }
        default:
            return state
    }
}

export default seatsReducer