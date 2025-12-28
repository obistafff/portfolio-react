export default function Portfolio() {
  const projects = [
    {
      title: "Fresh Food",
      img: "/img/portfolio/fresh-food.jpg",
      subtitle: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      img: "/img/portfolio/restaurant-akira.jpg",
      subtitle: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec WordPress",
    },
    {
      title: "Espace bien-être",
      img: "/img/portfolio/espace-bien-etre.jpg",
      subtitle: "Site de vente de produits frais en ligne",
      footer: "Site réalisé avec LARAVEL",
    },
    {
      title: "SEO",
      img: "/img/portfolio/seo.jpg",
      subtitle: "Amélioration du référencement d'un site e-commerce",
      footer: "Utilisation des outils SEO",
    },
    {
      title: "Création d'une API",
      img: "/img/portfolio/api.jpg",
      subtitle: "Création d'une API RESTFULL publique",
      footer: "PHP - SYMFONY",
    },
    {
      title: "Maquette d'un site web",
      img: "/img/portfolio/maquette.jpg",
      subtitle: "Création du prototype d'un site",
      footer: "Réalisé avec FIGMA",
    },
  ];

  return (
    <>
      {/* BANNER */}
      <section className="page-banner" aria-label="Bannière portfolio"></section>

      {/* CONTENT */}
      <section className="portfolio-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="portfolio-title mb-2">Portfolio</h1>
            <p className="portfolio-subtitle mb-3">
              Voici quelques-unes de mes réalisations.
            </p>
            <div className="portfolio-underline"></div>
          </div>

          <div className="row g-4 mt-4">
            {projects.map((p, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="card portfolio-card h-100">
                  <img
                    src={p.img}
                    className="card-img-top portfolio-img"
                    alt={p.title}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text mb-3">{p.subtitle}</p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Voir le site
                    </a>
                  </div>
                  <div className="card-footer text-center portfolio-footer">
                    {p.footer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
