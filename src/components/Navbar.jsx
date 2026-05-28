import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-inner">

        <div className="navbar-logo">
          <img src={logo} alt="GOGO FM" />
        </div>

        <nav className="navbar-links">
          <a href="#">Accueil</a>
          <a href="#">Lives</a>
          <a href="#">Émissions</a>
          <a href="#">Podcasts</a>
          <a href="#">Boutique</a>
        </nav>

        <div className="navbar-actions">

          <button className="btn btn-outline">
            Connexion
          </button>

          <button className="btn btn-primary">
            🔴 EN DIRECT
          </button>

        </div>

      </div>

    </header>
  )
}