export default function SponsorsSection() {

  const sponsors = [

    {
      name:'Orange CI',
      type:'Sponsor officiel',
      emoji:'🟧'
    },

    {
      name:'MTN',
      type:'Partenaire média',
      emoji:'🟨'
    },

    {
      name:'Wave',
      type:'Paiement mobile',
      emoji:'💙'
    },

    {
      name:'Canal+',
      type:'Publicité premium',
      emoji:'📺'
    }

  ]

  return (

    <section className="sponsors-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            📢 SPONSORS
          </span>

          <h2 className="shows-title">
            Nos partenaires
            <span> premium</span>
          </h2>

          <p className="section-sub">
            GOGO FM collabore avec des
            entreprises et marques qui
            soutiennent la radio africaine
            moderne.
          </p>

        </div>

        <div className="sponsors-grid">

          {sponsors.map((sponsor,index)=>(

            <div
              className="sponsor-card"
              key={index}
            >

              <div className="sponsor-emoji">
                {sponsor.emoji}
              </div>

              <h3>
                {sponsor.name}
              </h3>

              <p>
                {sponsor.type}
              </p>

            </div>

          ))}

        </div>

        <div className="advertise-box">

          <h3>
            Faites votre publicité sur GOGO FM
          </h3>

          <p>
            Touchez des milliers d’auditeurs
            grâce à nos émissions, podcasts
            et lives interactifs.
          </p>

          <button className="advertise-btn">
            Devenir sponsor
          </button>

        </div>

      </div>

    </section>

  )
}