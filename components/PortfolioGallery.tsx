import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Clock, X } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface PortfolioGalleryProps {
  onFavoritesThresholdReached: () => void;
  hasSubmittedEmail: boolean;
}

const FAVORITES_THRESHOLD = 10;
const STORAGE_KEY = 'smartreno_favorites';

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onFavoritesThresholdReached,
  hasSubmittedEmail
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hasTriggeredModal, setHasTriggeredModal] = useState(false);

  const locations = ['All', ...Array.from(new Set(PROJECTS.map(p => p.location)))];

  // Load favorites from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
    const modalTriggered = localStorage.getItem('smartreno_modal_triggered');
    if (modalTriggered) {
      setHasTriggeredModal(true);
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  // Check if threshold reached
  useEffect(() => {
    if (favorites.length >= FAVORITES_THRESHOLD && !hasSubmittedEmail && !hasTriggeredModal) {
      setHasTriggeredModal(true);
      localStorage.setItem('smartreno_modal_triggered', 'true');
      onFavoritesThresholdReached();
    }
  }, [favorites, hasSubmittedEmail, hasTriggeredModal, onFavoritesThresholdReached]);

  const toggleFavorite = (projectId: string) => {
    setFavorites(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.location === filter);

  return (
    <div className="animate-in fade-in py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
            OUR WORK
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-[#707070] max-w-2xl mx-auto text-lg">
            Explore our collection of luxury villa transformations across Dubai's premier communities.
            <span className="block mt-2 text-[#C9A96E] font-medium">
              ❤️ Save your favorites to create your inspiration board
            </span>
          </p>
        </div>

        {/* Favorites Counter */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#1A1A1A] text-white px-6 py-3 rounded-full flex items-center gap-3">
            <Heart size={20} className={favorites.length > 0 ? 'fill-red-500 text-red-500' : ''} />
            <span className="font-medium">
              {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}
              {!hasSubmittedEmail && favorites.length < FAVORITES_THRESHOLD && (
                <span className="text-white/60 ml-2">
                  ({FAVORITES_THRESHOLD - favorites.length} more to unlock your board)
                </span>
              )}
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {locations.map(loc => (
            <button
              key={loc}
              onClick={() => setFilter(loc)}
              className={`px-6 py-2 rounded-full border transition-all ${
                filter === loc
                  ? 'bg-[#C9A96E] text-white border-[#C9A96E]'
                  : 'border-gray-200 hover:border-[#C9A96E] bg-white'
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => {
            const isFavorite = favorites.includes(project.id);
            return (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <div
                  className="relative h-[300px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* View Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 text-[#1A1A1A] px-6 py-2 rounded-full font-medium text-sm">
                      View Details
                    </span>
                  </div>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(project.id);
                  }}
                  className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isFavorite
                      ? 'bg-red-500 text-white scale-110'
                      : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart size={22} className={isFavorite ? 'fill-current' : ''} />
                </button>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#C9A96E] text-xs uppercase tracking-widest mb-2">
                    <MapPin size={14} />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-3">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm text-[#707070]">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {project.timeline}
                    </span>
                    <span className="font-semibold text-[#1A1A1A]">{project.investment}</span>
                  </div>
                  <div className="mt-3 text-xs text-[#C9A96E] font-medium uppercase tracking-wider">
                    {project.style}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.afterImage}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
                <button
                  onClick={() => toggleFavorite(selectedProject.id)}
                  className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    favorites.includes(selectedProject.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart size={20} className={favorites.includes(selectedProject.id) ? 'fill-current' : ''} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-[#C9A96E] text-sm uppercase tracking-widest mb-3">
                  <MapPin size={16} />
                  {selectedProject.location}
                </div>
                <h2 className="text-3xl font-playfair font-bold mb-4">{selectedProject.title}</h2>
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#F5F1E8] p-4 rounded-xl text-center">
                    <div className="text-xs text-[#707070] uppercase mb-1">Investment</div>
                    <div className="font-bold text-lg">{selectedProject.investment}</div>
                  </div>
                  <div className="bg-[#F5F1E8] p-4 rounded-xl text-center">
                    <div className="text-xs text-[#707070] uppercase mb-1">Timeline</div>
                    <div className="font-bold text-lg">{selectedProject.timeline}</div>
                  </div>
                  <div className="bg-[#F5F1E8] p-4 rounded-xl text-center">
                    <div className="text-xs text-[#707070] uppercase mb-1">Style</div>
                    <div className="font-bold text-lg">{selectedProject.style}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-[#707070] uppercase mb-2">Before</div>
                    <img
                      src={selectedProject.beforeImage}
                      alt="Before"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-[#707070] uppercase mb-2">After</div>
                    <img
                      src={selectedProject.afterImage}
                      alt="After"
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
