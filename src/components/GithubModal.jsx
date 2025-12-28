import { useEffect, useState } from "react";

export default function GithubModal() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((r) => {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.json();
      })
      .then(setProfile)
      .catch(() => setError(true));
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="githubModalLabel">Profil GitHub</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>

          <div className="modal-body">
            {!profile && !error && <p>Chargement…</p>}
            {error && <p>Impossible de charger le profil GitHub.</p>}

            {profile && !error && (
              <div className="d-flex gap-3 align-items-start">
                <img
                  src={profile.avatar_url}
                  alt={`Avatar GitHub de ${profile.login}`}
                  width="96"
                  height="96"
                  style={{ borderRadius: "12px" }}
                />
                <div>
                  <h6 className="mb-1">{profile.name || profile.login}</h6>
                  <p className="mb-2">{profile.bio || "—"}</p>
                  <ul className="list-unstyled mb-0">
                    <li><strong>Repos :</strong> {profile.public_repos}</li>
                    <li><strong>Followers :</strong> {profile.followers}</li>
                    <li><strong>Following :</strong> {profile.following}</li>
                  </ul>
                  <a
                    className="btn btn-dark btn-sm mt-3"
                    href={profile.html_url}
                    target="_blank"
                    rel="noreferrer nofollow"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
