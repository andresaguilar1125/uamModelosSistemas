import React from "react";
import Expressions from "./components/Expressions";
import Regex from "./components/Regex";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* Información de la U */}
      <div>
        <img
          src="https://get.mw.cr/c/aurens/content/images/colleges/logos/3.png"
          alt="uamlogo"
          width="50%"
        ></img>
        <p> </p>
        <p>Junior Andres López Aguilar</p>
        <p>Modelos de Programación de Sistemas</p>
        <p>Proyecto Final</p>
      </div>

      {/* Accordion bootstrap */}

      <div className="bs-example">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >
                  Parte 1: Validar exp regulares
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  En cómputo teórico y teoría de lenguajes formales una
                  expresión regular, o expresión racional,1​2​ también son
                  conocidas como regex o regexp,3​ por su contracción de las
                  palabras inglesas regular expression, es una secuencia de
                  caracteres que conforma un patrón de búsqueda. Se utilizan
                  principalmentes para la búsqueda de patrones de cadenas de
                  caracteres u operaciones de sustituciones.
                </p>
                <a href="https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular">
                  Wikipedia
                </a>
                <hr />
                <Expressions></Expressions>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  type="button"
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >
                  Parte 2: Regex Javascript
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse show"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>
                  Las regex (en inglés, regular expressions) son las unidades de
                  descripción de los lenguajes regulares, que se incluyen en los
                  denominados lenguajes formales. Son un instrumento clave de la
                  informática teórica, la cual, entre otras cosas, establece las
                  bases para el desarrollo y la ejecución de programas
                  informáticos, así como para la construcción del compilador
                  necesario para ello.{" "}
                </p>
                <a href="https://www.ionos.es/digitalguide/paginas-web/creacion-de-paginas-web/regex/">
                  {" "}
                  Digital Guide IONOS es{" "}
                </a>
                <hr />
                <Regex></Regex>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Junior Lopez Aguilar _ 
        <img
          src="https://get.mw.cr/c/aurens/content/images/colleges/logos/3.png"
          alt="uamlogo"
          width="10%"
        ></img>  _ Proyecto Final‎‎‎‎‎‎‎</p>
      </footer>
    </div>
  );
}
