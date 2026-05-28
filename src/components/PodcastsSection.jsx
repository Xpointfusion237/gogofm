export default function PodcastsSection() {

  const podcasts = [

    {
      title:'Best Of Énigmes',
      category:'Énigmes',
      duration:'58 min',
      emoji:'🧠'
    },

    {
      title:'Les Hits de la Semaine',
      category:'Musique',
      duration:'45 min',
      emoji:'🎵'
    },

    {
      title:'Afrique qui Inspire',
      category:'Culture',
      duration:'35 min',
      emoji:'🌍'
    },

    {
      title:'Grand Débat Spécial',
      category:'Débat',
      duration:'1H 12',
      emoji:'🎙'
    }

  ]

  return (

    <section className="podcasts-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            🎧 PODCASTS
          </span>

          <h2 className="shows-title">
            Bibliothèque
            <span> audio</span>
          </h2>

        </div>

        <div className="podcasts-grid">

          {podcasts.map((podcast,index)=>(

            <div
              className="podcast-card"
              key={index}
            >

              <div className="podcast-top">

                <div className="podcast-emoji">
                  {podcast.emoji}
                </div>

              </div>

              <div className="podcast-body">

                <div className="podcast-category">
                  {podcast.category}
                </div>

                <h3>
                  {podcast.title}
                </h3>

                <div className="podcast-footer">

                  <span>
                    ⏱ {podcast.duration}
                  </span>

                  <button>
                    ▶
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}