import React from 'react';
import { Image, PlayCircle } from 'lucide-react';

interface PlaceholderProps {
  label: string;
  className?: string;
  height?: string;
  icon?: 'image' | 'video';
  src?: string; // Image or video source path
  alt?: string; // Alt text for images
}

const Placeholder: React.FC<PlaceholderProps> = ({ 
  label, 
  className = "", 
  height = "h-full", 
  icon = 'image',
  src,
  alt
}) => {
  // If source is provided, show the actual media
  if (src) {
    if (icon === 'video') {
      return (
        <div className={`w-full ${height} relative overflow-hidden ${className}`}>
          <video 
            src={src} 
            className="w-full h-full object-cover"
            controls
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      );
    } else {
      return (
        <div className={`w-full ${height} relative overflow-hidden ${className}`}>
          <img 
            src={src} 
            alt={alt || label}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      );
    }
  }

  // Fallback to placeholder UI if no source provided
  return (
    <div className={`w-full ${height} bg-stone-100 border border-stone-200 rounded-sm flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-stone-200 group relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-stone-500/0 group-hover:bg-stone-500/5 transition-colors duration-300"></div>
      
      {icon === 'video' ? (
        <PlayCircle className="w-8 h-8 text-stone-300 mb-3 group-hover:text-stone-400 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
      ) : (
        <Image className="w-8 h-8 text-stone-300 mb-3 group-hover:text-stone-400 group-hover:scale-110 transition-all duration-300" strokeWidth={1.5} />
      )}
      
      <span className="text-stone-400 font-mono text-xs uppercase tracking-widest text-center group-hover:text-stone-500 transition-colors select-none z-10">
        {label}
      </span>
    </div>
  );
};

export default Placeholder;