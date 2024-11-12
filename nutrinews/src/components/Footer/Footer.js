import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <h3>&copy; 2024 Nutri News UFU</h3>

        <div className="personal-container">
          <h3 className="personal-info">
            Desenvolvido por Vitor Claudio
            <div className="personal-links">
              <a
                href="https://github.com/vitorclaudio"
                className="social-link"
              >
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/vitorclaudio/"
                className="social-link"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
