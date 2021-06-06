import { combineReducers } from 'redux'
import seatsReducer from "./app/seats/duck/reducers";

const rootReducer = combineReducers({
    seats: seatsReducer
})

export default rootReducer