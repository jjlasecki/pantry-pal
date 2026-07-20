import "./Navbar.css";
import pantryPalLogo from "../assets/pantry-pal-logo.png";

export default function Navbar() {
  return (
    <nav>
      <div className="site-brand">
        <img className="site-logo" src={pantryPalLogo} alt="" />

        <h1>Pantry Pal</h1>

        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/">Search Recipes</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
