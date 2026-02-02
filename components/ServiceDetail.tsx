import React from 'react';
import { ArrowLeft, Check, Clock, Banknote, ChevronRight } from 'lucide-react';
import { SERVICES, PROJECTS } from '../constants';
import { Button } from './Button';
import { Service } from '../types';

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onConsultationClick: () => void;
  onViewProject: (projectId: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  serviceId,
  onBack,
  onConsultationClick,
  onViewProject
}) => {
  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-4xl font-playfair mb-8">Service not found</h1>
        <Button onClick={onBack}>Back to Services</Button>
      </div>
    );
  }

  // Get related projects based on service type
  const getRelatedProjects = () => {
    // Simple matching logic - in real app would be more sophisticated
    return PROJECTS.slice(0, 3);
  };

  const relatedProjects = getRelatedProjects();

  return (
    <div className="animate-in fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative container mx-auto px-6 md:px-12 pb-16 text-white">
          {/* Breadcrumb */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Services
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{service.icon}</span>
            <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold">
              {service.shortTitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-white/80 max-w-3xl leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Banknote size={18} className="text-[#C9A96E]" />
              <span>{service.investmentRange}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={18} className="text-[#C9A96E]" />
              <span>{service.timeline}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
                WHAT'S INCLUDED
              </span>
              <h2 className="text-4xl font-playfair font-bold mb-8">
                Our {service.shortTitle} Package
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-[#F5F1E8] rounded-xl"
                  >
                    <div className="w-6 h-6 bg-[#C9A96E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-[#1A1A1A] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Ready to Transform Your Space?
              </h3>
              <p className="text-white/70 mb-8">
                Book a free consultation to discuss your {service.shortTitle.toLowerCase()} project
                with our expert design team.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A96E]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A96E]">1</span>
                  </div>
                  <span>Free site visit & assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A96E]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A96E]">2</span>
                  </div>
                  <span>Concept design & 3D visualization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#C9A96E]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#C9A96E]">3</span>
                  </div>
                  <span>Detailed proposal & timeline</span>
                </div>
              </div>

              <Button variant="primary-large" className="w-full" onClick={onConsultationClick}>
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
              OUR WORK
            </span>
            <h2 className="text-4xl font-playfair font-bold">
              Related Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map(project => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
                onClick={() => onViewProject(project.id)}
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#C9A96E] text-xs uppercase tracking-widest mb-2">
                    {project.location}
                  </div>
                  <h3 className="text-xl font-playfair font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-[#C9A96E] font-medium text-sm">
                    View Project <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" onClick={onBack}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-playfair font-bold text-center mb-12">
            Explore Other Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.filter(s => s.id !== serviceId).map(otherService => (
              <button
                key={otherService.id}
                onClick={() => onViewProject(otherService.id)}
                className="flex items-center gap-4 p-6 bg-[#F5F1E8] rounded-xl hover:bg-[#C9A96E] hover:text-white transition-all group text-left"
              >
                <span className="text-3xl">{otherService.icon}</span>
                <div>
                  <div className="font-bold">{otherService.shortTitle}</div>
                  <div className="text-sm opacity-70 group-hover:opacity-90">
                    {otherService.timeline}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
