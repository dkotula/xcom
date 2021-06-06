import React from 'react'
import './seats.css';

const Seats = (props) => {
    const handleSubmit = (event) => {
        if (props.seats.defaultSeats.length !== props.numberOfSeats) {
            alert("Wybierz poprawna ilość miejsc")
            event.preventDefault()
            return;
        }
        sort()
        document.querySelector(".seats").style.display = "none"
        document.querySelector(".menu").style.display = "none"
        document.querySelector(".success").style.display = "block"

        event.preventDefault()
    }

    const sort = async () => {
        let list = []
        for (const seat of props.seats.defaultSeats) {
            list.push(seat)
            await props.removeDefault(seat)
        }
        list.sort(compareFunction)
        list.forEach(seat => props.addDefault(seat))
    }

    const compareFunction = (seat1, seat2) => {
        if (seat1.cords.x === seat2.cords.x) {
            if (seat1.cords.y > seat2.cords.y) {
                return 1
            }
            else {
                return -1
            }
        }
        if (seat1.cords.x > seat2.cords.x) {
            return 1
        }
        else {
            return -1
        }
    }

    const seatClick = (event) => {
        const id = event.target.id;
        const seat = props.seats.list.find(element => element.id === id);
        if (seat.reserved) {
            return
        }
        if (props.seats.defaultSeats.find(element => element.id === id)) {
            props.removeDefault(seat)
            event.target.style.backgroundColor = "white"
        }
        else {
            props.addDefault(seat);
            event.target.style.backgroundColor = "#d96028"
        }
    }

    return (
        <div className={"seatsPage"}>
            <div className="seats">
                {
                    props.seats.list.map(seat =>
                        <div key={seat.id} id={seat.id} className="seat" style={{
                            gridColumnStart: seat.cords.y + 1,
                            gridColumnEnd: seat.cords.y + 2,
                            gridRowStart: seat.cords.x + 1,
                            gridRowEnd: seat.cords.x + 2,
                            cursor: seat.reserved ? "auto" : "pointer",
                            backgroundColor: seat.reserved ? "#302d2d" : props.seats.defaultSeats.find(element => element.id === seat.id) ? "#d96028" : "#FFFFFF"
                        }}
                             onClick={seatClick}
                        />
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
            <div className="success">
                <h1>Twoja rezerwacja przebiegła pomyślnie!</h1>
                <p>Wybrałeś miejsca:</p>
                {
                    props.seats.defaultSeats.map(seat =>
                        <div key={seat.id}>
                            <p>- rząd {seat.cords.x + 1}, miejsce {seat.cords.y + 1} ({seat.id})</p>
                        </div>
                    )
                }
                <h3>Dziękujemy! W razie problemów prosimy o kontakt z działem administracji.</h3>
            </div>
        </div>
    )
}

export default Seats