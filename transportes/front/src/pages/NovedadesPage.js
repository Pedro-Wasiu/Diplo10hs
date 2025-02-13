import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import "../style/Components/pages/NovedadesPage.css";

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <section className="novedades-page">
      {/* Fondo borroso solo para esta página */}
      <div className="novedades-bg-blur"></div>
      
      {/* Contenedor principal de novedades */}
      <div className="novedades-holder">
        <h2>Novedades</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          novedades.map(item => (
            <NovedadItem
              key={item.id}
              title={item.titulo}
              subtitle={item.subtitulo}
              imagen={item.imagen}
              body={item.cuerpo}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default NovedadesPage;
