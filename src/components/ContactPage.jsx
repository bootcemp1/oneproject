import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Biz bilan Aloqa</h1>
        <p className="description">Bizga murojaat qilish uchun quyidagi kontaktlar orqali bog‘laning:</p>
        <ul>
          <li><strong>Telefon:</strong> <a href="tel:+998945048495">+998945048495</a></li>
          <li><strong>Telegram:</strong> <a href="tg://resolve?domain=bootcemp">@bootcemp</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/nabijanovdev" target="_blank" rel="noopener noreferrer">nabijanovdev</a></li>
          <li><strong>Email:</strong> <a href="mailto:nnuriddin8495@gmail.com">nnuriddin8495@gmail.com</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/998945048495">+998945048495</a></li>
        </ul>
      </div>
      <div className="background-shape"></div>
    </div>
  );
};

export default ContactPage;
