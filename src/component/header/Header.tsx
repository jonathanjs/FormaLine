import { Link } from "react-router-dom";


const Header = () =>  {

    return (
      <div className="content row">

<nav className="navbar navbar-expand-lg bg-dark-subtle">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> LineForma</a>

    {/* Bouton pour activer le menu sur mobile */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu principal */}
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Formation">Formation en Ligne</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Presentiel">Présentiel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
  
  
      </div>
    )
  }
  

  export default Header;