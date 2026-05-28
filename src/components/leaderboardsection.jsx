export default function LeaderboardSection() {

  const donors = [

    {
      name:'King Moussa',
      amount:'125 000 F',
      badge:'👑'
    },

    {
      name:'Queen Aicha',
      amount:'95 000 F',
      badge:'💎'
    },

    {
      name:'DJ Black',
      amount:'70 000 F',
      badge:'🔥'
    },

    {
      name:'Mama Africa',
      amount:'45 000 F',
      badge:'❤️'
    }

  ]

  return (

    <section className="leaderboard-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            🏆 TOP SUPPORTERS
          </span>

          <h2 className="shows-title">
            Classement des
            <span> donateurs</span>
          </h2>

        </div>

        <div className="leaderboard-card">

          {donors.map((donor,index)=>(

            <div
              className="leaderboard-item"
              key={index}
            >

              <div className="leaderboard-rank">
                #{index + 1}
              </div>

              <div className="leaderboard-user">

                <div className="leaderboard-badge">
                  {donor.badge}
                </div>

                <div>

                  <h3>
                    {donor.name}
                  </h3>

                  <span>
                    Super supporter
                  </span>

                </div>

              </div>

              <div className="leaderboard-amount">
                {donor.amount}
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}