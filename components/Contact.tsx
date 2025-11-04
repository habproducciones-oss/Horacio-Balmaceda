
import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';

// FIX: Add declarations for Google Maps API objects on the window to resolve TypeScript errors.
declare global {
  interface Window {
    google: any;
    googleMapsScriptLoading?: boolean;
  }
}

// --- Google Map Component ---

// Coordenadas para una ubicación plausible (ej. Colonia Roma, CDMX)
const mapCenter = { lat: 19.4178, lng: -99.1646 };
const mapZoom = 15;

// Estilos para el tema oscuro del mapa
const mapStyles = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

const Map: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = () => {
            if (ref.current && window.google) {
                const map = new window.google.maps.Map(ref.current, {
                    center: mapCenter,
                    zoom: mapZoom,
                    styles: mapStyles,
                    disableDefaultUI: true,
                    zoomControl: true,
                });

                new window.google.maps.Marker({
                    position: mapCenter,
                    map: map,
                    title: "HABPRODUCCIONES",
                    icon: {
                        url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="%23fbbf24" stroke="%23000" stroke-width="1"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
                        scaledSize: new window.google.maps.Size(48, 48),
                    },
                });
            }
        };

        // FIX: Use declared window properties instead of casting to any.
        if (!window.googleMapsScriptLoading) {
            window.googleMapsScriptLoading = true;
            const scriptId = "google-maps-script";
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = `https://maps.googleapis.com/maps/api/js?v=weekly`;
                script.async = true;
                script.defer = true;
                document.head.appendChild(script);
                script.onload = () => {
                    initMap();
                };
            }
        } else if (window.google) {
            initMap();
        }

    }, []);

    return <div ref={ref} className="h-full w-full min-h-[400px] rounded-lg" aria-label="Mapa de ubicación del estudio" />;
};


// --- Contact Component ---

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (values: typeof formData) => {
    const errors = { name: '', email: '', message: '' };
    
    if (!values.name.trim()) {
      errors.name = 'El nombre es obligatorio.';
    } else if (values.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!values.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'El formato del correo electrónico no es válido.';
    }

    if (!values.message.trim()) {
      errors.message = 'El mensaje es obligatorio.';
    } else if (values.message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return errors;
  };
  
  useEffect(() => {
    setFormErrors(validate(formData));
  }, [formData]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({...prev, [name]: true}));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(formData);
    setFormErrors(validationErrors);
    
    const isFormValid = Object.values(validationErrors).every(x => x === "");

    if (isFormValid) {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <Section id="contacto" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Hablemos</h2>
          <p className="text-gray-400 mb-12">
            ¿Tienes un proyecto en mente? Cuéntanos tu idea y empecemos a crear algo increíble juntos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Columna del Formulario */}
          <div className="w-full">
            {isSubmitted ? (
              <div className="text-center bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg h-full flex items-center justify-center">
                <p>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu Nombre"
                    required
                    className={`w-full bg-gray-900 border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2  transition-all ${
                      touched.name && formErrors.name
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-700 focus:ring-amber-400'
                    }`}
                    aria-invalid={touched.name && !!formErrors.name}
                    aria-describedby="name-error"
                  />
                  {touched.name && formErrors.name && (
                    <p id="name-error" className="text-red-500 text-sm mt-1 px-1">{formErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Correo Electrónico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu Correo Electrónico"
                    required
                    className={`w-full bg-gray-900 border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 transition-all ${
                      touched.email && formErrors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-700 focus:ring-amber-400'
                    }`}
                    aria-invalid={touched.email && !!formErrors.email}
                    aria-describedby="email-error"
                  />
                  {touched.email && formErrors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1 px-1">{formErrors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Mensaje</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tu Mensaje"
                    required
                    className={`w-full bg-gray-900 border rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 transition-all ${
                        touched.message && formErrors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-700 focus:ring-amber-400'
                      }`}
                    aria-invalid={touched.message && !!formErrors.message}
                    aria-describedby="message-error"
                  ></textarea>
                  {touched.message && formErrors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1 px-1">{formErrors.message}</p>
                  )}
                </div>
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="bg-amber-400 text-black font-bold py-3 px-10 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Columna del Mapa */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Nuestra Ubicación</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Colonia Roma Norte, <br />
              Cuauhtémoc, 06700 Ciudad de México, CDMX
            </p>
            <div className="h-[405px] bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
