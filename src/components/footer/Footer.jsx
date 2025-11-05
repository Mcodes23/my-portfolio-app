import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mateli</h1>

        <div className="footer__social">
          <a
            href="#"
            className="footer__icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="footer__icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="#"
            className="footer__icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Mateli. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
