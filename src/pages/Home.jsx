export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold mb-2">Bonjour, je suis John Doe</h1>
          <h2 className="h3 fw-semibold mb-4">Développeur web full stack</h2>

          <button type="button" className="btn btn-danger btn-lg">
            En savoir plus
          </button>
        </div>
      </section>

      {/* SECTION A PROPOS + COMPETENCES (on la fait juste après) */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <h3 className="border-bottom pb-2">A propos</h3>
              <p className="mb-0">
                (on colle ton contenu ici juste après)
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <h3 className="border-bottom pb-2">Mes compétences</h3>
              <p className="mb-0">
                (progress bars Bootstrap juste après)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}