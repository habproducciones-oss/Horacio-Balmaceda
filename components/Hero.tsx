import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-900 to-black py-20"
    >
      <div className="relative z-10 px-4">
        <Section>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
              HABPRODUCCIONES
            </h1>
            <p className="mt-4 text-2xl md:text-3xl text-gray-300 font-light italic tracking-wider">
              La música primero
            </p>
            <a 
              href="#servicios" 
              className="mt-8 inline-block bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
            >
              Descubre Nuestros Servicios
            </a>
        </Section>
      </div>
    </section>
  );
};

export default Hero;