export default function PaymentSection() {

  const methods = [

    {
      name:'Orange Money',
      emoji:'🟧'
    },

    {
      name:'MTN Money',
      emoji:'🟨'
    },

    {
      name:'Wave',
      emoji:'💙'
    },

    {
      name:'Moov Money',
      emoji:'🟢'
    }

  ]

  return (

    <section className="payment-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            💳 PAIEMENTS
          </span>

          <h2 className="shows-title">
            Soutenez GOGO FM
            <span> facilement</span>
          </h2>

          <p className="section-sub">
            Envoyez vos dons, cadeaux
            et contributions via Mobile Money.
          </p>

        </div>

        <div className="payment-grid">

          {methods.map((method,index)=>(

            <div
              className="payment-card"
              key={index}
            >

              <div className="payment-emoji">
                {method.emoji}
              </div>

              <h3>
                {method.name}
              </h3>

              <button className="payment-btn">
                Payer
              </button>

            </div>

          ))}

        </div>

        <div className="payment-note">

          🔒 Transactions sécurisées —
          intégration API prévue pour
          les paiements réels.

        </div>

      </div>

    </section>

  )
}