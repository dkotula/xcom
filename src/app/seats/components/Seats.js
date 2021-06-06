import React from 'react'
import './seats.css';

const Seats = (props) => {
    const handleSubmit = (event) => {
        console.log(event)

        event.preventDefault()
    }

    return (
        <div>
            <div className="seats">
                {
                    props.seats.list.map(seat =>
                        <div key={seat.id} className="seat" style={{
                            gridColumnStart: seat.cords.y + 1,
                            gridColumnEnd: seat.cords.y + 2,
                            gridRowStart: seat.cords.x + 1,
                            gridRowEnd: seat.cords.x + 2,
                            backgroundColor: seat.reserved ? "#302d2d" : ""
                        }}>{seat.id}</div>
                    )
                }
            </div>
            <div className="menu">
                <div>
                    <div/>
                    Miejsca dostępne
                </div>
                <div>
                    <div style={{backgroundColor: "#302d2d"}}/>
                    Miejsca zarezerwowane
                </div>
                <div>
                    <div style={{backgroundColor: "#d96028"}}/>
                    Twój wybór
                </div>
                <form className="reservation" onSubmit={handleSubmit}>
                    <input type="submit" value="Rezerwuj"/>
                </form>
            </div>
        </div>
    )
}

export default Seats