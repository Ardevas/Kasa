import logo_footer from "../assets/logo/logo_footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contentTitle">
          <img src={logo_footer} alt="Logo du site Kasa" />
        </div>
      </div>
    </footer>
  );
}
