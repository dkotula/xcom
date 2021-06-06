import actions from './actions'

const getDefaultList = (seats, numberOfSeats, nextTo,dispatch) => {
    for(const seat of seats) {
        if (!seat.reserved) {
            dispatch(actions.addDefault(seat))
            if (--numberOfSeats <= 0) {
                break;
            }
        }
    }
}

const fetchSeats = async () => {
    const response = await fetch('http://localhost:3000/seats', { method: 'GET' })
    return await response.json()
}

export const getAllSeats = (numberOfSeats, nextTo) =>
    async (dispatch) => {
        const seats = await fetchSeats()
        getDefaultList(seats, numberOfSeats, nextTo, dispatch)
        seats.map(seat => dispatch(actions.add(seat)))
    }