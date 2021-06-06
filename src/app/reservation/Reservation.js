import React from 'react'
import './reservation.css';
import Seats from "../seats/components/Seats";
import {connect} from "react-redux";
import {getAllSeats} from "../seats/duck/operations";
import actions from "../seats/duck/actions";

let numberOfSeats = 0;
let nextTo= false;
let defaultList= [];

const Reservation = ({seats, getAllSeats, addDefault, removeDefault}) => {

    const handleSubmit = (event) => {
        numberOfSeats = parseInt(document.querySelector("input").value);
        nextTo = document.querySelectorAll("input")[1].checked;
        let isCorrect = true;

        if (!numberOfSeats || numberOfSeats <= 0) {
            isCorrect = false
            alert("Wybierz liczbę miejsc")
        }

        if (isCorrect) {
            document.querySelector(".reservation").style.display = "none"
            document.querySelector(".seatsPage").style.display = "block"
            getAllSeats(numberOfSeats, nextTo)
        }

        event.preventDefault()
    }

    return (
        <div>
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
            <Seats numberOfSeats={numberOfSeats}  nextTo={nextTo} seats={seats} list={defaultList} addDefault={addDefault} removeDefault={removeDefault} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    seats: state.seats
})

const mapDispatchToProps = dispatch => ({
    getAllSeats: (numberOfSeats, nextTo) => dispatch(getAllSeats(numberOfSeats, nextTo)),
    addDefault: (seat) => dispatch(actions.addDefault(seat)),
    removeDefault: (seat) => dispatch(actions.removeDefault(seat))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(Reservation)