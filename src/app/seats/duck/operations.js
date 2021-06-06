import actions from './actions'

const getDefaultList = (seats, numberOfSeats, nextTo) => {
    let list = []
    // TODO
    return list
}

const fetchSeats = async () => {
    const response = await fetch('http://localhost:3000/seats', { method: 'GET' })
    return await response.json()
}

export const getAllSeats = (setDefaultSeats, numberOfSeats, nextTo) =>
    async (dispatch) => {
        const seats = await fetchSeats()
        const list = getDefaultList(seats, numberOfSeats, nextTo)
        setDefaultSeats(list)
        seats.map(seat => dispatch(actions.add(seat)))
    }