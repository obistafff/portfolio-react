// pages/Legal.jsx
import { Helmet } from "react-helmet-async";

export default function Legal() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>Mentions légales | John Doe</title>
      </Helmet>

      <div className="page">
        <div className="page__header">
          <h1 className="page__title">Mentions légales</h1>
          <div className="page__underline" />
        </div>

        <section className="legal">
          <details className="legal__item" open>
            <summary className="legal__summary">Editeur du site</summary>
            <div className="legal__content">
              <h2 className="legal__name">John Doe</h2>
              <div className="legal__rows">
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>10 20 30 40 50</p>
                <p>john.doe@gmail.com</p>
              </div>
            </div>
          </details>

          <details className="legal__item">
            <summary className="legal__summary">Hébergeur</summary>
            <div className="legal__content">
              <h2 className="legal__name">alwaysdata</h2>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </p>
            </div>
          </details>

          <details className="legal__item">
            <summary className="legal__summary">Crédits</summary>
            <div className="legal__content">
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Centre Européen de formation
                </a>
                .
              </p>
              <p>
                <em>Les images utilisées sur ce site sont libres de droits</em> et ont été
                obtenues sur le site{" "}
                <a href="https://pixabay.com" target="_blank" rel="noreferrer">
                  Pixabay
                </a>
                .
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a
                  href="https://www.flaticon.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  John doe Icons erstellt von Freepik - Flaticon
                </a>
                .
              </p>
            </div>
          </details>
        </section>
      </div>
    </>
  );
}
