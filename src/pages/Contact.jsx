// pages/Contact.jsx
export default function Contact() {
  return (
    <div className="page">
      <div className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__subtitle">
          Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="page__underline" />
      </div>

      <section className="contact">
        <div className="contact__card">
          <div>
            <h2 className="contact__h2">Formulaire de contact</h2>
            <div className="contact__underline" />

            <form className="contact__form">
              <input type="text" placeholder="Votre nom" required />
              <input type="email" placeholder="Votre adresse email" required />
              <input type="tel" placeholder="Votre numéro de téléphone" />
              <input type="text" placeholder="Sujet" />
              <textarea placeholder="Votre message" rows="12" required />
              <button type="submit">Envoyer</button>
            </form>
          </div>

          <div>
            <h2 className="contact__h2">Mes coordonnées</h2>
            <div className="contact__underline" />

            <div className="contact__infos">
              <p><strong>John Doe</strong></p>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>

            <div className="contact__map">
              <iframe
                title="Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=40%20Rue%20Laure%20Diebold%2069009%20Lyon&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
