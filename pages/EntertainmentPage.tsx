
import React, { useState, useEffect } from 'react';
import { useVideos } from '../hooks/useVideos';
import { FilmIcon, XIcon } from '../components/icons';
import { EntertainmentVideo } from '../types';

const EntertainmentPage: React.FC = () => {
  const { videos } = useVideos();
  const [selectedVideo, setSelectedVideo] = useState<EntertainmentVideo | null>(null);

  useEffect(() => {
    // Handle 'Escape' key to close video modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-md mb-8 text-center">
        <FilmIcon className="w-16 h-16 mx-auto text-secondary mb-4" />
        <h1 className="text-3xl font-bold text-dark-text">Meels</h1>
        <p className="text-dark-text/90 mt-2">Enjoy these short meels on as reels cooking tips, recipes, and food hacks!</p>
      </div>
      
      {videos.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {videos.map(video => (
            <div 
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedVideo(video); }}
              tabIndex={0}
              role="button"
              aria-label={`Play video: ${video.title}`}
              className="group relative aspect-[9/16] overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-bold text-sm md:text-base leading-tight">{video.title}</h3>
              </div>
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
          <FilmIcon className="w-20 h-20 mx-auto text-dark-text/30 mb-4" />
          <h2 className="text-2xl font-semibold text-dark-text">No Meels Available Yet</h2>
          <p className="text-dark-text/75 mt-2">Check back later for cooking tips and food stories!</p>
        </div>
      )}

      {/* Video Modal - Improved */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedVideo(null)}
          aria-modal="true"
          role="dialog"
        >
          <style>{`
            @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
            .animate-fade-in { animation: fade-in 0.3s ease-out; }
          `}</style>
          
          <div
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <video 
              className="w-full max-h-[90vh] object-contain rounded-lg"
              src={selectedVideo.url} 
              controls 
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
          </div>

          <button 
            onClick={() => setSelectedVideo(null)}
            className="absolute top-4 right-4 p-2 rounded-full text-white bg-black/30 hover:bg-white/20 transition-colors"
            aria-label="Close video player"
          >
            <XIcon className="w-6 h-6" />
          </button>

        </div>
      )}
    </div>
  );
};

export default EntertainmentPage;
