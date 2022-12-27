import React, { useState } from "react";
import styled from "styled-components";
import Multiselect from "multiselect-react-dropdown";
import bus from "../assets/bus.svg";
import suv from "../assets/suv.svg";
import van from "../assets/van.svg";
import c_tour from "../assets/custom_tour.svg";
import { MultiCalendarPicker } from "../components";
// import { Link } from "react-router-dom";
//Component responsible for transportation type and count of guests
const CustomTour = () => {
  // const { id, trans } = tour;
  //mainTrans = current transportation, setTrans = sets transportation
  //default transportation will always be firs array item
  //in this case it is suv
  const trans = ["suv", "van", "bus"];
  const [mainTrans, setTrans] = useState(trans[0]);

  const [date, setDate] = useState(new Date());

  const [mainDist, setDist] = useState([
    "Buffalo Trace ",
    "Castle & Key",
    "Woodford Reserve",
    "Bulleit Distilling",
    "Castle & Key",
    "Angel's Envy",
    "Four Roses",
    "Jim Beam",
    "Maker's Mark",
    "Willett Distillery",
    "Evan Williams",
    "Heaven Hill",
    "Old Forester",
    "The Old Crow",
    "Stitzel Weller",
    "Wild Turkey",
    "Three Boys",
    "Glenns Creek",
    "Town Branch",
    "Rabbit Hole",
    "Preservation",
    "Limestone Branch",
    "Lux Row Distillers",
    "Jefferson's",
    "James E. Pepper",
    "Bardstown Bourbon",
    "Michter's Shively",
    "Jeptha Creed",
    "Bourbon Company",
    "Peerless Distillery",
    "Prohibition Spirits",
    "Cooperage",
  ]);
  // console.log(mainDist);
  return (
    <Wrapper>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <img
                  src={c_tour}
                  alt="Custom Tour"
                  className={{ height: 100, width: 100 }}
                />
                <h3>Custom Tour Form</h3>
                <p>Sumbit the form and we will contact you within 24 hours.</p>
                {/* TODO: Setup validate */}
                <form className="requires-validation">
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Tour Name"
                      required
                    />
                    <div className="valid-feedback">
                      Give your tour a unique name.
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                    <div className="valid-feedback">
                      Provide a point of contact for your tour.
                    </div>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      required
                    />
                    <div className="valid-feedback">
                      Point of contact valid email
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      pattern="[0-9]*"
                      minLength="10"
                      placeholder="(999) 999-9999"
                      required
                    />
                    <div className="valid-feedback">
                      Point of contact Phone Number
                    </div>
                  </div>
                  {/* MULTI SELECT DISTILLERIES */}
                  <div className="col-md-12">
                    <div className="form-select mt-3" required>
                      <div>
                        <Multiselect
                          closeIcon={"circle"}
                          isObject={false}
                          onRemove={(event) => {
                            // console.log(event);
                          }}
                          onSelect={(event) => {
                            // console.log(event);
                          }}
                          options={mainDist}
                          placeholder="Select Distilleries"
                          style={{
                            chips: {
                              background: "var(--clr-primary-4)",
                              borderRadius: "5px",
                              margin: "4px",
                              padding: "2px",
                              fontWeight: "bold",
                              fontSize: 14,
                            },
                            multiselectContainer: {
                              color: "black",
                            },
                            searchBox: {
                              border: "none",
                            },
                            option: {
                              color: "black",
                              background: "white",
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className="valid-feedback">
                      Select distilleries you are interested in.
                    </div>
                  </div>
                  {/* MULTI SELECT DISTILLERIES END */}
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="text"
                      name="reservation"
                      placeholder="Reservation"
                      required
                    />
                    <div className="valid-feedback">
                      Leave us a comment with as much information about your
                      tour as possible!
                    </div>
                  </div>
                  {/* Comment Section */}
                  <div className="container">
                    {/* <form> */}
                    <div className="form-group">
                      <textarea
                        className="form-control status-box"
                        rows="3"
                        placeholder="Leave us a comment..."
                      ></textarea>
                    </div>
                    {/* </form> */}

                    <ul className="posts"></ul>
                  </div>
                  {/* Form Continuation */}

                  {/* MULTI CALENDAR PICKER */}
                  <MultiCalendarPicker value={date} setDate={setDate} />
                  {date.length > 0 ? (
                    <p className="text-center">
                      <span className="bold">Start:</span>{" "}
                      {date[0].toDateString()}
                      &nbsp;|&nbsp;
                      <span className="bold">End:</span>{" "}
                      {date[1].toDateString()}
                    </p>
                  ) : (
                    <p className="text-center">
                      <span className="bold">Current Date:</span>{" "}
                      {date.toDateString()}
                    </p>
                  )}
                  {console.log(date)}
                  {/* END MULTICALENDAR */}
                  {/* TRANSPORTATION */}
                  <div className="trans">
                    <span>Transportation: </span>
                    <div>
                      {trans.map((car, index) => {
                        // console.log(trans);
                        return (
                          <button
                            key={index}
                            //terinary operator:"?" if mainTrans is a car that is the first choice display active
                            //":" if not: just display "trans-btn" styling
                            className={`${
                              mainTrans === car
                                ? "trans-btn active"
                                : "trans-btn"
                            }`}
                            onClick={() => setTrans(car)}
                          >
                            {/* {trans} */}
                            {car === "suv" ? (
                              <img src={suv} alt="DL logo" />
                            ) : null}
                            {car === "van" ? (
                              <img src={van} alt="DL logo" />
                            ) : null}
                            {car === "bus" ? (
                              <img src={bus} alt="DL logo" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  {mainTrans.length > 0 ? (
                    <p className="text-center">
                      <span className="bold">
                        {" "}
                        Current Transportation Chosen: {mainTrans}{" "}
                        {mainTrans === "suv" ? "(MAX 6 Guests)" : null}
                        {mainTrans === "van" ? "(MAX 15 Guests)" : null}
                        {mainTrans === "bus" ? "(MAX 20 Guests)" : null}
                      </span>
                    </p>
                  ) : (
                    <p className="text-center">
                      <span className="bold">
                        Current Transportation Chosen:
                      </span>{" "}
                      {mainTrans}
                    </p>
                  )}
                  {/* TRANSPORTATION END  */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck"
                      required
                    />
                    <label className="form-check-label">
                      {" "}
                      I confirm that my Tour will be first reviewed
                    </label>
                    <div className="invalid-feedback">
                      By checking the box you aknowledge that your tour will be
                      first reviewed, there after receiving confirmation.
                    </div>
                  </div>

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );

  //{/* <input type="checkbox" /> */}
  // <img src={bus} alt="DL logo" />
  // <img src={van} alt="DL logo" />
  // <img src={suv} alt="DL logo" />
};

//This wrapper does not effect the functionality it is used for styling
const Wrapper = styled.section`
  *,
  body {
    font-weight: 400;
  }

  html,
  body {
    height: 100%;
    background-color: #152733;
  }

  .form-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
  }

  .form-holder .form-content {
    position: relative;
    text-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    padding-top: 40px;
  }

  .form-content .form-items {
    border: 2px solid #fff;
    padding: 20px;
    display: inline-block;
    width: 100%;
    min-height: 40px;
    min-width: 320px;
    max-width: 400px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 16px;
    text-align: left;
  }
  @media (min-width: 690px) {
    .form-content .form-items {
      padding: 40px;
      width: 100%;
      min-width: 695px;
    }
  }

  @media (min-width: 992px) {
    .form-content .form-items {
      width: 100%;
      min-width: 695px;
    }
  }

  .form-content h3 {
    color: #fff;
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .form-content h3.form-title {
    margin-bottom: 30px;
  }

  .form-content p {
    color: #fff;
    text-align: left;
    font-size: 17px;
    font-weight: 300;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .form-content label,
  .was-validated .form-check-input:invalid ~ .form-check-label,
  .was-validated .form-check-input:valid ~ .form-check-label {
    color: #fff;
  }

  .form-content input[type="text"],
  .form-content input[type="comment"],
  .form-content input[type="email"],
  .form-content select {
    width: 100%;
    padding: 9px 20px;
    text-align: left;
    border: 0;
    outline: 0;
    border-radius: 0.6rem;
    background-color: #fff;
    font-size: 15px;
    font-weight: 300;
    color: #8d8d8d;
    margin-top: 16px;
  }

  .btn-primary {
    background-color: #6c757d;
    outline: none;
    border: 0px;
    box-shadow: none;
  }

  .btn-primary:hover,
  .btn-primary:focus,
  .btn-primary:active {
    background-color: #495056;
    outline: none !important;
    border: none !important;
    box-shadow: none;
  }

  .form-content textarea {
    position: static !important;
    width: 100%;
    padding: 8px 20px;
    border-radius: 6px;
    text-align: left;
    background-color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: 300;
    color: #8d8d8d;
    outline: none;
    resize: none;
    height: 120px;
    -webkit-transition: none;
    transition: none;
    margin-bottom: 14px;
  }

  .form-content textarea:hover,
  .form-content textarea:focus {
    border: 0;
    background-color: #ebeff8;
    color: #8d8d8d;
  }

  .mv-up {
    margin-top: -9px !important;
    margin-bottom: 8px !important;
  }

  .valid-feedback {
    color: var(--clr-primary-4);
  }

  /*
=============== 
Comment Section
===============
*/

  .trans {
    display: grid;
    grid-template-columns: 110px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .trans-btn {
    display: inline-block;
    margin-right: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  @media (min-width: 992px) {
    .trans-btn {
      font-size: 0.75rem;
      margin-left: 2rem;
      grid-template-columns: 20fr 20fr;
      grid-column-gap: 20px;
      align-items: center;
    }
  }
  @media (min-width: 992px) {
    .trans {
      font-size: 0.75rem;
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 132.5px;
  }
`;
export default CustomTour;
