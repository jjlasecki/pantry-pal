import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-divider"></div>

      <p>
        Made with <span className="heart">♥</span> for home cooks everywhere.
      </p>

      <p className="footer-tech">
        Built with React • Recipe data provided by TheMealDB API
      </p>

      <p className="footer-copy">© 2026 Pantry Pal</p>
    </footer>
  );
}