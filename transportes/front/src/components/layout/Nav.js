import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Equipo</Link></li>
          <li><Link to="/novedades">Novedades</Link></li>
          <li><Link to="/contacto">Soporte</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
