import React from 'react'
import './seats.css';

const Seats = (props) => {
    return (
        <div className="seats">
            {
                props.seats.list.map(seat =>
                    <div key={seat.id} className="seat">{seat.id}</div>
                )
            }
        </div>
    )
}

export default Seats