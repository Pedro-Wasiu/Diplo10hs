const HomePage = (props) => {
  return (
    <main className="holder">

      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>Bienvenidos a WasiuClothing </p>

          <p>En WasiuClothing, nos especializamos en ofrecer prendas de calidad que se adaptan a tu estilo y necesidades. Nuestro compromiso es brindarte opciones modernas, cómodas y accesibles para cada ocasión.

            Aquí encontrarás una selección cuidadosamente elegida para que siempre encuentres algo que te represente. Navegá por nuestras colecciones y descubrí una experiencia de compra sencilla y confiable.</p>

           <p> Gracias por elegirnos. Estamos aquí para acompañarte en cada paso.</p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelente</span>
            <span className="autor">- Juan Perez</span>
          </div>
        </div>
      </div >
    </main >
  );
}

export default HomePage;
