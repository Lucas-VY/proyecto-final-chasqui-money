import { Link } from "react-router-dom";
import './Sidebar.css'


const Sidebar = () => {
    return (
        <>

  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block sidebar float-right fixed-top bg-dark barra">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <h1 className="navbar-brand titulo">Chasky Money</h1>
            </li>
        

            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-view">
              <i className="fas fa-home"></i>
                     Inicio 
                <span className="sr-only">
                    (current)
                </span>
              </Link>
            </li>

            <br />

            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-perfil">
                <i className="fas fa-user-circle" />
                Tú Perfil
              </Link>
            </li>

            <br />

            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-transferencias">
                <i className="fas fa-money-bill-wave" />
                Transfer
              </Link>
            </li>

            <br />

            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-noticias">
                <i className="far fa-newspaper" />
                Noticias
              </Link>
            </li>

            <br />

            <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-contactanos">
                <i className="fas fa-question" />
                Contactanos
              </Link>
            </li>

            <br />

        <li className="nav-item">
              <Link className="nav-link" to="/inicio-sesion/user-credit-card">
                <i className="fab fa-cc-visa" />
                Chaski Card
              </Link>
            </li> 

            <br />

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-sign-out-alt" />
                Salir
              </Link>
            </li> 
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
          </ul>    
        </div>
      </nav>
      </div>
      </div>


        </>
    )
}

export default Sidebar;