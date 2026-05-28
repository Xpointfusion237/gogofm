export default function ShowsSection() {

  const shows = [

    {
      title:'La Matinale',
      host:'DJ Cobra',
      time:'06H - 10H',
      live:true,
      emoji:'🔥'
    },

    {
      title:'Le Grand Débat',
      host:'Aïcha & Kader',
      time:'20H - 22H',
      live:false,
      emoji:'🎙'
    },

    {
      title:'Maître des Énigmes',
      host:'LHD',
      time:'Samedi 20H',
      live:true,
      emoji:'🧠'
    },

    {
      title:'Club du Rire',
      host:'MC Jo',
      time:'Vendredi',
      live:false,
      emoji:'😂'
    }

  ]

  return (

    <section className="shows-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            🎧 PROGRAMMES
          </span>

          <h2 className="shows-title">
            Nos émissions
            <span> premium</span>
          </h2>

        </div>

        <div className="shows-grid">

          {shows.map((show,index)=>(

            <div
              className="show-card"
              key={index}
            >

              {show.live && (

                <div className="show-live">
                  🔴 LIVE
                </div>

              )}

              <div className="show-emoji">
                {show.emoji}
              </div>

              <h3>
                {show.title}
              </h3>

              <p>
                {show.host}
              </p>

              <div className="show-time">
                {show.time}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}