import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 2,
};

const serviceIconProps = {
    ...iconProps,
    className: "w-12 h-12 mx-auto",
};

export const MenuIcon: React.FC = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
);

export const XIcon: React.FC = () => (
  <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

export const ProductionIcon: React.FC = () => (
    <svg {...serviceIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3" /></svg>
);

export const RecordingIcon: React.FC = () => (
    <svg {...serviceIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
);

export const MixingIcon: React.FC = () => (
    <svg {...serviceIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const MasteringIcon: React.FC = () => (
    <svg {...serviceIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
);

export const QuoteIcon: React.FC = () => (
    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10.25 4.938c-2.344 0-4.25 1.906-4.25 4.25v2.813c0 1.031.844 1.875 1.875 1.875h1.25c.516 0 .938.422.938.938s-.422.938-.938.938h-1.25c-2.063 0-3.75-1.688-3.75-3.75V9.188c0-3.469 2.813-6.281 6.281-6.281h1.906c.516 0 .938.422.938.938s-.422.938-.938.938h-1.906zM20.063 4.938c-2.344 0-4.25 1.906-4.25 4.25v2.813c0 1.031.844 1.875 1.875 1.875h1.25c.516 0 .938.422.938.938s-.422.938-.938.938h-1.25c-2.063 0-3.75-1.688-3.75-3.75V9.188c0-3.469 2.813-6.281 6.281-6.281h1.906c.516 0 .938.422.938.938s-.422.938-.938.938h-1.906z" />
    </svg>
);

const playerIconProps = (size: 'large' | 'small' = 'large') => ({
    className: size === 'large' ? "w-10 h-10" : "w-6 h-6",
    fill: "currentColor",
    viewBox: "0 0 24 24",
});

interface PlayerIconProps {
  size?: 'large' | 'small';
}

export const PlayIcon: React.FC<PlayerIconProps> = ({ size }) => (
  <svg {...playerIconProps(size)}><path d="M8 5v14l11-7z" /></svg>
);

export const PauseIcon: React.FC<PlayerIconProps> = ({ size }) => (
    <svg {...playerIconProps(size)}><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
);

export const VolumeHighIcon: React.FC = () => (
    <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2.5a.75.75 0 0 0-1.01.638v13.724a.75.75 0 0 0 1.01.638L16.2 12.5h1.55a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-.75-.75H16.2L10 2.5zM12.5 7.118l2.5 1.632v.5l-2.5 1.632V7.118z"></path>
    </svg>
);
  
export const VolumeMuteIcon: React.FC = () => (
    <svg {...iconProps} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.49 2.5a.75.75 0 0 0-1.01.638v13.724a.75.75 0 0 0 1.01.638L16.2 12.5h1.55a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-.75-.75H16.2L9.49 2.5z"></path>
    </svg>
);

export const SubtitlesIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm4 3a.5.5 0 000 1h6a.5.5 0 000-1H7zm-1.5 3a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm4 0a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clipRule="evenodd" />
    </svg>
);

export const SearchIcon: React.FC = () => (
    <svg {...iconProps} className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const FullscreenIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m-4.5 11.25h4.5m-4.5 0v-4.5m0 4.5L9 15m11.25 4.5v-4.5m0 4.5h-4.5m4.5 0L15 15" />
  </svg>
);

export const FullscreenExitIcon: React.FC = () => (
  <svg {...iconProps}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
  </svg>
);

const socialIconProps = {
    ...iconProps,
    className: "w-8 h-8",
};

export const InstagramIcon: React.FC = () => (
    <svg {...socialIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.583c-3.189 0-3.551.012-4.809.07-2.61.119-3.79 1.29-3.909 3.909-.058 1.258-.07 1.62-.07 4.809s.012 3.551.07 4.809c.119 2.61 1.29 3.79 3.909 3.909 1.258.058 1.62.07 4.809.07s3.551-.012 4.809-.07c2.61-.119 3.79-1.29 3.909-3.909.058-1.258.07-1.62.07-4.809s-.012-3.551-.07-4.809c-.119-2.61-1.29-3.79-3.909-3.909C15.551 3.758 15.189 3.746 12 3.746zM12 9.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm0 7.5a4.75 4.75 0 110-9.5 4.75 4.75 0 010 9.5zM16.5 6.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" /></svg>
);

export const YouTubeIcon: React.FC = () => (
    <svg {...socialIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M21.3,7.5c-0.3-1.1-1.1-2-2.2-2.3C17.6,5,12,5,12,5s-5.6,0-7.1,0.2C3.8,5.5,3,6.4,2.7,7.5C2.5,8.8,2.5,12,2.5,12s0,3.2,0.2,4.5c0.3,1.1,1.1,2,2.2,2.3C6.4,19,12,19,12,19s5.6,0,7.1-0.2c1.1-0.3,2-1.1,2.3-2.3C21.5,15.2,21.5,12,21.5,12S21.5,8.8,21.3,7.5z M9.9,14.5v-5l5.2,2.5L9.9,14.5z" /></svg>
);

export const SpotifyIcon: React.FC = () => (
    <svg {...socialIconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 13.52c-.22.36-0.67.48-1.03.26-2.92-1.78-6.6-2.18-10.95-.91-.42.09-.84-.15-.92-.58-.09-.42.15-.84.58-.92 4.7-1.37 8.84-0.93 12.06.98.36.22.48.67.26 1.03zm.18-2.61c-.28.44-.81.58-1.25.3-3.3-2.02-8.35-2.58-12.08-1.32-.5.15-.99-.17-1.14-.67s.17-.99.67-1.14c4.15-1.4 9.68-.8 13.43 1.48.44.28.58.81.3 1.25zm0-2.64c-3.76-2.3-9.98-2.5-13.91-1.3-.58.17-1.16-.2-1.33-.78s.2-1.16.78-1.33c4.5-1.35 11.33-1.12 15.63 1.5.53.32.74.96.42 1.49-.32.53-.96.74-1.49.42z" /></svg>
);