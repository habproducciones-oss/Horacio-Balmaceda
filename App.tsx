import React from 'react';
import { logoBase64 } from './components/assets';

const App = () => {
    const css = `
        /* --- Reset and Global Styles --- */
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            font-family: 'Poppins', sans-serif;
            background-color: #000;
            color: #E5E7EB; /* Corresponds to text-gray-200 */
        }

        ::selection {
            background-color: #f59e0b; /* Corresponds to amber-400 */
            color: #000;
        }

        /* --- Main Container --- */
        .container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 1.5rem;
            background-image: linear-gradient(to bottom, #111827, #000000); /* Gradient from gray-900 to black */
            box-sizing: border-box;
        }

        /* --- Animations --- */
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }

        /* --- Page Elements --- */
        .logo {
            height: 8rem; /* 128px */
            width: auto;
            margin-bottom: 1.5rem;
        }

        h1 {
            font-size: 3rem; /* 48px */
            font-weight: 700;
            color: #FFFFFF;
            letter-spacing: -0.025em;
            margin-bottom: 0.75rem;
            text-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .slogan {
            font-size: 1.25rem; /* 20px */
            color: #f59e0b; /* amber-400 */
            font-weight: 300;
            font-style: italic;
            letter-spacing: 0.05em;
            margin-bottom: 2rem;
        }

        .coming-soon-text {
            font-size: 1.125rem; /* 18px */
            color: #D1D5DB; /* gray-300 */
            margin-bottom: 3rem;
        }

        /* --- Social Icons --- */
        .social-links {
            display: flex;
            justify-content: center;
        }

        .social-links a {
            margin: 0 1rem; /* space-x-8 equivalent */
            color: #9CA3AF; /* gray-400 */
            transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-links a:hover {
            color: #f59e0b; /* amber-400 */
            transform: scale(1.1);
        }

        .social-links svg {
            width: 2rem; /* w-8 */
            height: 2rem; /* h-8 */
            fill: currentColor;
        }

        /* --- Responsive Design --- */
        @media (min-width: 768px) {
            h1 {
                font-size: 4.5rem; /* 72px */
            }
            .slogan {
                font-size: 1.5rem; /* 24px */
            }
        }
    `;

    return (
        <>
            <style>{css}</style>
            <div className="container">
                
                <img 
                    src={logoBase64} 
                    alt="HABPRODUCCIONES Logo" 
                    className="logo fade-in"
                    style={{ animationDelay: '0.2s' }}
                />
                
                <h1 className="fade-in" style={{ animationDelay: '0.4s' }}>
                    HABPRODUCCIONES
                </h1>
                
                <p className="slogan fade-in" style={{ animationDelay: '0.6s' }}>
                    La música primero
                </p>
                
                <p className="coming-soon-text fade-in" style={{ animationDelay: '0.8s' }}>
                    Nuestro sitio web completo estará disponible próximamente.
                </p>

                <div className="social-links fade-in" style={{ animationDelay: '1s' }}>
                    <a href="https://www.instagram.com/habproducciones" target="_blank" rel="noopener noreferrer" aria-label="Instagram de HABPRODUCCIONES">
                        {/* FIX: Convert SVG attributes to camelCase for JSX */}
                        <svg viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.583c-3.189 0-3.551.012-4.809.07-2.61.119-3.79 1.29-3.909 3.909-.058 1.258-.07 1.62-.07 4.809s.012 3.551.07 4.809c.119 2.61 1.29 3.79 3.909 3.909 1.258.058 1.62.07 4.809.07s3.551-.012 4.809-.07c2.61-.119 3.79-1.29 3.909-3.909.058-1.258.07-1.62.07-4.809s-.012-3.551-.07-4.809c-.119-2.61-1.29-3.79-3.909-3.909C15.551 3.758 15.189 3.746 12 3.746zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 7.5a4.75 4.75 0 110-9.5 4.75 4.75 0 010 9.5zM16.5 6.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"></path></svg>
                    </a>
                    <a href="https://www.youtube.com/@habproducciones" target="_blank" rel="noopener noreferrer" aria-label="YouTube de HABPRODUCCIONES">
                        <svg viewBox="0 0 24 24"><path d="M21.3,7.5c-0.3-1.1-1.1-2-2.2-2.3C17.6,5,12,5,12,5s-5.6,0-7.1,0.2C3.8,5.5,3,6.4,2.7,7.5C2.5,8.8,2.5,12,2.5,12s0,3.2,0.2,4.5c0.3,1.1,1.1,2,2.2,2.3C6.4,19,12,19,12,19s5.6,0,7.1-0.2c1.1-0.3,2-1.1,2.3-2.3C21.5,15.2,21.5,12,21.5,12S21.5,8.8,21.3,7.5z M9.9,14.5v-5l5.2,2.5L9.9,14.5z"></path></svg>
                    </a>
                    <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify de HABPRODUCCIONES">
                        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 13.52c-.22.36-0.67.48-1.03.26-2.92-1.78-6.6-2.18-10.95-.91-.42.09-.84-.15-.92-.58-.09-.42.15-.84.58-.92 4.7-1.37 8.84-0.93 12.06.98.36.22.48.67.26 1.03zm.18-2.61c-.28.44-.81.58-1.25.3-3.3-2.02-8.35-2.58-12.08-1.32-.5.15-.99-.17-1.14-.67s.17-.99.67-1.14c4.15-1.4 9.68-.8 13.43 1.48.44.28.58.81.3 1.25zm0-2.64c-3.76-2.3-9.98-2.5-13.91-1.3-.58.17-1.16-.2-1.33-.78s.2-1.16.78-1.33c4.5-1.35 11.33-1.12 15.63 1.5.53.32.74.96.42 1.49-.32.53-.96.74-1.49.42z"></path></svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default App;
