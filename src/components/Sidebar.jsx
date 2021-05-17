import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { NavLink } from "reactstrap";
import "./Sidebar.css";



const Sidebar = () => {
  const{ action } = useContext(Context)
  return (
    <>
      <nav className="sidebar bg-dark barra d-none d-md-block col-md-3 col-xl-2 px-0">
        <ul className="nav flex-column">
          <li className="nav-item pt-3 pb-5">
            <h1 className="titulo px-2">Chasky Money</h1>
          </li>


          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/profile"
            >
              <i className="fas fa-user-circle" />
              <span className="d-none d-xl-inline-block">Perfil</span>
            </Link>
          </li>

          <br />

          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/transferencias"
            >
              <i className="fas fa-money-bill-wave" />
              <span className="d-none d-xl-inline-block">Transferencias</span>
            </Link>
          </li>

          <br />
          

          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/historial"
            >
              <i className="fas fa-history" />
              <span className="d-none d-xl-inline-block">Historial</span>
            </Link>
          </li>

          <br />
          

          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/noticias"
            >
              <i className="far fa-newspaper" />
              <span className="d-none d-xl-inline-block">Noticias</span>
            </Link>
          </li>

          <br />

          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/contactanos"
            >
              <i className="fas fa-question" />
              <span className="d-none d-xl-inline-block">Contáctanos</span>
            </Link>
          </li>

          <br />


          <li className="nav-item">
            <Link
              className="nav-link text-center text-xl-left"
              to="/user/credit-card"
            >
              <i className="fab fa-cc-visa" />
              <span className="d-none d-xl-inline-block">Chaski Card</span>
            </Link>
          </li>

          <br />

          <li className="nav-item">
            <NavLink href="/" onClick={action.logout} className="nav-link text-center text-xl-left">
              <i className="fas fa-sign-out-alt" />
              <span className="d-none d-xl-inline-block">Salir</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
