import actions from './actions'

const getDefaultList = (seats, numberOfSeats, nextTo, dispatch) => {
    if (nextTo) {
        const list = findSeats(seats, numberOfSeats)
        list.forEach(seat => dispatch(actions.addDefault(seat)))
    }
    else {
        for(const seat of seats) {
            if (!seat.reserved) {
                dispatch(actions.addDefault(seat))
                if (--numberOfSeats <= 0) {
                    break;
                }
            }
        }
    }
}

const findSeats = (seats, numberOfSeats) => {
    let list = []
    let nearNumber = 0;
    for (const seat of seats) {
        if (seat.reserved) {
            nearNumber = 0
            list = []
            continue
        }
        if (nearNumber === 0) {
            nearNumber = 1
            list = [seat]
            continue
        }

        if (seat.cords.x === list[list.length - 1].cords.x) {
            if (seat.cords.y === list[list.length - 1].cords.y + 1) {
                nearNumber++
                list.push(seat)
            }
            else {
                nearNumber = 1
                list = [seat]
            }
        }
        else {
            nearNumber = 1
            list = [seat]
        }

        if (list.length === numberOfSeats) {
            break
        }
    }
    if (list.length !== numberOfSeats) {
        list = []
    }
    return list
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