import actions from './actions'

const fetchSeats = async () => {
    const response = await fetch('http://localhost:3000/seats', { method: 'GET' })
    return await response.json()
}

export const getAllSeats = () =>
    async (dispatch) => {
        const seats = await fetchSeats()

        seats.map(seat => dispatch(actions.add(seat)))
    }