import './Podcasts.css'

export default function Podcasts(){

  const podcasts = [

    {
      emoji:'🎵',
      cat:'Musique',
      title:'Les Hits Afro de la Semaine',
      duration:'45 min'
    },

    {
      emoji:'🧠',
      cat:'Énigmes',
      title:'Best Of Maître des Énigmes',
      duration:'58 min'
    },

    {
      emoji:'🌍',
      cat:'Culture',
      title:'L’Afrique qui Inspire',
      duration:'36 min'
    },

    {
      emoji:'🔥',
      cat:'Débat',
      title:'Argent ou Amitié ?',
      duration:'1H 12 min'
    }

  ]

  return(

    <section className="podcasts-section" id="podcasts">

      <div className="container">

        <div className="shows-top">

          <div className="hero-badge glass">
            🎙 PODCASTS
          </div>

          <h2 className="section-title">

            Bibliothèque <span className="gradient-text">Audio</span>

          </h2>

          <p className="shows-text">

            Écoutez vos émissions préférées
            quand vous voulez.

          </p>

        </div>

        <div className="podcasts-grid">

          {podcasts.map((podcast,index)=>(

            <div className="podcast-card glass" key={index}>

              <div className="podcast-top">

                <div className="podcast-emoji">
                  {podcast.emoji}
                </div>

                <div className="podcast-cat">
                  {podcast.cat}
                </div>

              </div>

              <h3>
                {podcast.title}
              </h3>

              <div className="podcast-bottom">

                <span>
                  ⏱ {podcast.duration}
                </span>

                <button className="podcast-play">
                  ▶
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}