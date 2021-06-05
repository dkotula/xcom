import React from 'react'
import './reservation.css';

const Reservation = () => {
    const handleSubmit = (event) => {
        const numberOfSeats = document.querySelector("input").value
        const nextTo = document.querySelectorAll("input")[1].checked
        let isCorrect = true;

        if (!numberOfSeats || numberOfSeats <= 0) {
            isCorrect = false
            alert("Wybierz liczbę miejsc")
        }

        if (isCorrect) {
            alert("Liczba miejsc: " + numberOfSeats)
        }

        event.preventDefault()
    }

    return (
        <form className="reservation" onSubmit={handleSubmit}>
            <label>
                Liczba miejsc:
                <input type="number" min="0" name="seatsNumber" />
            </label>
            <label>
                <input type="checkbox" name="nextTo" />
                Czy miejsca mają być obok siebie?
            </label>
            <input type="submit" value="Wybierz miejsca"/>
        </form>
    )
}

export default Reservation