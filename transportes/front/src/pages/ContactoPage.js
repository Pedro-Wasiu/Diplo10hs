import '../style/Components/pages/ContactoPage.css';

import React from 'react';

const ContactoPage = () => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <form className="formulario" action="" method="">
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </p>
          <p>
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" name="telefono" />
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje"></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="datos">
        <h2>Otras vías de comunicación</h2>
        <p>También puede contactarse con nosotros usando los siguientes medios:</p>
        <ul>
          <li>Teléfono:2216441781</li>
          <li>Email: contacto@wasiuclothing.com.ar</li>
          <li>Facebook: Wasiu_Clothing</li>
          <li>X: Wasiu_Clothing</li>
          <li>Skype: Wasiu_Clothing</li>
        </ul>
      </div>
    </main>
  );
}

export default ContactoPage;
