export default function GiftsSection() {

  const gifts = [

    {
      name:'Rose',
      price:'500 F',
      emoji:'🌹'
    },

    {
      name:'Micro Gold',
      price:'2 000 F',
      emoji:'🎙'
    },

    {
      name:'Couronne VIP',
      price:'5 000 F',
      emoji:'👑'
    },

    {
      name:'Super Boost',
      price:'10 000 F',
      emoji:'🚀'
    }

  ]

  return (

    <section className="gifts-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            🎁 CADEAUX LIVE
          </span>

          <h2 className="shows-title">
            Soutenez vos
            <span> animateurs</span>
          </h2>

        </div>

        <div className="gifts-grid">

          {gifts.map((gift,index)=>(

            <div
              className="gift-card"
              key={index}
            >

              <div className="gift-emoji">
                {gift.emoji}
              </div>

              <h3>
                {gift.name}
              </h3>

              <div className="gift-price">
                {gift.price}
              </div>

              <button className="gift-btn">
                Envoyer
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}