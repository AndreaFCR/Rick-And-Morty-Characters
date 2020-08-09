/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "../stylesheets/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        Leyenda : <span>👽</span> = "Alien"
        <span>👤</span>= "Human" <span>👍</span> = "Alive"
        <span>👎</span> = "Dead"
      </div>
      <div className="footer__logo">&#169; 2020 Creado por Andrea Clavijo</div>
    </footer>
  );
};

export default Footer;
