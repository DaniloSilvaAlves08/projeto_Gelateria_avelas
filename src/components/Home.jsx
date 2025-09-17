// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>Bem-vindo à Gelatos Avelãs</h2>
          <p>A melhor experiência em sorvetes artesanais de Cajamar</p>
          <Link to="/cardapio" className="cta-button">Ver Cardápio</Link>
        </div>
      </section>

      <section className="benefits">
        <h2>Por que escolher a Gelatos Avelãs?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>🍦 Ingredientes Naturais</h3>
            <p>Utilizamos apenas ingredientes frescos e naturais em nossos produtos.</p>
          </div>
          <div className="benefit-card">
            <h3>🎯 Sabores Exclusivos</h3>
            <p>Mais de 50 sabores, incluindo opções exclusivas da casa.</p>
          </div>
          <div className="benefit-card">
            <h3>⭐ Recomendação de Famosos</h3>
            <p>Reconhecida e frequentada por personalidades como Gabriel Miller.</p>
          </div>
          <div className="benefit-card">
            <h3>🏆 Tradição</h3>
            <p>Mais de 15 anos oferecendo o melhor sorvete da região.</p>
          </div>
        </div>
      </section>

      <section className="famous">
        <h2>Recomendado por famosos!</h2>
        <p>Gabriel Miller já declarou: "Gelatos Avelãs tem os melhores sorvetes que já provei!"</p>
      </section>
    </div>
  );
};

export default Home;