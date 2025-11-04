
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="sobre-nosotros" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Sobre Nosotros</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            En HABPRODUCCIONES, vivimos y respiramos música. Nacimos de la pasión por crear sonidos que no solo se escuchan, sino que se sienten. Nuestro estudio es un santuario para la creatividad, equipado con la mejor tecnología y un equipo de profesionales dedicados a transformar tus ideas en obras maestras auditivas.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Nuestra visión es ser el catalizador que impulse a artistas emergentes y consolidados, proporcionando un espacio donde la calidad, la innovación y la colaboración son los pilares fundamentales. Creemos que cada nota cuenta una historia, y estamos aquí para ayudarte a contar la tuya.
          </p>
        </div>
        <div className="order-1 md:order-2">
            <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Music production studio" 
                className="rounded-lg shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
            />
        </div>
      </div>
    </Section>
  );
};

export default About;