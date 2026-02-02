
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { SmartConsultationForm } from './components/SmartConsultationForm';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { PortfolioGallery } from './components/PortfolioGallery';
import { EmailCaptureModal } from './components/EmailCaptureModal';
import { COMMUNITIES, PROJECTS, PROCESS_STEPS, TESTIMONIALS, AWARDS } from './constants';
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
  Play,
  PlayCircle
} from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [hasSubmittedEmail, setHasSubmittedEmail] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [communityFilter, setCommunityFilter] = useState<string>('All');

  // Check if email was already submitted
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
    // Here you would typically send this to your backend/CRM
  };

  const handleNavigate = (page: string) => {
    // Handle community filter navigation (e.g., "community:Palm Jumeirah")
    if (page.startsWith('community:')) {
      const community = page.replace('community:', '');
      setCommunityFilter(community);
      setActivePage('services');
    } else if (page === 'services') {
      setCommunityFilter('All');
      setActivePage('services');
    } else {
      setActivePage(page);
    }
    window.scrollTo(0, 0);
  };

  const renderHome = () => (
    <div className="animate-in fade-in duration-700">
      {/* 1. Hero Section (Video Background Experience) */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1A1A]">
          <img src="https://images.unsplash.com/photo-1600607687940-47a04b629753?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-60" alt="Luxury Villa" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
          {/* Simulated Video Overlay Effect */}
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
              <Button variant="outline-white" className="px-10 py-4 text-lg" onClick={() => handleNavigate('services')}>Explore Our Work</Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Community Grid */}
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
        </div>
      </section>

      {/* 3. Why Smart Renovation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">🇮🇹</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Italian Heritage</h3>
              <p className="text-[#707070] leading-relaxed mb-6">50+ years of design expertise from Milan to Dubai. We personally source premium materials from Europe twice annually.</p>
              <button onClick={() => setActivePage('heritage')} className="text-[#C9A96E] font-semibold hover:underline">Learn Our Story →</button>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Award-Winning</h3>
              <p className="text-[#707070] leading-relaxed mb-6">Recognized by the Architecture Leaders Awards. 6 major awards in 3 years for design and build excellence.</p>
              <button onClick={() => setActivePage('awards-recognition')} className="text-[#C9A96E] font-semibold hover:underline">View Awards →</button>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[#C9A96E]/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-all group-hover:bg-[#C9A96E] group-hover:text-white">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold mb-4">Founder-Led</h3>
              <p className="text-[#707070] leading-relaxed mb-6">Marco & Cinzia personally oversee every project. Your villa transformation is never delegated to junior teams.</p>
              <button onClick={() => setActivePage('founders')} className="text-[#C9A96E] font-semibold hover:underline">Meet Our Team →</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Transformations */}
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

      {/* 5. Process Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">Our Seamless Process</h2>
            <p className="text-[#707070] max-w-2xl mx-auto text-lg font-light">How we bring Italian craftsmanship to your doorstep.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
             <div className="hidden lg:block absolute top-10 left-0 w-full h-px bg-[#E5E5E5] -z-10"></div>
             {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative group text-center lg:text-left">
                  <div className="w-20 h-20 bg-white border border-[#E5E5E5] rounded-full flex items-center justify-center text-3xl mb-6 mx-auto lg:mx-0 shadow-sm transition-all group-hover:border-[#C9A96E]">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 font-montserrat">{step.title}</h4>
                  <p className="text-[#707070] text-sm leading-relaxed">{step.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
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
            <Button variant="outline-white" onClick={() => setActivePage('client-testimonials')}>Read All Reviews</Button>
          </div>
        </div>
      </section>

      {/* 7. Awards & Press */}
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

      {/* 8. Final CTA */}
      <section className="py-32 bg-gradient-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-playfair mb-8">Elevate Your Lifestyle</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">Book your priority strategic consultation with our design directors.</p>
          <Button variant="white" className="px-12 py-5 text-lg" onClick={() => setIsFormOpen(true)}>Book Free Consultation</Button>
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
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Marco" />
          </div>
          <div className="lg:w-1/2">
            <span className="text-[#C9A96E] font-bold uppercase tracking-widest text-sm">FOUNDER & CREATIVE DIRECTOR</span>
            <h2 className="text-5xl font-playfair font-bold my-6">Marco P.</h2>
            <p className="text-lg text-[#707070] leading-relaxed mb-8 italic">"Every villa tells a story. My job is to ensure that story is written in Italian marble and European light."</p>
            <p className="text-[#707070] leading-relaxed mb-8">With over 30 years of personal experience in high-end structural renovations, Marco leads the design and site engineering teams. He personally sources every slab of marble and every fixture for our Signature projects.</p>
            <Button variant="outline">Schedule a Briefing with Marco</Button>
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
            <p className="text-[#707070] leading-relaxed mb-8">Cinzia manages our client partnerships and project lifecycle. She ensures that the "personal touch" remains the cornerstone of Smart Renovation, handling every communication with the discretion and care it deserves.</p>
            <Button variant="outline">Consult with Cinzia</Button>
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
          <div className="flex justify-center gap-4 mb-12">
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

  const renderCommunityPage = () => (
    <div className="animate-in slide-in-from-right duration-700">
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20">
        <div className="absolute inset-0 bg-black">
          <img src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-70" alt="Palm Jumeirah" />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12 text-white">
          <nav className="flex gap-2 text-xs uppercase tracking-widest text-white/60 mb-6">
            <span className="cursor-pointer hover:text-white" onClick={() => setActivePage('home')}>Home</span>
            <span>/</span>
            <span className="text-white">Communities</span>
            <span>/</span>
            <span className="text-[#C9A96E]">Palm Jumeirah</span>
          </nav>
          <h1 className="text-6xl font-playfair font-bold mb-4">Palm Jumeirah Specialist</h1>
          <p className="text-xl max-w-2xl font-light opacity-90 leading-relaxed">
            Dubai's trusted partner for Garden and Signature Villa transformations on the Palm. Nakheel-approved with 40+ completed masterpieces.
          </p>
          <div className="mt-10 flex gap-4">
            <Button onClick={() => setIsFormOpen(true)}>Book Palm Consultation</Button>
            <Button variant="outline-white">View 40+ Projects</Button>
          </div>
        </div>
      </section>
      {/* (Previous Palm Content Remains Same) */}
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
        
        {/* Services/Portfolio Page with Favorites */}
        {activePage === 'services' && (
          <PortfolioGallery
            onFavoritesThresholdReached={handleFavoritesThresholdReached}
            hasSubmittedEmail={hasSubmittedEmail}
            initialFilter={communityFilter}
          />
        )}

        {/* Placeholder for other pages */}
        {(['process', 'communities', 'about'].includes(activePage)) && (
          <div className="py-40 text-center animate-in fade-in">
            <h1 className="text-4xl font-playfair mb-8 capitalize">{activePage} Overview</h1>
            <p className="text-[#707070] mb-8">Detailed content coming soon.</p>
            <Button onClick={() => setActivePage('home')}>Return Home</Button>
          </div>
        )}
      </main>

      {/* 9. Optimized Footer */}
      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-[#C9A96E] rounded-sm flex items-center justify-center text-white font-bold">S</div>
                <span className="font-playfair font-bold text-xl tracking-tighter leading-none">SMART</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-8">
                50 years of Italian design excellence, transforming Dubai's finest villas with European craftsmanship and award-winning service.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all cursor-pointer">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all cursor-pointer">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C9A96E] flex items-center justify-center transition-all cursor-pointer">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-8 font-playfair underline decoration-[#C9A96E] underline-offset-8">About Us</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li><button onClick={() => setActivePage('heritage')} className="hover:text-[#C9A96E] transition-colors">Our Heritage</button></li>
                <li><button onClick={() => setActivePage('founders')} className="hover:text-[#C9A96E] transition-colors">Meet Marco & Cinzia</button></li>
                <li><button onClick={() => setActivePage('awards-recognition')} className="hover:text-[#C9A96E] transition-colors">Awards & Recognition</button></li>
                <li><button onClick={() => setActivePage('client-testimonials')} className="hover:text-[#C9A96E] transition-colors">Client Testimonials</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 font-playfair underline decoration-[#C9A96E] underline-offset-8">Communities</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                <li className="hover:text-[#C9A96E] cursor-pointer" onClick={() => handleNavigate('community:Palm Jumeirah')}>Palm Jumeirah</li>
                <li className="hover:text-[#C9A96E] cursor-pointer" onClick={() => handleNavigate('community:Emirates Hills')}>Emirates Hills</li>
                <li className="hover:text-[#C9A96E] cursor-pointer" onClick={() => handleNavigate('community:Arabian Ranches')}>Arabian Ranches</li>
                <li className="hover:text-[#C9A96E] cursor-pointer" onClick={() => handleNavigate('community:Dubai Hills Estate')}>Dubai Hills</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8 font-playfair underline decoration-[#C9A96E] underline-offset-8">Contact</h4>
              <ul className="space-y-6 text-white/60 text-sm">
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-white/40 mb-1 flex items-center gap-2"><MapPin size={12}/> Office</span>
                  Sheikh Zayed Road, Office 106-108, Dubai, UAE
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-white/40 mb-1 flex items-center gap-2"><Phone size={12} /> Phone</span>
                  +971 4 235 0599
                </li>
                <li className="flex flex-col">
                  <span className="text-xs uppercase text-white/40 mb-1 flex items-center gap-2"><Mail size={12} /> Email</span>
                  info@smartrenovation.ae
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2026 Smart Renovation. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {isFormOpen && <SmartConsultationForm onClose={() => setIsFormOpen(false)} />}

      {/* Email Capture Modal - triggers after 10 favorites */}
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
