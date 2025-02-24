const Header = () =>  {



;

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
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Formation en Ligne</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Présentiel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
  
  
      </div>
    )
  }
  

  export default Header;