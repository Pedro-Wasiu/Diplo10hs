import '../style/Components/pages/NosotrosPage.css';

import React from "react";

const EquipoPage = () => {
  return (
    <div className="equipo-page">
      {/* Fondo (si lo deseas, este elemento puede estar en otro lugar o en el layout general) */}
      <div id="bosque"></div>
      <main>
        <h1 id="C">Integrantes</h1>

        <div className="integrantes">
          <div className="integrante">
            <img src="/images/nosotros1.jpg" alt="Pedro" />
            <p>
              <strong>Pedro - Fundador y Director Creativo</strong>
              <br />
              Pedro, un amante de la vida al aire libre y de las tradiciones del trabajo de leñador, fundó la marca hace diez años. Inspirado por sus raíces y por la naturaleza, él mismo diseña cada colección con materiales sostenibles y resistentes, ideales para el estilo de vida rústico y aventurero. Su visión es hacer ropa que combine comodidad, estilo y la esencia del trabajo en la naturaleza. Pedro está convencido de que "una buena prenda debe contar una historia".
            </p>
          </div>

          <div className="integrante">
            <img src="/images/nosotros2.jpg" alt="Laura" />
            <p>
              <strong>Laura - Jefa de Diseño Textil</strong>
              <br />
              Laura es la encargada de llevar las ideas de Pedro a la realidad. Con un profundo conocimiento en diseño de telas y técnicas de tejido, se asegura de que cada prenda sea duradera y mantenga la autenticidad del estilo leñador. Le apasiona trabajar con materiales naturales, como lana y algodón orgánico, y siempre está buscando maneras innovadoras de incorporar patrones y texturas inspirados en los bosques. Laura cree firmemente en la moda responsable y en crear prendas que perduren.
            </p>
          </div>

          <div className="integrante">
            <img src="/images/nosotros3.jpg" alt="Miguel" />
            <p>
              <strong>Miguel - Experto en Sostenibilidad y Responsable de Calidad</strong>
              <br />
              Miguel es el especialista en sostenibilidad de la marca. Su trabajo es asegurar que cada proceso de producción sea lo más ecológico y ético posible. Desde la elección de proveedores hasta la inspección de la calidad de cada pieza, Miguel se asegura de que cada prenda respete el medio ambiente y los principios de sostenibilidad. Para él, la ropa de leñador debe tener una huella mínima en el planeta, y su lema es "Respetar la tierra que nos da tanto".
            </p>
          </div>

          <div className="integrante">
            <img src="/images/nosotros4.jpg" alt="Sofía" />
            <p>
              <strong>Sofía - Gerente de Marketing y Redes Sociales</strong>
              <br />
              Sofía es la voz y la imagen de la marca. Es quien da vida a cada historia y se encarga de conectar con la audiencia a través de redes sociales y campañas publicitarias. Apasionada por el estilo de vida outdoor, comparte consejos y aventuras que inspiran a los seguidores de la marca a reconectar con la naturaleza. Sofía también organiza eventos y colaboraciones con influencers para promocionar los productos de la marca. "No vendemos ropa, vendemos una experiencia", dice Sofía.
            </p>
          </div>

          <div className="integrante">
            <img src="/images/nosotros5.jpg" alt="Tomás" />
            <p>
              <strong>Tomás - Fotógrafo y Videógrafo</strong>
              <br />
              Tomás es el encargado de capturar la esencia de la marca en cada imagen y video. Su objetivo es transmitir la autenticidad y el espíritu aventurero que define a la ropa de leñador. Para Tomás, cada prenda es una historia visual, y sus sesiones de fotos suelen llevarse a cabo en lugares remotos y naturales. Su trabajo le da a la marca una estética poderosa, conectando visualmente con clientes que buscan más que solo ropa: buscan un estilo de vida.
            </p>
          </div>
        </div>
      </main>

    </div>
  );
};

export default EquipoPage;
