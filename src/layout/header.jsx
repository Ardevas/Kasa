import { Link } from "react-router-dom";
import logo_header from "../assets/logo/logo_header.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Return true if pathname matches current location
  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

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
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li className="header__menuList__item">
            <Link to="/about" className={isActive("/about") ? "active" : ""}>
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
