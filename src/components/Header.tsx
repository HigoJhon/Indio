import React from "react";
import '../style/header.css';
import logo from "../img/logo.jpg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <span>Indio</span>
                <img src={logo} alt="logo Indio" className="logo-img" />
            </div>
            <nav className="nav">
                <a href="/" className="nav-link"><span className="nav-span">INÍCIO</span></a>
                <a href="/somos" className="nav-link"><span className="nav-span">QUEM SOMOS</span></a>
                <a href="/" className="nav-link"><span className="nav-span">ENDEREÇO</span></a>
            </nav>
            <div className="whatsapp">
                <a href="https://wa.me/5521984982492?text=Olá!." className="contact-link">
                    <span>Fale comigo no WhatsApp</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
