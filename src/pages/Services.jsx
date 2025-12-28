export default function Services() {
  const services = [
    {
      title: "UX Design",
      icon: "bi-pencil",
      text:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      title: "Développement web",
      icon: "bi-code-slash",
      text:
        "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    },
    {
      title: "Référencement",
      icon: "bi-search",
      text:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <>
      {/* BANNER */}
      <section className="page-banner" aria-label="Bannière services"></section>

      {/* CONTENT */}
      <section className="services-section py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="services-title mb-2">Mon offre de services</h1>
            <p className="services-subtitle mb-3">
              Voici les prestations sur lesquelles je peux intervenir
            </p>
            <div className="services-underline"></div>
          </div>

          <div className="row justify-content-center g-4 mt-4">
            {services.map((s, idx) => (
              <div className="col-12 col-md-6 col-lg-4" key={idx}>
                <div className="card h-100 text-center service-card">
                  <div className="card-body">
                    <i className={`bi ${s.icon} service-icon`}></i>
                    <h5 className="card-title mt-3">{s.title}</h5>
                    <p className="card-text">{s.text}</p>
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
