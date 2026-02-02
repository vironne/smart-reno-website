
import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Loader2, Calendar } from 'lucide-react';
import { Button } from './Button';

interface SmartConsultationFormProps {
  onClose: () => void;
}

export const SmartConsultationForm: React.FC<SmartConsultationFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    propertyType: '',
    scope: [] as string[],
    timeline: '',
    budget: 1200000,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    referral: '',
    requirements: ''
  });

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => setStep(s => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const calculateScore = () => {
    let score = 0;
    if (['palm-jumeirah', 'emirates-hills'].includes(formData.location)) score += 25;
    if (formData.propertyType === 'villa') score += 20;
    score += (formData.scope.length * 5);
    if (formData.timeline === 'immediate') score += 30;
    if (formData.budget >= 2000000) score += 40;
    else if (formData.budget >= 1000000) score += 30;
    return score;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const finalScore = calculateScore();
      console.log('Final Lead Score:', finalScore);
      setStep(7); // Show results
    }, 1500);
  };

  const score = calculateScore();

  return (
    <div className="fixed inset-0 z-[60] bg-[#1A1A1A] text-white overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#C9A96E] rounded-sm flex items-center justify-center text-white font-bold">S</div>
            <span className="font-playfair text-lg tracking-wider">SMART CONSULTATION</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex justify-between text-xs uppercase tracking-widest text-white/50 mb-3">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full">
            <div 
              className="h-full bg-[#C9A96E] transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="min-h-[500px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-4xl font-playfair mb-4">Where is your property?</h2>
              <p className="text-white/60 mb-10">We specialize in Dubai's premier residential communities.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Palm Jumeirah', 'Emirates Hills', 'Arabian Ranches', 'Dubai Hills', 'Jumeirah Islands', 'Other'].map(loc => (
                  <label key={loc} className={`p-6 border-2 rounded-xl cursor-pointer transition-all ${formData.location === loc.toLowerCase().replace(' ', '-') ? 'border-[#C9A96E] bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                    <input type="radio" className="hidden" name="location" onChange={() => setFormData({...formData, location: loc.toLowerCase().replace(' ', '-')})} />
                    <span className="block text-lg font-medium">{loc}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-4xl font-playfair mb-4">Property Type</h2>
              <p className="text-white/60 mb-10">Select the type of renovation required.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Villa', 'Penthouse', 'Apartment'].map(type => (
                  <label key={type} className={`p-10 border-2 rounded-xl cursor-pointer text-center transition-all ${formData.propertyType === type.toLowerCase() ? 'border-[#C9A96E] bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                    <input type="radio" className="hidden" name="propertyType" onChange={() => setFormData({...formData, propertyType: type.toLowerCase()})} />
                    <span className="text-3xl mb-4 block">🏡</span>
                    <span className="block text-xl font-medium">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-4xl font-playfair mb-4">Project Scope</h2>
              <p className="text-white/60 mb-10">What are we transforming? (Select all that apply)</p>
              <div className="grid gap-4">
                {[
                  { id: 'full', label: 'Full Villa Renovation', desc: 'Complete interior and structural makeover' },
                  { id: 'kitchen', label: 'Kitchen & Dining', desc: 'Modern European kitchen systems' },
                  { id: 'bath', label: 'Bathrooms', desc: 'Luxury spa-like bathroom retreats' },
                  { id: 'extension', label: 'Extension', desc: 'Adding new built-up area' },
                  { id: 'landscape', label: 'Landscape & Pool', desc: 'Premium outdoor living spaces' }
                ].map(scope => (
                  <label key={scope.id} className={`p-6 border-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${formData.scope.includes(scope.id) ? 'border-[#C9A96E] bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                    <input 
                      type="checkbox" 
                      className="hidden" 
                      checked={formData.scope.includes(scope.id)}
                      onChange={(e) => {
                        const newScope = e.target.checked 
                          ? [...formData.scope, scope.id]
                          : formData.scope.filter(s => s !== scope.id);
                        setFormData({...formData, scope: newScope});
                      }} 
                    />
                    <div>
                      <span className="block text-xl font-medium">{scope.label}</span>
                      <span className="text-sm text-white/50">{scope.desc}</span>
                    </div>
                    {formData.scope.includes(scope.id) && <Check className="text-[#C9A96E]" />}
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 text-center">
              <h2 className="text-4xl font-playfair mb-4">Investment Level</h2>
              <p className="text-white/60 mb-12">Select your planned investment for this transformation.</p>
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between mb-8 text-2xl font-montserrat">
                  <span>AED 200K</span>
                  <span className="text-[#C9A96E] font-bold">AED {(formData.budget / 1000000).toFixed(1)}M</span>
                  <span>AED 5M+</span>
                </div>
                <input 
                  type="range" 
                  min="200000" 
                  max="5000000" 
                  step="100000"
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: parseInt(e.target.value)})}
                  className="w-full h-3 bg-white/10 rounded-full appearance-none accent-[#C9A96E] cursor-pointer"
                />
                <p className="mt-8 text-white/40 italic">Budgets are indicative to help us tailor our presentation.</p>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-4xl font-playfair mb-4">Timeline</h2>
              <p className="text-white/60 mb-10">When would you like to begin?</p>
              <div className="grid gap-4">
                {[
                  { id: 'immediate', label: 'Immediately', desc: 'Ready to start design phase within 2 weeks' },
                  { id: '3months', label: '1 - 3 Months', desc: 'Planning for near-term transformation' },
                  { id: 'later', label: 'Just Browsing', desc: 'Researching for future projects' }
                ].map(time => (
                  <label key={time.id} className={`p-8 border-2 rounded-xl cursor-pointer flex items-center justify-between transition-all ${formData.timeline === time.id ? 'border-[#C9A96E] bg-white/5' : 'border-white/10 hover:border-white/30'}`}>
                    <input type="radio" className="hidden" name="timeline" onChange={() => setFormData({...formData, timeline: time.id})} />
                    <div>
                      <span className="block text-xl font-medium">{time.label}</span>
                      <span className="text-sm text-white/50">{time.desc}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-4xl font-playfair mb-4">Contact Details</h2>
              <p className="text-white/60 mb-10">Marco personally reviews every inquiry.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#C9A96E] outline-none" 
                  placeholder="First Name" 
                  required
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                />
                <input 
                  className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#C9A96E] outline-none" 
                  placeholder="Last Name" 
                  required
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                />
                <input 
                  className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#C9A96E] outline-none col-span-full" 
                  placeholder="Email Address" 
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#C9A96E] outline-none col-span-full" 
                  placeholder="Phone / WhatsApp" 
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <textarea 
                  className="bg-white/5 border border-white/10 p-4 rounded-lg focus:border-[#C9A96E] outline-none col-span-full min-h-[120px]" 
                  placeholder="Tell us about your vision..." 
                  value={formData.requirements}
                  onChange={e => setFormData({...formData, requirements: e.target.value})}
                />
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="animate-in zoom-in-95 text-center flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-[#C9A96E] rounded-full flex items-center justify-center mb-8">
                <Check size={40} className="text-white" />
              </div>
              <h2 className="text-5xl font-playfair mb-6">Success, {formData.firstName}!</h2>
              
              {score >= 80 ? (
                <div className="max-w-xl">
                  <p className="text-xl text-white/80 mb-10 leading-relaxed">
                    Based on your requirements, your project qualifies for a Priority Strategic Consultation with Marco. 
                    Please select a time below that works for you.
                  </p>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                    <div className="flex items-center gap-4 mb-6 text-left">
                      <img src="https://picsum.photos/seed/marco/64/64" className="w-16 h-16 rounded-full" alt="Marco" />
                      <div>
                        <h4 className="font-bold">Marco P.</h4>
                        <p className="text-sm text-[#C9A96E]">Design Director & Founder</p>
                      </div>
                    </div>
                    <Button variant="primary" className="w-full gap-2">
                      <Calendar size={18} /> Book via Calendly
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="max-w-xl">
                  <p className="text-xl text-white/80 mb-10 leading-relaxed">
                    Thank you for sharing your vision. Our specialist team will review your details 
                    and contact you via WhatsApp within 24 hours to schedule a property visit.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button variant="outline-white" onClick={onClose}>Back to Website</Button>
                    <a href="#" className="text-[#C9A96E] underline">Download Villa Renovation Guide (PDF)</a>
                  </div>
                </div>
              )}
            </div>
          )}

          {step < 7 && (
            <div className="mt-16 flex justify-between">
              {step > 1 ? (
                <Button variant="outline-white" onClick={handleBack} type="button" className="gap-2">
                  <ArrowLeft size={18} /> Back
                </Button>
              ) : <div></div>}
              
              {step === 6 ? (
                <Button variant="primary-large" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin" /> : 'Schedule Consultation'}
                </Button>
              ) : (
                <Button variant="primary" onClick={handleNext} type="button" className="gap-2">
                  Continue <ArrowRight size={18} />
                </Button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
