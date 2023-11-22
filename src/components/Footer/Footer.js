import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer-content">
        <p className="footer-content__date">
          &copy; {new Date().getFullYear()}
        </p>
        <nav className="footer-links">
          <ul className="footer-links__items">
            <li className="footer-links__item">
              <a
                className="link"
                href="https://praktikum.yandex.ru/"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer-links__item">
                <a className="link"
                href="https://github.com/iuliasolt"
                target="_blank">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
