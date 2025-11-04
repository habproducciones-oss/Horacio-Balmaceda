
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { QuoteIcon } from './icons';

const testimonials = [
  {
    quote: "HABPRODUCCIONES transformó mi visión en una realidad sonora. La calidad y profesionalismo son de otro nivel. ¡Mi EP nunca sonó mejor!",
    name: "Elena Ríos",
    role: "Artista Solista",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    quote: "El proceso de mezcla y masterización fue impecable. Entendieron perfectamente el sonido que buscábamos y superaron nuestras expectativas.",
    name: "Carlos Vera",
    role: "Baterista, Banda 'Nómadas'",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
  },
  {
    quote: "Como productor, valoro un estudio que se sienta como en casa pero con equipo de punta. HABPRODUCCIONES es ese lugar. ¡Volveré pronto!",
    name: "Sofía Martínez",
    role: "Productora y DJ",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // FIX: Replace NodeJS.Timeout with ReturnType<typeof setTimeout> for browser compatibility.
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      5000 // Cambia el testimonio cada 5 segundos
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <Section id="testimonios" className="py-20 md:py-32">
      <div
        className="container mx-auto px-6 text-center"
        onMouseEnter={resetTimeout} // Pausa al pasar el ratón
        onMouseLeave={() => { // Reanuda al salir
          timeoutRef.current = setTimeout(
            () =>
              setActiveIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
              ),
            2000 // Reanudar después de 2 segundos
          );
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Lo que dicen nuestros clientes</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          El éxito de nuestros artistas es nuestro mayor orgullo.
        </p>

        {/* Vista previa del testimonio principal */}
        <div className="relative max-w-3xl mx-auto min-h-[350px] flex items-center justify-center">
            <div key={activeIndex} className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 text-left flex flex-col w-full animate-fade-in">
              <div className="text-amber-400 mb-4">
                <QuoteIcon />
              </div>
              <blockquote className="text-gray-300 italic mb-6 flex-grow text-lg">
                "{activeTestimonial.quote}"
              </blockquote>
              <footer className="flex items-center">
                <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-white">{activeTestimonial.name}</p>
                  <p className="text-gray-400 text-sm">{activeTestimonial.role}</p>
                </div>
              </footer>
            </div>
        </div>

        {/* Avatares de vista previa */}
        <div className="flex justify-center space-x-4 mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-14 h-14 rounded-full overflow-hidden focus:outline-none transition-all duration-300 ${
                index === activeIndex
                  ? 'ring-2 ring-offset-2 ring-offset-black ring-amber-400 scale-110'
                  : 'opacity-50 hover:opacity-100 hover:scale-105'
              }`}
              aria-label={`Ver testimonio de ${testimonial.name}`}
            >
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
