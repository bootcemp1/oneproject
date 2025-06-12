import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Namangan</h2>
          <p className="footer-description">
            Eng ajoyib turistik joylarni biz bilan kashf eting. Sifatli, tezkor va ishonchli qo‘llanma!
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Sahifalar</h3>
          <ul className="footer-links">
            <li><Link to="/">Bosh sahifa</Link></li>
            <li><Link to="/turistik-manzillar">Turistik manzillar</Link></li>
            <li><Link to="/qollanma">Qo'llanma</Link></li>
            <li><Link to="/biz-haqimizda">Biz haqimizda</Link></li>
            <li><Link to="/biz-bilan-aloqa">Biz bilan aloqa</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Bog‘lanish</h3>
          <p>Telefon: <a href="tel:+998945048495">+998 94 504 84 95</a></p>
          <div className="social-icons">
            <a href="https://t.me/bootcemp" target="_blank" rel="noopener noreferrer" className="icon telegram">TG</a>
            <a href="https://wa.me/998945048495" target="_blank" rel="noopener noreferrer" className="icon whatsapp">WA</a>
            <a href="mailto:nnuriddin8495@gmail.com?subject=Salom&body=Assalomu alaykum, Nuriddin!" className="icon email">Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Namangan | Barcha huquqlar himoyalangan</p>
      </div>
    </footer>
  );
};

export default Footer;
