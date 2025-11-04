import React, { useRef, useState, useEffect } from 'react';
import Section from './Section';
import GalleryImage from './GalleryImage';
import { PlayIcon, PauseIcon, VolumeHighIcon, VolumeMuteIcon, XIcon, SubtitlesIcon, SearchIcon, FullscreenIcon, FullscreenExitIcon } from './icons';

const vttContent = `WEBVTT

00:00:02.000 --> 00:00:05.500
(Música ambiental de estudio)

00:00:07.000 --> 00:00:10.000
Este es HABPRODUCCIONES.

00:00:11.500 --> 00:00:14.500
Donde tus ideas se convierten en sonido.
`;
const vttDataUrl = `data:text/vtt;base64,${btoa(vttContent)}`;


const videos = [
  { 
      src: "https://videos.pexels.com/video-files/853825/853825-hd_1280_720_25fps.mp4", 
      poster: "https://images.pexels.com/videos/853825/pexels-photo-853825.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Estudio de Grabación",
      subtitlesSrc: vttDataUrl,
      description: "Un vistazo a nuestro equipo de grabación de alta fidelidad.",
  },
  { 
      src: "https://videos.pexels.com/video-files/2099392/2099392-hd_1280_720_24fps.mp4", 
      poster: "https://images.pexels.com/videos/2099392/pictures/pexels-photo-2099392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Mezcla en Vivo",
      description: "Técnicos de sonido ajustando niveles en una consola de mezclas para un evento en directo."
  },
  { 
      src: "https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4", 
      poster: "https://images.pexels.com/videos/3209828/pictures/pexels-photo-3209828.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Producción Electrónica",
      description: "Creando beats y sintetizadores para la próxima pista de baile."
  },
  { 
      src: "https://videos.pexels.com/video-files/3254006/3254006-hd_1280_720_25fps.mp4", 
      poster: "https://images.pexels.com/videos/3254006/pexels-photo-3254006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "DJ Mezclando",
      description: "Un DJ en acción, mezclando pistas para una multitud enérgica."
  },
  { 
      src: "https://videos.pexels.com/video-files/1739029/1739029-hd_1280_720_25fps.mp4", 
      poster: "https://images.pexels.com/videos/1739029/pexels-photo-1739029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Melodía de Piano",
      description: "Primer plano de manos tocando una hermosa melodía en el piano."
  },
  { 
      src: "https://videos.pexels.com/video-files/5966329/5966329-hd_1280_720_25fps.mp4", 
      poster: "https://images.pexels.com/videos/5966329/pexels-photo-5966329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Concierto en Vivo",
      description: "Capturando la energía de una banda en directo sobre el escenario."
  },
];

const images = [
  {
    src: "https://picsum.photos/600/400?random=10",
    alt: "Consola de mezcla de audio profesional",
    caption: "Nuestra consola de última generación, el corazón del estudio.",
  },
  {
    src: "https://picsum.photos/600/400?random=11",
    alt: "Micrófono de condensador en cabina de grabación",
    caption: "Capturando cada detalle con una claridad impecable.",
  },
  {
    src: "https://picsum.photos/600/400?random=12",
    alt: "Artista grabando voces en el estudio",
    caption: "Un ambiente cómodo e inspirador para la creatividad.",
  },
  {
    src: "https://picsum.photos/600/400?random=13",
    alt: "Monitores de estudio y equipo de rack",
    caption: "Precisión y potencia para una mezcla perfecta.",
  },
  {
    src: "https://picsum.photos/600/400?random=14",
    alt: "Guitarra acústica lista para ser grabada",
    caption: "Instrumentos de calidad a tu disposición.",
  },
  {
    src: "https://picsum.photos/600/400?random=15",
    alt: "Vista detallada de los faders de la consola",
    caption: "El arte de la mezcla está en los detalles.",
  },
];


interface Video {
  src: string;
  poster: string;
  title: string;
  subtitlesSrc?: string;
  description?: string;
}

interface VideoPlayerModalProps {
  video: Video;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [subtitlesVisible, setSubtitlesVisible] = useState(!!video.subtitlesSrc);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.play().catch(error => console.error("Error al intentar reproducir:", error));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.textTracks.length > 0) {
      videoEl.textTracks[0].mode = subtitlesVisible ? 'showing' : 'hidden';
    }
  }, [subtitlesVisible]);

  const handleClose = () => {
    setIsMounted(false);
    setTimeout(onClose, 300); // Match transition duration
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch(error => console.error("Error al intentar reproducir:", error));
      } else {
        video.pause();
      }
    }
  };
  
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(video.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setIsMuted(video.muted);
    }
  };

  const handleProgressSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const seekTime = (Number(e.target.value) / 100) * video.duration;
      video.currentTime = seekTime;
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if(video) {
      const newVolume = Number(e.target.value);
      video.volume = newVolume;
      setVolume(newVolume);
      const muted = newVolume === 0;
      video.muted = muted;
      setIsMuted(muted);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
        if(!video.muted && video.volume === 0){
            video.volume = 1;
            setVolume(1);
        }
    }
  };

  const toggleSubtitles = () => {
    const videoEl = videoRef.current;
    if (videoEl && videoEl.textTracks.length > 0) {
      setSubtitlesVisible(prev => !prev);
    }
  };

  const toggleFullscreen = () => {
    const elem = playerContainerRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);
      
      video.addEventListener('play', onPlay);
      video.addEventListener('pause', onPause);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);

      setSubtitlesVisible(!!video.src);

      return () => {
        video.pause();
        video.removeEventListener('play', onPlay);
        video.removeEventListener('pause', onPause);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [video.src]);

  return (
    <div 
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-title"
    >
      <div 
        ref={playerContainerRef}
        className={`relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${isMounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
      >
        <div 
          className="relative group/player"
          onMouseEnter={() => setIsControlsVisible(true)}
          onMouseLeave={() => setIsControlsVisible(false)}
        >
          <video 
              ref={videoRef}
              className="w-full aspect-video" 
              src={video.src} 
              poster={video.poster}
              loop
              playsInline
              crossOrigin="anonymous"
              onClick={togglePlay}
          >
              {video.subtitlesSrc && (
                <track
                    src={video.subtitlesSrc}
                    kind="subtitles"
                    srcLang="es"
                    label="Español"
                    default
                />
              )}
              Tu navegador no soporta el tag de video.
          </video>
          <button 
            onClick={handleClose} 
            className="absolute top-2 right-2 text-gray-300 hover:text-white bg-black/50 rounded-full p-1.5 z-20 transition-colors"
            aria-label="Cerrar reproductor"
          >
            <XIcon />
          </button>
          
          {/* Custom Controls */}
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${isControlsVisible || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress bar */}
            <input 
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleProgressSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400 mb-2"
              aria-label="Barra de progreso del video"
            />
            <div className="flex items-center gap-4 text-white">
              {/* Left Controls */}
              <button onClick={togglePlay} className="hover:text-amber-400" aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}>
                {isPlaying ? <PauseIcon size="small" /> : <PlayIcon size="small" />}
              </button>
              <div className="flex items-center gap-2">
                <button onClick={toggleMute} className="hover:text-amber-400" aria-label={isMuted || volume === 0 ? 'Activar sonido' : 'Silenciar'}>
                  {isMuted || volume === 0 ? <VolumeMuteIcon /> : <VolumeHighIcon />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  aria-label="Control de volumen"
                />
              </div>

              {/* Right Controls */}
              <div className="ml-auto flex items-center gap-4">
                {video.subtitlesSrc && (
                  <button
                    onClick={toggleSubtitles}
                    className={`hover:text-amber-400 ${subtitlesVisible ? 'text-amber-400' : 'text-white'}`}
                    aria-label={subtitlesVisible ? 'Ocultar subtítulos' : 'Mostrar subtítulos'}
                  >
                    <SubtitlesIcon />
                  </button>
                )}
                <button 
                  onClick={toggleFullscreen}
                  className="hover:text-amber-400"
                  aria-label={isFullscreen ? 'Salir de pantalla completa' : 'Ver en pantalla completa'}
                >
                  {isFullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </button>
                <span className="text-xs">{formatTime(currentTime)} / {formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Gallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [visibleVideosCount, setVisibleVideosCount] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoadMore = () => {
    setVisibleVideosCount(prevCount => prevCount + 3);
  };

  const filteredVideos = videos.filter(video => {
    const query = searchQuery.toLowerCase();
    const titleMatch = video.title.toLowerCase().includes(query);
    const descriptionMatch = video.description ? video.description.toLowerCase().includes(query) : false;
    return titleMatch || descriptionMatch;
  });

  return (
    <Section id="galeria" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Galería y Portafolio</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Un vistazo a nuestro espacio creativo, los momentos que hemos capturado y ejemplos de nuestro trabajo en video.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4 md:mb-0 text-left border-l-4 border-amber-400 pl-4">Videoteca</h3>
            <div className="relative w-full md:w-auto">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Buscar videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                  aria-label="Buscar videos por título"
                />
            </div>
          </div>
          
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.slice(0, visibleVideosCount).map((video) => (
                <div 
                  key={video.src} 
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-video" 
                  onClick={() => setSelectedVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedVideo(video)}
                >
                  <img src={video.poster} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white bg-black/60 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform">
                          <PlayIcon />
                      </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-lg drop-shadow-md">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
                <p className="text-gray-400">No se encontraron videos que coincidan con tu búsqueda.</p>
            </div>
          )}

          {visibleVideosCount < filteredVideos.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="bg-amber-400 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
              >
                Cargar Más
              </button>
            </div>
          )}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 text-left border-l-4 border-amber-400 pl-4">Galería de Fotos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <GalleryImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            ))}
          </div>
        </div>

      </div>

      {selectedVideo && <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </Section>
  );
};

export default Gallery;