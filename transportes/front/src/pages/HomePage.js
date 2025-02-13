import React from "react";
import "../style/Components/pages/HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* Elemento para el fondo borroso */}
      <div id="bosque"></div>

      {/* Contenido principal: Catálogo */}
      <main>
        <h1 id="C">Catálogo</h1>
        <div id="conjunto-imagenes">
          <div className="imagenes">
            <img src="/images/camisa1.png" alt="Camisa roja cuadriculada" />
            <p>Camisa roja cuadriculada</p>
            <h5>70000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa2.png" alt="Campera azul cuadriculada" />
            <p>Campera azul cuadriculada</p>
            <h5>110000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa3.png" alt="Campera marrón y blanca" />
            <p>Campera marrón y blanca</p>
            <h5>105000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa4.png" alt="Camisa azul y negra" />
            <p>Camisa azul y negra</p>
            <h5>65000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa5.png" alt="Camisa marrón y gris" />
            <p>Camisa marrón y gris</p>
            <h5>70000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa6.png" alt="Camisa marrón y blanca" />
            <p>Camisa marrón y blanca</p>
            <h5>70000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa7.png" alt="Camisa marrón y negra" />
            <p>Camisa marrón y negra</p>
            <h5>60000$</h5>
          </div>
          <div className="imagenes">
            <img src="/images/camisa8.png" alt="Camisa marrón y blanca" />
            <p>Camisa marrón y blanca</p>
            <h5>80000$</h5>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
