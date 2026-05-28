import './Hero.css'

export default function Hero(){

  return(

    <section className="hero" id="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <div className="hero-left">

          <div className="hero-badge glass">
            🔥 RADIO DIGITALE AFRICAINE
          </div>

          <h1 className="hero-title">

            <img
              src="/logo.png"
              alt="GOGO FM"
              className="hero-logo"
            />

          </h1>

          <p className="hero-text">

            La radio nouvelle génération qui mélange
            musique, live, débats, énigmes,
            humour et culture africaine.

          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              ▶ ÉCOUTER EN DIRECT
            </button>

            <button className="btn-outline">
              🎙 Découvrir
            </button>

          </div>

          <div className="hero-stats">

            <div className="hero-stat glass">
              <h3>24H/24</h3>
              <span>Live Radio</span>
            </div>

            <div className="hero-stat glass">
              <h3>148K+</h3>
              <span>Auditeurs</span>
            </div>

            <div className="hero-stat glass">
              <h3>Premium</h3>
              <span>Expérience</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  )

}