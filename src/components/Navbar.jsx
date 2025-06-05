import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/namanganl.jpg";
import nma from "../assets/namangan.jpg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Bosh Sahifa</Link>
          </li>
          <li>
            <Link to="/turistik-manzillar">Turistik manzillar</Link>
          </li>
          <li>
            <Link to="/qollanma">Qo'llanma</Link>
          </li>
          <li>
            <Link to="/biz-haqimizda">Biz Haqimizda</Link>
          </li>
          <li>
            <Link to="/biz-bilan-aloqa">Biz bilan aloqa</Link>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="nma">
          <img src={nma} alt="Namangan" />
        </div>
        <div className="vil">
          <h2>Namangan viloyati</h2>
          <p>
            Bizning saytimiz orqali siz Namangan viloyatidagi eng mashhur va <br />
            go‘zal diqqatga sazovor joylar bilan tanishishingiz mumkin.
          </p>
          <Link to="/biz-haqimizda">
            <button>Haqimizda</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
