import React, { useState } from "react";

export default function Regex() {
  //constantes hooks
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [ID, setID] = useState("");

  // Funciones definidas
  const handleSubmit = (event) => {
    event.preventDefault();

    //email REGEX
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (emailRegex.test(email)) {
      alert("email es valido!");
    } else {
      alert("email es invalido!");
    }

    //date REGEX
    var dateRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;

    if (dateRegex.test(date)) {
      alert("fecha es valido!");
    } else {
      alert("fecha es invalido!");
    }

    //ID REGEX
    var IDRegex = /^\d-\d{4,4}-\d{4,4}$/;

    if (IDRegex.test(ID)) {
      alert("ID es valido!");
    } else {
      alert("ID es invalido!");
    }
  };

  // const handleInputChange = (event) => {
  //   event.persist();
  // };

  return (
    // Regex Group Buttons

    <React.Fragment>
      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="regexEmail"
            name="regexEmail"
            className="form-control"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            example@test.org
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="regexDate"
            name="regexDate"
            className="form-control"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <small id="DateHelp" className="form-text text-muted">
            01/01/1990
          </small>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="regexID"
            name="regexID"
            className="form-control"
            value={ID}
            onChange={(event) => setID(event.target.value)}
          />
          <small id="IDHelp" className="form-text text-muted">
            1-1111-1111
          </small>
        </div>

        <input type="submit" className="btn btn-info" value="Validar" />
      </form>
      <hr />
    </React.Fragment>
  );
}
