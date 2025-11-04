
import React from 'react';
import Section from './Section';
import { RecordingIcon, MixingIcon, MasteringIcon, ProductionIcon } from './icons';

const services = [
  {
    icon: <ProductionIcon />,
    title: 'Producción Musical',
    description: 'Damos vida a tus ideas, desde la composición inicial hasta el arreglo final, creando la base perfecta para tu canción.',
  },
  {
    icon: <RecordingIcon />,
    title: 'Grabación Profesional',
    description: 'Capturamos cada matiz de tu interpretación con micrófonos y equipos de alta gama en un entorno acústicamente tratado.',
  },
  {
    icon: <MixingIcon />,
    title: 'Mezcla de Audio',
    description: 'Equilibramos y procesamos cada pista para lograr una cohesión sonora impecable, con claridad, profundidad y pegada.',
  },
  {
    icon: <MasteringIcon />,
    title: 'Masterización',
    description: 'El toque final para que tu música suene potente, pulida y optimizada para todas las plataformas de streaming y formatos.',
  },
];

const Services: React.FC = () => {
  return (
    <Section id="servicios" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Nuestros Servicios</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Ofrecemos un espectro completo de servicios de producción para llevar tu sonido al siguiente nivel.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-300">
              <div className="text-amber-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
