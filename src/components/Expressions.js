import React, { useState } from "react";
//import { Button, Table } from "react-bootstrap";

export default function Expressions() {
  //https://es.reactjs.org/docs/hooks-state.html
  //https://daveceddia.com/usestate-hook-examples/

  //constantes hooks
  const [expresionUno, setExpresionUno] = useState("");
  const [operador, setOperador] = useState("");
  const [expresionDos, setExpresionDos] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [expresiones, setExpressiones] = useState([]);

  // Funciones definidas

  function downloadFile () {
    //https://medium.com/@kayathiri/text-file-download-in-react-a8b28a580c0d
    const element = document.createElement("a");
    const file = new Blob(
      [JSON.stringify(expresiones)], //esta pasando solo el span que esta vacío?
      { type: "text/plain;charset=utf-8" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "expressions.json";
    document.body.appendChild(element);
    element.click();
  }

  function isValidExpression(expresionUno, expresionDos) {
    // var regex js para number format (float)
    var regex = /^[0-9]*.[0-9]*$/;

    if (regex.test(expresionUno) && regex.test(expresionDos) && (operador === '+' || operador === '-' || operador === '*' || operador === '*')) {
      console.log("expresiones validas");
      return true;
    } else {
      console.log("expresiones invalidas");
      return false;
    }
  }

  function Suma() {
    setOperador((prevState) => prevState + "+");
  }

  function Resta() {
    setOperador((prevState) => prevState + "-");
  }

  function Multiplicar() {
    setOperador((prevState) => prevState + "*");
  }

  function Division() {
    setOperador((prevState) => prevState + "/");
  }

  function BorrarOperacion() {
    setOperador("");
  }

  function BorrarDatos() {
    setExpresionUno("");
    setExpresionDos("");
    setOperador("");
    setMensaje("");
  }

  function Resultado() {
    switch (operador) {
      case "+":
        if (isValidExpression) {
          setExpresionUno(parseFloat(expresionUno) + parseFloat(expresionDos));
          setMensaje ("Suma");
        }
        break;
      case "-":
        if (isValidExpression) {
          setExpresionUno(parseFloat(expresionUno) - parseFloat(expresionDos));
          setMensaje ("Resta");
        }
        break;
      case "*":
        if (isValidExpression) {
          setExpresionUno(parseFloat(expresionUno) * parseFloat(expresionDos));
          setMensaje ("Multiplicacion");
        }
        break;
      case "/":
        if (isValidExpression) {
          setExpresionUno(parseFloat(expresionUno) / parseFloat(expresionDos));
          setMensaje ("Division");
        }
        break;
      default:
        setMensaje("Error sintaxis");
    }
  }

  //Constantes form

  // https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57

  const handleSubmit = (event) => {
//antes de guardar invocar el resultado
    Resultado();

    if (event) {
      event.preventDefault();
      setExpressiones((prevState) => [
        ...prevState,
        { expresionUno, operador, expresionDos, mensaje }
      ]);
      // console.log("expresionUno + operador + expresionDos");
    }

    
  };

  function handleInputChange(event) {
    event.persist();
  }

  return (
    <div>
      {/* Botones */}
      <React.Fragment>
        {/* Botones */}
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={Suma}
        >
          Suma
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={Resta}
        >
          Resta
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={Multiplicar}
        >
          Multiplicar
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={Division}
        >
          Division
        </button>
        <hr />
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={BorrarDatos}
        >
          Borrar Datos
        </button>
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={BorrarOperacion}
        >
          Borrar Operacion
        </button>
        <button
          type="button"
          className="btn btn-outline-success"
          onClick={Resultado}
        >
          Resultados
        </button>
        <hr />
      </React.Fragment>

      {/* Form */}
      <React.Fragment>
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="expresionUno"
              name="expresionUno"
              className="form-control"
              value={expresionUno}
              onChange={(event) => setExpresionUno(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="operador"
              name="operador"
              className="form-control"
              value={operador}
              onChange={handleInputChange}
              readOnly
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="expresionDos"
              name="expresionDos"
              className="form-control"
              value={expresionDos}
              onChange={(event) => setExpresionDos(event.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="mensaje"
              name="mensaje"
              className="form-control"
              value={mensaje}
              onChange={handleInputChange}
              readOnly
            />
          </div>

          <input type="submit" className="btn btn-info" value="Guardar" />
        </form>
        <hr />
      </React.Fragment>

      {/* Table */}
      <React.Fragment>
        <span id="table">
          <table className="table striped bordered hover">
            <thead>
              <tr>
                <th>Expresion Uno</th>
                <th>Operador</th>
                <th>Expresion Dos</th>
                <th>Mensaje / Error</th>
              </tr>
            </thead>
            <tbody>
              {/* map */}
              {expresiones.map((expression, key) => (
                <tr key={key}>
                  <td>{expression.expresionUno}</td>
                  <td>{expression.operador}</td>
                  <td>{expression.expresionDos}</td>
                  <td>{expression.mensaje}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </span>
      </React.Fragment>

      {/* Descargar */}
      <React.Fragment>
        <button
          type="button"
          className="btn btn-info"
          onClick={downloadFile}
        >
          Descargar JSON
        </button>
      </React.Fragment>
    </div>
  );
}
