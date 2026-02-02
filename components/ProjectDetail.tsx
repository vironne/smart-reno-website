import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Home,
  Calendar,
  Clock,
  Palette,
  Banknote,
  Quote,
  Wrench,
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS, PROCESS_STEPS } from '../constants';
import { Button } from './Button';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
  onConsultationClick: () => void;
  onViewProject: (projectId: string) => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  onBack,
  onConsultationClick,
  onViewProject
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeRoom, setActiveRoom] = useState(0);

  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-playfair mb-8">Project not found</h1>
        <Button onClick={onBack}>Back to Portfolio</Button>
      </div>
    );
  }

  const gallery = project.gallery || [project.afterImage, project.beforeImage];
  const relatedProjects = PROJECTS.filter(p =>
    p.id !== projectId && p.location === project.location
  ).slice(0, 3);

  // If not enough related by location, add others
  if (relatedProjects.length < 3) {
    const otherProjects = PROJECTS.filter(p =>
      p.id !== projectId && !relatedProjects.find(r => r.id === p.id)
    ).slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...otherProjects);
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="animate-in fade-in">
      {/* Hero Gallery Section */}
      <section className="relative h-[70vh] min-h-[500px] bg-black">
        {/* Main Image */}
        <div className="relative h-full">
          <img
            src={gallery[currentImageIndex]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {gallery.length}
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {gallery.slice(0, 6).map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentImageIndex ? 'border-[#C9A96E] scale-110' : 'border-white/30 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
            {gallery.length > 6 && (
              <div className="w-16 h-12 rounded-lg bg-black/50 flex items-center justify-center text-white text-sm">
                +{gallery.length - 6}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
                {project.location}
              </span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                {project.title}
              </h1>
              {project.description && (
                <p className="text-xl text-[#707070] leading-relaxed mb-8">
                  {project.description}
                </p>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#F5F1E8] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#C9A96E] mb-2">
                    <Banknote size={18} />
                    <span className="text-xs uppercase tracking-wider">Investment</span>
                  </div>
                  <div className="font-bold text-lg">{project.investment}</div>
                </div>
                <div className="bg-[#F5F1E8] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#C9A96E] mb-2">
                    <Clock size={18} />
                    <span className="text-xs uppercase tracking-wider">Timeline</span>
                  </div>
                  <div className="font-bold text-lg">{project.timeline}</div>
                </div>
                <div className="bg-[#F5F1E8] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#C9A96E] mb-2">
                    <Palette size={18} />
                    <span className="text-xs uppercase tracking-wider">Style</span>
                  </div>
                  <div className="font-bold text-lg">{project.style}</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl sticky top-24">
                <h3 className="text-xl font-playfair font-bold mb-6">Project Details</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#C9A96E]" />
                    <div>
                      <div className="text-xs text-white/60 uppercase">Location</div>
                      <div className="font-medium">{project.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home size={18} className="text-[#C9A96E]" />
                    <div>
                      <div className="text-xs text-white/60 uppercase">Property Type</div>
                      <div className="font-medium">{project.propertyType || 'Villa'}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-[#C9A96E]" />
                    <div>
                      <div className="text-xs text-white/60 uppercase">Completion</div>
                      <div className="font-medium">{project.completion || '2024'}</div>
                    </div>
                  </div>
                </div>

                <Button variant="primary-large" className="w-full" onClick={onConsultationClick}>
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After by Room */}
      {project.rooms && project.rooms.length > 0 && (
        <section className="py-20 bg-[#F5F1E8]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
                ROOM BY ROOM
              </span>
              <h2 className="text-4xl font-playfair font-bold">Before & After</h2>
            </div>

            {/* Room Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {project.rooms.map((room, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveRoom(idx)}
                  className={`px-6 py-3 rounded-full transition-all ${
                    activeRoom === idx
                      ? 'bg-[#C9A96E] text-white'
                      : 'bg-white border border-gray-200 hover:border-[#C9A96E]'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>

            {/* Active Room Before/After */}
            <div className="max-w-5xl mx-auto">
              <BeforeAfterSlider
                before={project.rooms[activeRoom].beforeImage}
                after={project.rooms[activeRoom].afterImage}
                className="h-[500px] shadow-2xl rounded-2xl overflow-hidden"
              />
              {project.rooms[activeRoom].description && (
                <p className="text-center text-[#707070] mt-6 text-lg">
                  {project.rooms[activeRoom].description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-[#1A1A1A] text-white">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <Quote size={48} className="text-[#C9A96E] mx-auto mb-8 opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-playfair italic leading-relaxed mb-8">
              "{project.testimonial.quote}"
            </blockquote>
            <div>
              <div className="font-bold text-lg">{project.testimonial.author}</div>
              {project.testimonial.role && (
                <div className="text-[#C9A96E]">{project.testimonial.role}</div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Materials Used */}
      {project.materials && project.materials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
                PREMIUM SELECTIONS
              </span>
              <h2 className="text-4xl font-playfair font-bold">Materials & Finishes</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {project.materials.map((material, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F1E8] p-6 rounded-xl text-center hover:bg-[#C9A96E] hover:text-white transition-all cursor-default"
                >
                  <CheckCircle2 size={24} className="mx-auto mb-3 text-[#C9A96E]" />
                  <span className="font-medium">{material}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="py-20 bg-[#F5F1E8]">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
                EXPERTISE IN ACTION
              </span>
              <h2 className="text-4xl font-playfair font-bold">Challenges & Solutions</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {project.challenges.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Wrench size={20} className="text-red-500" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-red-500 font-bold">Challenge</span>
                  </div>
                  <p className="text-[#707070] mb-6">{item.challenge}</p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Lightbulb size={20} className="text-green-500" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-green-500 font-bold">Solution</span>
                  </div>
                  <p className="text-[#1A1A1A] font-medium">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
              HOW WE WORK
            </span>
            <h2 className="text-4xl font-playfair font-bold">Our Seamless Process</h2>
            <p className="text-[#707070] mt-4 max-w-2xl mx-auto">
              Every project follows our proven 4-step methodology, refined over 50 years of Italian craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-20 h-20 bg-[#F5F1E8] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-[#C9A96E] transition-all">
                  {step.icon}
                </div>
                <div className="text-[#C9A96E] text-sm font-bold mb-2">STEP {idx + 1}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-[#707070] text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
              MORE INSPIRATION
            </span>
            <h2 className="text-4xl font-playfair font-bold">Related Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedProjects.map(related => (
              <div
                key={related.id}
                className="group cursor-pointer"
                onClick={() => onViewProject(related.id)}
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={related.afterImage}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all" />
                </div>
                <div className="text-[#C9A96E] text-xs uppercase tracking-widest mb-2">
                  {related.location}
                </div>
                <h3 className="text-xl font-playfair font-bold group-hover:text-[#C9A96E] transition-colors">
                  {related.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-[#C9A96E] to-[#B8956A] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Transform Your Villa?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your free consultation with our design team and start your journey to a bespoke home.
          </p>
          <Button variant="white" className="px-12 py-5 text-lg" onClick={onConsultationClick}>
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};
