import { Link } from "react-router-dom";
import logo_header from "../assets/logo/logo_header.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo_header} alt="Logo du site Kasa" />
        </Link>
      </div>
      <div className="header__menu">
        <ul className="header__menuList">
          <li className="header__menuList__item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="header__menuList__item">
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
