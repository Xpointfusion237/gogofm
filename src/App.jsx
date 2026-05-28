import Navbar from './components/Navbar'
import logo from './assets/logo.png'
import RadioPlayer from './components/RadioPlayer'
import ShowsSection from './components/ShowsSection'
import PodcastsSection from './components/PodcastsSection'
import ShopSection from './components/ShopSection'
import SolidaritySection from './components/SolidaritySection'
import GiftsSection from './components/GiftsSection'
import LeaderboardSection from './components/LeaderboardSection'
import SponsorsSection from './components/SponsorsSection'
import PaymentSection from './components/PaymentSection'
import LiveNotifications from './components/LiveNotifications'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <section className="hero premium-hero">

        <div className="container hero-content">

          <img
            src={logo}
            alt="GOGO FM"
            className="hero-logo"
          />

          <h1 className="section-title">
            LA RADIO DIGITALE
            <br />

            <span className="gradient-text">
              AFRICAINE PREMIUM
            </span>
          </h1>

          <p className="section-sub">
            Lives interactifs, émissions exclusives,
            podcasts premium, cadeaux virtuels et
            communauté africaine connectée 24h/24.
          </p>

          <div className="hero-buttons">

            <button className="btn btn-primary">
              ▶ Écouter maintenant
            </button>

            <button className="btn btn-outline">
              🎙 Découvrir les émissions
            </button>

          </div>

        </div>

      </section>
      <RadioPlayer />
      <ShowsSection />
      <PodcastsSection />
      <ShopSection />
      <SolidaritySection />
      <GiftsSection />
      <LeaderboardSection />
      <SponsorsSection />
      <PaymentSection />
      <LiveNotifications />
      <Footer />

    </>
  )
}

export default App