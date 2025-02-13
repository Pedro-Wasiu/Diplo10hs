import '../style/Components/pages/ContactoPage.css';

import React, { useState } from 'react';

import axios from 'axios';



const ContactoPage = () => {

  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState(initialForm);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
      ...oldData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto/', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
      setFormData(initialForm);
    }
  };

  return (
    <div className="contact-container">
      {/* Fondo borroso */}
      <div className="bg-blur"></div>

      {/* Caja principal que contiene el formulario y las redes */}
      <div className="contact-box">
        {/* Columna Izquierda: Formulario */}
        <div className="form-side">
          <h2>Contacto Rápido</h2>
          <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
            />

            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />

            <label>Teléfono</label>
            <input 
              type="tel" 
              name="telefono" 
              value={formData.telefono} 
              onChange={handleChange} 
            />

            <label>Mensaje</label>
            <textarea 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange}
              rows="4"
            ></textarea>

            <button type="submit">Enviar</button>

            {sending && <p>Enviando ...</p>}
            {msg && <p>{msg}</p>}
          </form>
        </div>

        {/* Columna Derecha: Datos de contacto y redes */}
        <div className="social-side">
          <h2>Redes Sociales</h2>
          <ul>
  <li>
    <img src="/images/telefono.png" alt="Teléfono" className="icon" />
    <span>Teléfono: 2216441781</span>
  </li>
  <li>
    <img src="/images/gmail.png" alt="Email" className="icon" />
    <span>Email: contacto@wasiuclothing.com.ar</span>
  </li>
  <li>
    <img src="/images/facebook.png" alt="Facebook" className="icon" />
    <span>Facebook: Wasiu_Clothing</span>
  </li>
  <li>
    <img src="/images/x.png" alt="Twitter/X" className="icon" />
    <span>X: Wasiu_Clothing</span>
  </li>
  <li>
    <img src="/images/skype.png" alt="Skype" className="icon" />
    <span>Skype: Wasiu_Clothing</span>
  </li>
</ul>

        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
