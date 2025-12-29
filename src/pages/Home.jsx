import GithubModal from "../components/GithubModal";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="display-4 fw-bold mb-2">Bonjour, je suis John Doe</h1>
          <h2 className="h3 fw-semibold mb-4">Développeur web full stack</h2>

          <button
            type="button"
            className="btn btn-danger btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* A PROPOS + COMPETENCES */}
      <section className="py-5">
        <div className="container">
          <div className="bg-white shadow rounded-2 p-4 p-lg-5">
            <div className="row g-4">
              {/* A PROPOS */}
              <div className="col-12 col-lg-6">
                <h3 className="section-title text-start">A propos</h3>

                <img
                  src="/img/about.jpg"
                  alt="John Doe au travail"
                  className="img-fluid rounded mb-3"
                />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>

                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                  necessitatibus consectetur tempore perferendis nostrum, ex
                  delectus reiciendis impedit aut iure enim placeat? Natus, neque
                  at?
                </p>
              </div>

              {/* COMPETENCES */}
              <div className="col-12 col-lg-6">
                <h3 className="section-title text-start">Mes compétences</h3>

                <p className="mb-1">HTML5 90%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" style={{ width: "90%" }} />
                </div>

                <p className="mb-1">CSS3 80%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-info" style={{ width: "80%" }} />
                </div>

                <p className="mb-1">JavaScript 70%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" style={{ width: "70%" }} />
                </div>

                <p className="mb-1">PHP 60%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-success" style={{ width: "60%" }} />
                </div>

                <p className="mb-1">React 50%</p>
                <div className="progress">
                  <div className="progress-bar bg-primary" style={{ width: "50%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ✅ MODALE GITHUB (OBLIGATOIRE ICI) */}
      <GithubModal />
    </>
  );
}
