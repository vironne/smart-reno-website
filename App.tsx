
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { SmartConsultationForm } from './components/SmartConsultationForm';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { EmailCaptureModal } from './components/EmailCaptureModal';
import { ServicesIndex } from './components/ServicesIndex';
import { ServiceDetail } from './components/ServiceDetail';
import { ProjectDetail } from './components/ProjectDetail';
import { COMMUNITIES, PROJECTS, PROCESS_STEPS, TESTIMONIALS, AWARDS, SERVICES } from './constants';
import {
  ArrowRight,
  Star,
  Award,
  Clock,
  CheckCircle2,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Quote,
  PlayCircle,
  MessageCircle,
  Map,
  Heart,
  FileText,
  BookOpen
} from 'lucide-react';

const WHATSAPP_NUMBER = '+971501234567';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I\'m interested in discussing a villa renovation project.');

// Additional communities for the hub
const ALL_COMMUNITIES = [
  ...COMMUNITIES,
  { id: 'meadows', name: 'The Meadows', slug: 'meadows', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800', renovatedCount: 18, description: 'Family-friendly community with lakeside villas' },
  { id: 'springs', name: 'The Springs', slug: 'springs', image: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=800', renovatedCount: 25, description: 'Townhouse transformations with lake views' },
  { id: 'lakes', name: 'The Lakes', slug: 'lakes', image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800', renovatedCount: 12, description: 'Premium lakefront villa renovations' },
  { id: 'victory-heights', name: 'Victory Heights', slug: 'victory-heights', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800', renovatedCount: 8, description: 'Exclusive golf course living' },
  { id: 'district-one', name: 'District One', slug: 'district-one', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', renovatedCount: 6, description: 'Ultra-luxury Crystal Lagoon estates' },
  { id: 'al-barari', name: 'Al Barari', slug: 'al-barari', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', renovatedCount: 4, description: 'Botanical themed luxury living' },
  { id: 'damac-hills', name: 'DAMAC Hills', slug: 'damac-hills', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800', renovatedCount: 15, description: 'Trump International Golf Club community' },
  { id: 'tilal-al-ghaf', name: 'Tilal Al Ghaf', slug: 'tilal-al-ghaf', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800', renovatedCount: 3, description: 'Lagoon-lifestyle new developments' },
];

const FLAGSHIP_COMMUNITIES = ALL_COMMUNITIES.slice(0, 5);
const OTHER_COMMUNITIES = ALL_COMMUNITIES.slice(5);

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [communityFilter, setCommunityFilter] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<string>('');

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}?text=${WHATSAPP_MESSAGE}`;

  useEffect(() => {
    const submitted = localStorage.getItem('smartreno_email_submitted');
    if (submitted) {
      setHasSubmittedEmail(true);
    }
    const favorites = localStorage.getItem('smartreno_favorites');
    if (favorites) {
      setFavoritesCount(JSON.parse(favorites).length);
    }
  }, []);

  const handleFavoritesThresholdReached = () => {
    const favorites = localStorage.getItem('smartreno_favorites');
    if (favorites) {
      setFavoritesCount(JSON.parse(favorites).length);
    }
    setIsEmailModalOpen(true);
  };

  const handleEmailSubmit = (email: string) => {
    console.log('Email captured:', email);
    localStorage.setItem('smartreno_email_submitted', 'true');
    localStorage.setItem('smartreno_user_email', email);
    setHasSubmittedEmail(true);
    setIsEmailModalOpen(false);
  };

  const handleNavigate = (page: string) => {
    if (page.startsWith('project:')) {
      const projectId = page.replace('project:', '');
      setSelectedProject(projectId);
      setActivePage('project-detail');
    } else if (page.startsWith('service:')) {
      const serviceId = page.replace('service:', '');
      setSelectedService(serviceId);
      setActivePage('service-detail');
    } else if (page.startsWith('community:')) {
      const community = page.replace('community:', '');
      setCommunityFilter(community);
      setActivePage('portfolio');
    } else if (page === 'portfolio') {
      setCommunityFilter('All');
      setActivePage('portfolio');
    } else if (page === 'services') {
      setActivePage('services');
    } else {
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img src="https://images.unsplash.com/photo-1600607687940-47a04b629753?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-60" alt="Luxury Villa" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        </div>

        <div className="relative container mx-auto px-6 md:px-12 pb-24 text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-playfair font-bold mb-6 leading-[1.1]">
              50 Years of Italian <br /> Design Excellence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10 font-light max-w-2xl leading-relaxed">
              Transforming Dubai's finest villas with European craftsmanship and award-winning service.
            </p>

            <div className="flex flex-wrap gap-8 mb-12 text-sm font-semibold tracking-wider uppercase">
              <span className="flex items-center gap-2"><Award size={20} className="text-[#C9A96E]" /> 6-Time Award Winner</span>
              <span className="flex items-center gap-2"><Star size={20} className="text-[#C9A96E]" /> 4.9/5 Google Rating</span>
              <span className="flex items-center gap-2">🇮🇹 Italian Heritage Since 1970</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary-large" onClick={() => setIsFormOpen(true)}>Schedule Your Consultation</Button>
              <Button variant="outline-white" className="px-10 py-4 text-lg" onClick={() => handleNavigate('portfolio')}>Explore Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Grid */}
      <section className="py-24 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">Find Your Community</h2>
            <p className="text-[#707070] max-w-2xl mx-auto text-lg font-light">Specialized villa renovation expertise in Dubai's premier residential areas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMMUNITIES.map(community => (
              <div
                key={community.id}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => handleNavigate(`community:${community.name}`)}
              >
                <img src={community.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={community.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-playfair mb-2">{community.name}</h3>
                  <p className="text-sm opacity-80 mb-4">{community.renovatedCount}+ Villas Renovated</p>
                  <div className="flex items-center gap-2 text-[#C9A96E] font-semibold text-sm">
                    VIEW PROJECTS <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => handleNavigate('communities')}>View All 13 Communities</Button>
          </div>
        </div>
      </section>

      {/* Why Smart Renovation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">🇮🇹</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Italian Heritage</h3>
              <p className="text-[#707070] leading-relaxed mb-6">50+ years of design expertise from Milan to Dubai. We personally source premium materials from Europe twice annually.</p>
              <button onClick={() => handleNavigate('heritage')} className="text-[#C9A96E] font-semibold hover:underline">Learn Our Story →</button>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Award-Winning</h3>
              <p className="text-[#707070] leading-relaxed mb-6">Recognized by the Architecture Leaders Awards. 6 major awards in 3 years for design and build excellence.</p>
              <button onClick={() => handleNavigate('awards-recognition')} className="text-[#C9A96E] font-semibold hover:underline">View Awards →</button>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Haute Couture Approach</h3>
              <p className="text-[#707070] leading-relaxed mb-6">Marco & Cinzia personally oversee every project like master tailors. Your villa transformation is bespoke, never off-the-rack.</p>
              <button onClick={() => handleNavigate('founders')} className="text-[#C9A96E] font-semibold hover:underline">Meet Our Team →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformations */}
      <section className="py-24 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-center text-4xl md:text-5xl font-playfair mb-16">Featured Transformations</h2>
          <div className="max-w-6xl mx-auto">
            <BeforeAfterSlider
              before={PROJECTS[0].beforeImage}
              after={PROJECTS[0].afterImage}
              className="h-[600px] shadow-2xl"
            />
            <div className="mt-10 text-center">
              <h3 className="text-3xl font-playfair mb-4">{PROJECTS[0].title}</h3>
              <div className="flex flex-wrap justify-center gap-8 text-[#707070] font-montserrat font-medium text-sm">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#C9A96E]" /> {PROJECTS[0].investment} Investment</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-[#C9A96E]" /> {PROJECTS[0].timeline} Completion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">Our Seamless Process</h2>
            <p className="text-[#707070] max-w-2xl mx-auto text-lg font-light">How we bring Italian craftsmanship to your doorstep.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
             <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-[#E5E5E5] -z-10"></div>
             {PROCESS_STEPS.slice(0, 4).map((step, idx) => (
                <div key={idx} className="relative group text-center lg:text-left">
                  <div className="w-20 h-20 bg-white border border-[#E5E5E5] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto lg:mx-0 shadow-sm transition-all group-hover:border-[#C9A96E]">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-montserrat">{step.title}</h4>
                  <p className="text-[#707070] text-sm leading-relaxed">{step.description}</p>
                </div>
             ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" onClick={() => handleNavigate('process')}>See Full Process</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">Client Stories</h2>
            <p className="text-white/60">Direct experiences from Dubai's premier villa owners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-2xl relative group hover:bg-white/10 transition-colors">
                <Quote className="absolute top-6 right-6 text-white/10" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#C9A96E" className="text-[#C9A96E]" />)}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed opacity-90">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-[#C9A96E] text-xs uppercase tracking-widest">{t.location}</div>
                  </div>
                  {t.video && <PlayCircle className="text-[#C9A96E]" size={24} />}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline-white" onClick={() => handleNavigate('client-testimonials')}>Read All Reviews</Button>
          </div>
        </div>
      </section>

      {/* Awards & Press */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#707070] mb-12">Industry Validation</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-xl font-bold font-serif">DESIGN MIDDLE EAST</div>
             <div className="text-xl font-bold font-serif">ARCHITECTURAL DIGEST</div>
             <div className="text-xl font-bold font-serif">VOGUE LIVING</div>
             <div className="text-xl font-bold font-serif">LUXURY LIFE</div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-playfair mb-8">Elevate Your Lifestyle</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Book your priority strategic consultation with our design directors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" className="px-12 py-5 text-lg" onClick={() => setIsFormOpen(true)}>Book Free Consultation</Button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 text-lg font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const renderHeritage = () => (
    <div className="animate-in fade-in pt-12 pb-24">
      <section className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="mb-16">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">OUR STORY</span>
          <h1 className="text-6xl font-playfair font-bold mb-8">From Milan to Dubai: <br /> 50 Years of Excellence</h1>
          <p className="text-2xl font-light text-[#707070] leading-relaxed mb-12">
            Smart Renovation isn't just a fit-out company; it's a legacy of Italian craftsmanship
            that began in the workshops of Lombardy in 1970 and blossomed in the luxury estates of Dubai.
          </p>
        </div>

        <div className="grid gap-24 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px before:bg-[#E5E5E5]">
          {[
            { year: '1970', title: 'The Italian Roots', desc: 'Our family established a luxury furniture and design workshop in Milan, specializing in bespoke Italian interiors.' },
            { year: '1995', title: 'European Expansion', desc: 'Expanding across the EU, handling restoration of historical villas in Lake Como and Tuscany.' },
            { year: '2015', title: 'Landing in Dubai', desc: 'Bringing the "Turnkey Italian" concept to the Middle East, starting with a single Signature Villa on Palm Jumeirah.' },
            { year: '2026', title: 'Dubai\'s Premier Firm', desc: 'Today, we are a 6-time award-winning firm with over 400 villas transformed across the UAE.' }
          ].map((item, i) => (
            <div key={i} className="pl-16 relative">
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white border-2 border-[#C9A96E] flex items-center justify-center font-bold text-xs">
                {i+1}
              </div>
              <div className="text-[#C9A96E] font-bold text-xl font-montserrat mb-2">{item.year}</div>
              <h3 className="text-3xl font-playfair mb-4">{item.title}</h3>
              <p className="text-[#707070] leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderAwards = () => (
    <div className="animate-in fade-in pt-12 pb-24 bg-[#F5F1E8]">
      <section className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold">RECOGNITION</span>
          <h1 className="text-6xl font-playfair font-bold mt-4 mb-6">6-Time Award Winner</h1>
          <p className="text-[#707070] max-w-2xl mx-auto">Industry-vetted excellence. We are the most recognized boutique renovation firm in the UAE.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {AWARDS.map((award, i) => (
            <div key={i} className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#C9A96E]">
              <div className="text-4xl mb-4">🏆</div>
              <div className="text-xs font-bold text-[#C9A96E] uppercase mb-2">{award.year}</div>
              <h3 className="text-xl font-bold font-playfair mb-3">{award.title}</h3>
              <p className="text-sm text-[#707070]">{award.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderFounders = () => (
    <div className="animate-in fade-in py-24">
      <section className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">THE HAUTE COUTURE OF RENOVATION</span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Meet the Master Tailors</h1>
          <p className="text-xl text-[#707070] max-w-3xl mx-auto leading-relaxed">
            Like the finest Milanese fashion houses, we believe luxury cannot be mass-produced.
            Every villa we transform is a bespoke creation, personally crafted by our founders.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Marco" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[#C9A96E] font-bold uppercase tracking-widest text-sm">FOUNDER & CREATIVE DIRECTOR</span>
            <h2 className="text-5xl font-playfair font-bold my-6">Marco P.</h2>
            <p className="text-lg text-[#707070] leading-relaxed mb-8 italic">"Every villa tells a story. My job is to ensure that story is written in Italian marble and European light."</p>
            <p className="text-[#707070] leading-relaxed mb-8">With over 30 years of personal experience in high-end structural renovations, Marco leads the design and site engineering teams. Like a master tailor measuring for a bespoke suit, he personally sources every slab of marble and every fixture.</p>
            <Button variant="outline" onClick={() => setIsFormOpen(true)}>Schedule a Briefing with Marco</Button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Cinzia" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[#C9A96E] font-bold uppercase tracking-widest text-sm">CO-FOUNDER & RELATIONS DIRECTOR</span>
            <h2 className="text-5xl font-playfair font-bold my-6">Cinzia D.</h2>
            <p className="text-lg text-[#707070] leading-relaxed mb-8 italic">"We don't just build rooms; we curate experiences for Dubai's most discerning families."</p>
            <p className="text-[#707070] leading-relaxed mb-8">Cinzia manages our client partnerships with the attentiveness of a private couturier. She ensures that the "haute couture" experience extends beyond design.</p>
            <Button variant="outline" onClick={() => setIsFormOpen(true)}>Consult with Cinzia</Button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderTestimonials = () => (
    <div className="animate-in fade-in py-24 bg-white">
      <section className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-playfair font-bold mb-6">Client Stories</h1>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['All', 'Palm Jumeirah', 'Emirates Hills', 'Arabian Ranches'].map(f => (
              <button key={f} className={`px-6 py-2 rounded-full border transition-all ${f === 'All' ? 'bg-[#C9A96E] text-white border-[#C9A96E]' : 'border-gray-200 hover:border-[#C9A96E]'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-12 border border-gray-100 rounded-3xl bg-[#F5F1E8]/30">
               <div className="flex gap-1 mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#C9A96E" className="text-[#C9A96E]" />)}
               </div>
               <p className="text-2xl font-playfair italic mb-8 leading-relaxed">"{t.quote}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-[#C9A96E] flex items-center justify-center text-white font-bold">{t.name[0]}</div>
                 <div>
                   <div className="font-bold">{t.name}</div>
                   <div className="text-sm text-[#707070]">{t.location}</div>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  // NEW: Communities Hub Page
  const renderCommunitiesHub = () => (
    <div className="animate-in fade-in">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">
        <div className="absolute inset-0 bg-black">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-60" alt="Dubai Communities" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12 text-white">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">WHERE WE WORK</span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">Dubai Communities</h1>
          <p className="text-xl max-w-2xl font-light opacity-90 leading-relaxed">
            Specialized villa renovation expertise across 13 of Dubai's premier residential areas. 400+ villas transformed.
          </p>
        </div>
      </section>

      {/* Flagship Communities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-playfair font-bold mb-12">Flagship Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FLAGSHIP_COMMUNITIES.map(community => (
              <div
                key={community.id}
                className="group relative h-[350px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                onClick={() => handleNavigate(`community:${community.name}`)}
              >
                <img src={community.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={community.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-playfair mb-2">{community.name}</h3>
                  <p className="text-sm opacity-80 mb-2">{community.renovatedCount}+ Villas Renovated</p>
                  <p className="text-xs opacity-60">{community.description}</p>
                </div>
                <div className="absolute top-4 right-4 bg-[#C9A96E] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  FLAGSHIP
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Placeholder */}
      <section className="py-16 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
            <Map size={48} className="mx-auto mb-6 text-[#C9A96E]" />
            <h3 className="text-2xl font-playfair font-bold mb-4">Interactive Community Map</h3>
            <p className="text-[#707070] mb-6">Explore our projects across Dubai's premium residential areas</p>
            <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
              <span className="text-[#707070]">Map Integration Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Other Communities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-playfair font-bold mb-12">Other Communities We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_COMMUNITIES.map(community => (
              <div
                key={community.id}
                className="group p-6 border border-gray-100 rounded-xl hover:border-[#C9A96E] hover:shadow-lg transition-all cursor-pointer"
                onClick={() => handleNavigate(`community:${community.name}`)}
              >
                <div className="h-32 rounded-lg overflow-hidden mb-4">
                  <img src={community.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={community.name} />
                </div>
                <h3 className="font-bold mb-1">{community.name}</h3>
                <p className="text-sm text-[#707070] mb-2">{community.renovatedCount}+ villas</p>
                <p className="text-xs text-[#707070]">{community.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair mb-6">Don't See Your Community?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">We serve all premium residential areas in Dubai. Contact us for a custom consultation.</p>
          <Button variant="white" onClick={() => setIsFormOpen(true)}>Get in Touch</Button>
        </div>
      </section>
    </div>
  );

  // NEW: Process Page
  const renderProcess = () => (
    <div className="animate-in fade-in">
      {/* Hero */}
      <section className="py-24 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">HOW WE WORK</span>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Our Seamless Process</h1>
          <p className="text-xl text-[#707070] max-w-3xl mx-auto leading-relaxed">
            From initial consultation to final handover, we guide you through every step with Italian precision and personal attention.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-[#F5F1E8] rounded-full flex items-center justify-center text-4xl border-2 border-[#C9A96E]">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#C9A96E] font-bold text-sm">STEP {idx + 1}</span>
                    <div className="h-px flex-1 bg-[#E5E5E5]"></div>
                  </div>
                  <h3 className="text-3xl font-playfair font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-[#707070] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-playfair mb-12">Typical Project Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { phase: 'Design', duration: '4-6 weeks' },
              { phase: 'Permits', duration: '2-4 weeks' },
              { phase: 'Construction', duration: '3-8 months' },
              { phase: 'Handover', duration: '1-2 weeks' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-playfair text-[#C9A96E] mb-2">{item.duration}</div>
                <div className="text-white/60 uppercase tracking-wider text-sm">{item.phase}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair mb-6">Ready to Start Your Project?</h2>
          <p className="text-[#707070] mb-8 max-w-xl mx-auto">Book a free consultation to discuss your vision and receive a personalized project plan.</p>
          <Button variant="primary-large" onClick={() => setIsFormOpen(true)}>Book Free Consultation</Button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header
        onConsultationClick={() => setIsFormOpen(true)}
        onNavigate={handleNavigate}
      />

      <main className="pt-[80px]">
        {activePage === 'home' && renderHome()}
        {activePage === 'heritage' && renderHeritage()}
        {activePage === 'awards-recognition' && renderAwards()}
        {activePage === 'founders' && renderFounders()}
        {activePage === 'client-testimonials' && renderTestimonials()}
        {activePage === 'communities' && renderCommunitiesHub()}
        {activePage === 'process' && renderProcess()}

        {/* Services Index Page */}
        {activePage === 'services' && (
          <ServicesIndex
            onNavigate={(serviceId) => handleNavigate(`service:${serviceId}`)}
            onConsultationClick={() => setIsFormOpen(true)}
          />
        )}

        {/* Service Detail Page */}
        {activePage === 'service-detail' && (
          <ServiceDetail
            serviceId={selectedService}
            onBack={() => handleNavigate('services')}
            onConsultationClick={() => setIsFormOpen(true)}
            onViewProject={(id) => {
              if (SERVICES.find(s => s.id === id)) {
                handleNavigate(`service:${id}`);
              } else {
                handleNavigate('portfolio');
              }
            }}
          />
        )}

        {/* Portfolio Page with Favorites */}
        {activePage === 'portfolio' && (
          <PortfolioGallery
            onFavoritesThresholdReached={handleFavoritesThresholdReached}
            hasSubmittedEmail={hasSubmittedEmail}
            initialFilter={communityFilter}
            onViewProject={(projectId) => handleNavigate(`project:${projectId}`)}
            onRequestProject={(project) => {
              localStorage.setItem('smartreno_inspiration_project', JSON.stringify({
                title: project.title,
                style: project.style,
                location: project.location
              }));
              setIsFormOpen(true);
            }}
          />
        )}

        {/* Project Detail Page */}
        {activePage === 'project-detail' && (
          <ProjectDetail
            projectId={selectedProject}
            onBack={() => handleNavigate('portfolio')}
            onConsultationClick={() => setIsFormOpen(true)}
            onViewProject={(projectId) => handleNavigate(`project:${projectId}`)}
          />
        )}

        {/* Placeholder for other pages */}
        {(['about'].includes(activePage)) && (
          <div className="py-40 text-center animate-in fade-in">
            <h1 className="text-4xl font-playfair mb-8 capitalize">{activePage} Overview</h1>
            <p className="text-[#707070] mb-8">Detailed content coming soon.</p>
            <Button onClick={() => handleNavigate('home')}>Return Home</Button>
          </div>
        )}
      </main>

      {/* OPTIMIZED 5-COLUMN FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
            {/* Column 1: EXPLORE */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-[#C9A96E]">Explore</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><button onClick={() => handleNavigate('communities')} className="hover:text-[#C9A96E] transition-colors">Communities</button></li>
                <li><button onClick={() => handleNavigate('portfolio')} className="hover:text-[#C9A96E] transition-colors">Portfolio</button></li>
                <li><button onClick={() => handleNavigate('process')} className="hover:text-[#C9A96E] transition-colors">Our Process</button></li>
                <li><button onClick={() => handleNavigate('portfolio')} className="hover:text-[#C9A96E] transition-colors flex items-center gap-2">
                  <Heart size={12} /> Vision Board
                </button></li>
              </ul>
            </div>

            {/* Column 2: SERVICES */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-[#C9A96E]">Services</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                {SERVICES.map(s => (
                  <li key={s.id}>
                    <button onClick={() => handleNavigate(`service:${s.id}`)} className="hover:text-[#C9A96E] transition-colors">
                      {s.shortTitle}
                    </button>
                  </li>
                ))}
                <li><button onClick={() => handleNavigate('services')} className="text-[#C9A96E] font-semibold">View All →</button></li>
              </ul>
            </div>

            {/* Column 3: TOP COMMUNITIES */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-[#C9A96E]">Top Communities</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                {FLAGSHIP_COMMUNITIES.slice(0, 5).map(c => (
                  <li key={c.id}>
                    <button onClick={() => handleNavigate(`community:${c.name}`)} className="hover:text-[#C9A96E] transition-colors">
                      {c.name}
                    </button>
                  </li>
                ))}
                <li><button onClick={() => handleNavigate('communities')} className="text-[#C9A96E] font-semibold">View All (13) →</button></li>
              </ul>
            </div>

            {/* Column 4: RESOURCES */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-[#C9A96E]">Resources</h4>
              <ul className="space-y-3 text-white/60 text-sm">
                <li className="flex items-center gap-2 hover:text-[#C9A96E] cursor-pointer transition-colors">
                  <FileText size={12} /> Villa Renovation Guide
                </li>
                <li className="flex items-center gap-2 hover:text-[#C9A96E] cursor-pointer transition-colors">
                  <FileText size={12} /> Materials Guide
                </li>
                <li className="flex items-center gap-2 hover:text-[#C9A96E] cursor-pointer transition-colors">
                  <FileText size={12} /> NOC Approvals Guide
                </li>
                <li className="flex items-center gap-2 hover:text-[#C9A96E] cursor-pointer transition-colors">
                  <BookOpen size={12} /> Blog
                </li>
              </ul>
            </div>

            {/* Column 5: CONTACT */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-[#C9A96E]">Contact</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-1 flex-shrink-0" />
                  <span>Sheikh Zayed Road, Office 106-108, Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} />
                  <a href="tel:+97142350599" className="hover:text-[#C9A96E]">+971 4 235 0599</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  <a href="mailto:info@smartrenovation.ae" className="hover:text-[#C9A96E]">info@smartrenovation.ae</a>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={14} className="text-[#25D366]" />
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366]">WhatsApp Chat</a>
                </li>
                <li className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>Sun-Thu: 9AM-6PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#C9A96E] rounded-sm flex items-center justify-center text-white font-bold">S</div>
              <span className="text-sm text-white/40">© 2026 Smart Renovation. All rights reserved.</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </a>
            </div>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {isFormOpen && <SmartConsultationForm onClose={() => setIsFormOpen(false)} />}

      <EmailCaptureModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        onSubmit={handleEmailSubmit}
        favoritesCount={favoritesCount}
      />
    </div>
  );
};

export default App;
