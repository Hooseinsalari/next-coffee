import React, { useState } from "react";

const BookTable = () => {
  const [reservationDetails, setReservationDetails] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    person: "",
  });

  const reservationHandler = (e) => {
    setReservationDetails({
      ...reservationDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      Object.keys(reservationDetails).every((key) => reservationDetails[key])
    ) {
      fetch("http://localhost:4000/reserve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationDetails),
      })
        .then(() => console.log("success"))
        .catch((error) => console.log(error));
    }

    setReservationDetails({
      name: "",
      email: "",
      date: "",
      time: "",
      person: "",
    });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="reservation position-relative overlay-top overlay-bottom">
          <div className="row align-items-center">
            <div className="col-lg-6 my-5 my-lg-0">
              <div className="p-5">
                <div className="mb-4">
                  <h1 className="display-3 text-primary">30% OFF</h1>
                  <h1 className="text-white">For Online Reservation</h1>
                </div>
                <p className="text-white">
                  Lorem justo clita erat lorem labore ea, justo dolor lorem
                  ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                  sed sed diam. Ea et erat ut sed diam sea
                </p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                  <li className="py-2">
                    <i className="fa fa-check text-primary mr-3"></i>Lorem ipsum
                    dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="text-center p-5"
                style={{ background: "rgba(51, 33, 29, .8)" }}
              >
                <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                <form className="mb-5" onSubmit={submitHandler}>
                  <div className="form-group">
                    <input
                      name="name"
                      onChange={reservationHandler}
                      value={reservationDetails.name}
                      type="text"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="email"
                      onChange={reservationHandler}
                      value={reservationDetails.email}
                      type="email"
                      className="form-control bg-transparent border-primary p-4"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <div className="date" id="date" data-target-input="nearest">
                      <input
                        name="date"
                        onChange={reservationHandler}
                        value={reservationDetails.date}
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Date"
                        data-target="#date"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="time" id="time" data-target-input="nearest">
                      <input
                        name="time"
                        onChange={reservationHandler}
                        value={reservationDetails.time}
                        type="text"
                        className="form-control bg-transparent border-primary p-4 datetimepicker-input"
                        placeholder="Time"
                        data-target="#time"
                        data-toggle="datetimepicker"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <select
                      className="custom-select bg-transparent border-primary px-4"
                      style={{ height: "49px" }}
                      value={reservationDetails.person}
                      onChange={reservationHandler}
                      name="person"
                    >
                      <option defaultValue="Person">Person</option>
                      <option value="1">Person 1</option>
                      <option value="2">Person 2</option>
                      <option value="3">Person 3</option>
                      <option value="4">Person 4</option>
                    </select>
                  </div>

                  <div>
                    <button
                      className="btn btn-primary btn-block font-weight-bold py-3"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
