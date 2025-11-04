
import React from 'react';
import { InstagramIcon, YouTubeIcon, SpotifyIcon } from './icons';
import { logoBase64 } from './assets';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="flex justify-center mb-6">
            <img src={logoBase64} alt="HABPRODUCCIONES Logo" className="h-20 w-auto" />
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.instagram.com/habproducciones" target="_blank" rel="noopener noreferrer" aria-label="Instagram de HABPRODUCCIONES" className="hover:text-amber-400 transition-colors"><InstagramIcon /></a>
          <a href="https://www.youtube.com/@habproducciones" target="_blank" rel="noopener noreferrer" aria-label="YouTube de HABPRODUCCIONES" className="hover:text-amber-400 transition-colors"><YouTubeIcon /></a>
          <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify de HABPRODUCCIONES" className="hover:text-amber-400 transition-colors"><SpotifyIcon /></a>
        </div>
        <p>&copy; {currentYear} HABPRODUCCIONES. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-500 mt-2">Diseñado con pasión musical</p>
      </div>
    </footer>
  );
};

export default Footer;
