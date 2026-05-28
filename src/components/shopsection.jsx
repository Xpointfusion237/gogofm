export default function ShopSection() {

  const products = [

    {
      name:'Polo Premium GOGO FM',
      price:'15 000 FCFA',
      emoji:'👕',
      badge:'NEW'
    },

    {
      name:'Hoodie Maître des Énigmes',
      price:'22 000 FCFA',
      emoji:'🧥',
      badge:'HOT'
    },

    {
      name:'Casquette LHD',
      price:'8 000 FCFA',
      emoji:'🧢',
      badge:'VIP'
    },

    {
      name:'T-Shirt GOGO FM',
      price:'10 000 FCFA',
      emoji:'🔥',
      badge:'TREND'
    }

  ]

  return (

    <section className="shop-section">

      <div className="container">

        <div className="section-header">

          <span className="section-badge">
            🛍️ BOUTIQUE
          </span>

          <h2 className="shows-title">
            Merch
            <span> GOGO FM</span>
          </h2>

        </div>

        <div className="shop-grid">

          {products.map((product,index)=>(

            <div
              className="shop-card"
              key={index}
            >

              <div className="shop-badge">
                {product.badge}
              </div>

              <div className="shop-image">
                {product.emoji}
              </div>

              <div className="shop-body">

                <h3>
                  {product.name}
                </h3>

                <div className="shop-price">
                  {product.price}
                </div>

                <button className="shop-btn">
                  Ajouter au panier
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}