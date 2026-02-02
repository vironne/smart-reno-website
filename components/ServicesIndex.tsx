import React from 'react';
import { ArrowRight, Clock, Banknote } from 'lucide-react';
import { SERVICES } from '../constants';
import { Button } from './Button';

interface ServicesIndexProps {
  onNavigate: (serviceId: string) => void;
  onConsultationClick: () => void;
}

export const ServicesIndex: React.FC<ServicesIndexProps> = ({
  onNavigate,
  onConsultationClick
}) => {
  return (
    <div className="animate-in fade-in py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">
            OUR EXPERTISE
          </span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Bespoke Renovation Services
          </h1>
          <p className="text-xl text-[#707070] max-w-3xl mx-auto leading-relaxed">
            From complete villa transformations to stunning kitchens and resort-style pools,
            we deliver Italian craftsmanship across every aspect of luxury living.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onNavigate(service.id)}
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white/95 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                  {service.icon}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#707070]">
                    <Banknote size={16} className="text-[#C9A96E]" />
                    <span>{service.investmentRange}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#707070]">
                    <Clock size={16} className="text-[#C9A96E]" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                {/* Features Preview */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#707070]">
                      <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-[#C9A96E] font-medium">
                      +{service.features.length - 3} more included
                    </li>
                  )}
                </ul>

                <div className="flex items-center gap-2 text-[#C9A96E] font-semibold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#333] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation with our design team. We'll assess your villa
            and recommend the perfect approach for your vision and budget.
          </p>
          <Button variant="primary-large" onClick={onConsultationClick}>
            Book Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};
