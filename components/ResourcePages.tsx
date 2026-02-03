
import React from 'react';
import { Button } from './Button';
import {
  CheckCircle2,
  Clock,
  FileText,
  Home,
  Hammer,
  Sparkles,
  Shield,
  AlertTriangle,
  ArrowRight,
  Calendar,
  MapPin,
  Phone,
  Download,
  BookOpen
} from 'lucide-react';

interface ResourcePageProps {
  onConsultationClick: () => void;
  onNavigate: (page: string) => void;
}

// ============================================
// VILLA RENOVATION GUIDE
// ============================================
export const VillaRenovationGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div className="animate-in fade-in">
    {/* Hero */}
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">COMPREHENSIVE GUIDE</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            The Ultimate Dubai Villa Renovation Guide 2026
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Everything you need to know about renovating your villa in Dubai. From planning and permits to materials and timelines - your complete roadmap to a successful renovation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary-large" onClick={onConsultationClick}>Get Free Consultation</Button>
            <Button variant="outline-white">Download PDF Guide</Button>
          </div>
        </div>
      </div>
    </section>

    {/* Table of Contents */}
    <section className="py-16 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-playfair font-bold mb-8">What You'll Learn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '📋', title: 'Planning Your Renovation', desc: 'Budget, timeline, and scope' },
            { icon: '📄', title: 'Permits & Approvals', desc: 'NOCs and legal requirements' },
            { icon: '🏗️', title: 'Construction Process', desc: 'What to expect during works' },
            { icon: '✨', title: 'Finishing Touches', desc: 'Materials and final details' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-[#707070]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Section 1: Planning */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">1. Planning Your Villa Renovation</h2>

        <div className="prose prose-lg max-w-none">
          <h3 className="text-2xl font-playfair font-bold mt-8 mb-4">Setting Your Budget</h3>
          <p className="text-[#707070] leading-relaxed mb-6">
            Villa renovation costs in Dubai vary significantly based on scope, materials, and location. Here's a general guide:
          </p>

          <div className="bg-[#F5F1E8] p-6 rounded-xl mb-8">
            <h4 className="font-bold mb-4">Typical Investment Ranges:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
                <span><strong>Light Refresh (AED 150K-400K):</strong> Paint, flooring, fixtures, minor updates</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
                <span><strong>Medium Renovation (AED 400K-1.2M):</strong> Kitchen/bathroom remodel, new flooring throughout</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
                <span><strong>Full Transformation (AED 1.2M-3M):</strong> Complete interior redesign, structural changes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
                <span><strong>Luxury Overhaul (AED 3M+):</strong> Extensions, premium materials, smart home, landscaping</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-playfair font-bold mt-12 mb-4">Timeline Expectations</h3>
          <p className="text-[#707070] leading-relaxed mb-6">
            Realistic timelines help set proper expectations. Factor in Dubai's climate (summer heat can slow exterior work) and Ramadan periods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { scope: 'Kitchen Only', time: '6-10 weeks' },
              { scope: 'Bathroom Only', time: '4-8 weeks' },
              { scope: 'Full Villa Interior', time: '4-8 months' },
              { scope: 'Villa + Extension', time: '8-14 months' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <span className="font-medium">{item.scope}</span>
                <span className="text-[#C9A96E] font-bold">{item.time}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-playfair font-bold mt-12 mb-4">Choosing the Right Contractor</h3>
          <p className="text-[#707070] leading-relaxed mb-6">
            The contractor you choose will make or break your renovation. Look for:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
              <span><strong>Valid Trade License:</strong> Verify with Dubai DED</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
              <span><strong>Portfolio of Similar Projects:</strong> Ask to visit completed villas</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
              <span><strong>Clear Contract:</strong> Detailed scope, payment schedule, warranties</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
              <span><strong>Insurance:</strong> Contractor's all-risk insurance is essential</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 size={20} className="text-[#C9A96E] mt-1 flex-shrink-0" />
              <span><strong>References:</strong> Speak with at least 3 previous clients</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 2: Common Mistakes */}
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">2. Common Renovation Mistakes to Avoid</h2>

        <div className="space-y-6">
          {[
            {
              mistake: 'Underestimating the Budget',
              solution: 'Always add 15-20% contingency for unexpected issues like hidden water damage or electrical upgrades.'
            },
            {
              mistake: 'Skipping the Design Phase',
              solution: 'Invest in proper 3D renders and detailed drawings before construction begins. Changes during construction are 5x more expensive.'
            },
            {
              mistake: 'Ignoring Developer Approvals',
              solution: 'Communities like Palm Jumeirah, Emirates Hills have strict guidelines. Get NOCs before starting any work.'
            },
            {
              mistake: 'Choosing the Cheapest Quote',
              solution: 'Low quotes often mean corners will be cut. Compare scope, materials, and warranties - not just price.'
            },
            {
              mistake: 'Not Living Through a Summer First',
              solution: 'If you just bought the villa, live through one summer to understand cooling needs and sun exposure.'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.mistake}</h3>
                  <p className="text-[#707070]">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-gold text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair mb-6">Ready to Start Your Renovation?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Get a personalized consultation with our design directors and receive a detailed project estimate.</p>
        <Button variant="white" onClick={onConsultationClick}>Book Free Consultation</Button>
      </div>
    </section>
  </div>
);

// ============================================
// MATERIALS GUIDE
// ============================================
export const MaterialsGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div className="animate-in fade-in">
    {/* Hero */}
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">MATERIALS GUIDE</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Premium Materials for Dubai Villa Renovations
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            A comprehensive guide to selecting the right materials for Dubai's unique climate. From Italian marble to German appliances - make informed choices for lasting quality.
          </p>
          <Button variant="primary-large" onClick={onConsultationClick}>Get Material Recommendations</Button>
        </div>
      </div>
    </section>

    {/* Flooring */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">Flooring Options</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: 'Italian Marble',
              pros: ['Timeless elegance', 'Stays cool in summer', 'Increases property value'],
              cons: ['Requires sealing', 'Can be slippery when wet', 'Higher cost'],
              bestFor: 'Living areas, lobbies, master bathrooms',
              priceRange: 'AED 400-2,000/sqm',
              image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=600'
            },
            {
              name: 'European Oak Flooring',
              pros: ['Warm aesthetic', 'Comfortable underfoot', 'Easy to refinish'],
              cons: ['Expands with humidity', 'Scratches more easily', 'Needs climate control'],
              bestFor: 'Bedrooms, family rooms, home offices',
              priceRange: 'AED 250-800/sqm',
              image: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=600'
            },
            {
              name: 'Porcelain Tiles',
              pros: ['Extremely durable', 'Low maintenance', 'Many design options'],
              cons: ['Cold underfoot', 'Hard surface', 'Grout maintenance'],
              bestFor: 'High-traffic areas, outdoor spaces, kitchens',
              priceRange: 'AED 100-500/sqm',
              image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600'
            },
            {
              name: 'Natural Stone (Limestone/Travertine)',
              pros: ['Unique patterns', 'Natural beauty', 'Good for outdoor'],
              cons: ['Porous - needs sealing', 'Can stain', 'Varying quality'],
              bestFor: 'Pool decks, terraces, Mediterranean-style homes',
              priceRange: 'AED 200-600/sqm',
              image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=600'
            },
          ].map((material, idx) => (
            <div key={idx} className="bg-[#F5F1E8] rounded-2xl overflow-hidden">
              <img src={material.image} alt={material.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-3">{material.name}</h3>
                <div className="text-[#C9A96E] font-semibold mb-4">{material.priceRange}</div>

                <div className="mb-4">
                  <div className="text-sm font-bold text-green-600 mb-2">Pros:</div>
                  <ul className="text-sm text-[#707070] space-y-1">
                    {material.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-green-500" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-bold text-red-600 mb-2">Cons:</div>
                  <ul className="text-sm text-[#707070] space-y-1">
                    {material.cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <AlertTriangle size={14} className="text-red-400" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <span className="text-sm"><strong>Best for:</strong> {material.bestFor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Kitchen Appliances */}
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">Premium Kitchen Appliances</h2>

        <div className="bg-white p-8 rounded-2xl">
          <p className="text-[#707070] mb-8">
            For luxury villa kitchens in Dubai, these brands offer the best combination of performance, reliability, and after-sales service:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                brand: 'Gaggenau',
                country: 'Germany',
                specialty: 'Built-in appliances, steam ovens',
                note: 'The gold standard for luxury kitchens. Excellent local service.'
              },
              {
                brand: 'Miele',
                country: 'Germany',
                specialty: 'Dishwashers, laundry, coffee machines',
                note: 'Known for 20+ year lifespan. Strong UAE presence.'
              },
              {
                brand: 'Sub-Zero & Wolf',
                country: 'USA',
                specialty: 'Refrigeration, cooking ranges',
                note: 'Restaurant-grade performance for home chefs.'
              },
            ].map((brand, idx) => (
              <div key={idx} className="p-6 bg-[#F5F1E8] rounded-xl">
                <h3 className="text-xl font-bold mb-1">{brand.brand}</h3>
                <div className="text-sm text-[#C9A96E] mb-3">{brand.country}</div>
                <p className="text-sm text-[#707070] mb-2"><strong>Known for:</strong> {brand.specialty}</p>
                <p className="text-sm text-[#707070]">{brand.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Bathroom Fixtures */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">Bathroom Fixtures & Fittings</h2>

        <div className="space-y-8">
          <div className="bg-[#F5F1E8] p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Recommended Brands by Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#C9A96E] mb-3">Faucets & Showers</h4>
                <ul className="space-y-2 text-[#707070]">
                  <li>• <strong>Hansgrohe Axor</strong> - Minimalist German design</li>
                  <li>• <strong>Dornbracht</strong> - Ultra-luxury, architectural</li>
                  <li>• <strong>Gessi</strong> - Italian elegance</li>
                  <li>• <strong>Grohe</strong> - Reliable mid-to-high range</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#C9A96E] mb-3">Sanitaryware</h4>
                <ul className="space-y-2 text-[#707070]">
                  <li>• <strong>Duravit</strong> - German engineering, great designs</li>
                  <li>• <strong>Villeroy & Boch</strong> - Classic European quality</li>
                  <li>• <strong>TOTO</strong> - Japanese innovation, smart toilets</li>
                  <li>• <strong>Kohler</strong> - Wide range, good availability</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] text-white p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-4">Pro Tip: Dubai Water Quality</h3>
            <p className="text-white/80">
              Dubai's desalinated water is hard and can cause mineral buildup. Invest in a whole-house water softener system and choose fixtures with easy-clean coatings (like Hansgrohe's QuickClean) to reduce maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-gold text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair mb-6">Need Material Recommendations?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Our team sources directly from European manufacturers. Get personalized material selections for your project.</p>
        <Button variant="white" onClick={onConsultationClick}>Book Material Consultation</Button>
      </div>
    </section>
  </div>
);

// ============================================
// NOC APPROVALS GUIDE
// ============================================
export const NOCApprovalsGuide: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => (
  <div className="animate-in fade-in">
    {/* Hero */}
    <section className="py-20 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">APPROVALS GUIDE</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            NOC & Permit Guide for Dubai Villa Renovations
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Navigate Dubai's approval process with confidence. Learn which permits you need, how to get them, and avoid costly delays from non-compliance.
          </p>
          <Button variant="primary-large" onClick={onConsultationClick}>Get Permit Assistance</Button>
        </div>
      </div>
    </section>

    {/* What is NOC */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-8">What is a No Objection Certificate (NOC)?</h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-[#707070] leading-relaxed mb-6">
            A No Objection Certificate (NOC) is an official document from the developer or community management stating they have "no objection" to your proposed renovation work. In Dubai, most villa communities require NOCs before any modification work can begin.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
            <h3 className="font-bold text-red-700 mb-2">Important Warning</h3>
            <p className="text-red-700">
              Starting renovation work without proper NOCs can result in stop-work orders, fines up to AED 50,000, and being required to restore the property to its original condition at your expense.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Community Requirements */}
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">NOC Requirements by Community</h2>

        <div className="space-y-6">
          {[
            {
              community: 'Palm Jumeirah (Nakheel)',
              strictness: 'Very Strict',
              timeline: '2-4 weeks',
              notes: 'Detailed drawings required. No external changes without architect approval. Pool modifications need structural engineer sign-off.',
              color: 'red'
            },
            {
              community: 'Emirates Hills (Emaar)',
              strictness: 'Very Strict',
              timeline: '3-6 weeks',
              notes: 'Architectural committee approval required. Strict guidelines on exterior colors, landscaping, and fence heights.',
              color: 'red'
            },
            {
              community: 'Arabian Ranches (Emaar)',
              strictness: 'Moderate',
              timeline: '2-3 weeks',
              notes: 'Interior works generally straightforward. Extensions and external changes need detailed submissions.',
              color: 'yellow'
            },
            {
              community: 'Dubai Hills Estate (Emaar)',
              strictness: 'Moderate',
              timeline: '2-3 weeks',
              notes: 'Newer community with clear guidelines. Online submission portal available.',
              color: 'yellow'
            },
            {
              community: 'Jumeirah Islands (Nakheel)',
              strictness: 'Moderate',
              timeline: '2-4 weeks',
              notes: 'Lake-facing properties have additional restrictions. Pool modifications commonly requested.',
              color: 'yellow'
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.community}</h3>
                  <p className="text-[#707070]">{item.notes}</p>
                </div>
                <div className="flex flex-col items-end gap-2 flex-shrink-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    item.color === 'red' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {item.strictness}
                  </span>
                  <span className="text-sm text-[#707070]">Timeline: {item.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What Needs NOC */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">What Work Requires an NOC?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
              <CheckCircle2 size={20} />
              Usually NO NOC Required
            </h3>
            <ul className="space-y-2 text-[#707070]">
              <li>• Interior painting (same colors)</li>
              <li>• Replacing fixtures (like-for-like)</li>
              <li>• Minor electrical/plumbing repairs</li>
              <li>• Furniture and decor changes</li>
              <li>• AC maintenance/filter replacement</li>
              <li>• Garden plant changes (no hardscape)</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl">
            <h3 className="font-bold text-red-700 mb-4 flex items-center gap-2">
              <AlertTriangle size={20} />
              NOC Definitely Required
            </h3>
            <ul className="space-y-2 text-[#707070]">
              <li>• Any structural changes (walls, columns)</li>
              <li>• Kitchen/bathroom relocation</li>
              <li>• Window/door changes</li>
              <li>• External facade modifications</li>
              <li>• Pool construction or modification</li>
              <li>• Extensions/additions</li>
              <li>• Pergola/shade structure installation</li>
              <li>• Major landscaping changes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Process Steps */}
    <section className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12">The NOC Application Process</h2>

        <div className="space-y-8">
          {[
            {
              step: 1,
              title: 'Prepare Documentation',
              desc: 'Gather title deed, site plan, proposed drawings, and contractor license. Most communities require stamped architectural drawings.',
              time: '1-2 weeks'
            },
            {
              step: 2,
              title: 'Submit Application',
              desc: 'Submit to community management office or online portal. Pay application fee (typically AED 500-2,000).',
              time: '1 day'
            },
            {
              step: 3,
              title: 'Technical Review',
              desc: 'Community engineering team reviews structural and aesthetic compliance. May request modifications.',
              time: '1-3 weeks'
            },
            {
              step: 4,
              title: 'NOC Issuance',
              desc: 'Once approved, NOC is issued with validity period (usually 6-12 months). Keep original on-site during construction.',
              time: '2-5 days'
            },
            {
              step: 5,
              title: 'Final Inspection',
              desc: 'After completion, community inspects work matches approved drawings. Deposit refunded upon approval.',
              time: '1-2 weeks'
            },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#C9A96E] rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm text-[#C9A96E] font-medium">{item.time}</span>
                </div>
                <p className="text-[#707070]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-gold text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair mb-6">We Handle All Approvals</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Our team has processed 400+ NOC applications across all major Dubai communities. We manage the entire approval process for you.</p>
        <Button variant="white" onClick={onConsultationClick}>Get NOC Assistance</Button>
      </div>
    </section>
  </div>
);

// ============================================
// BLOG PAGE
// ============================================
export const BlogPage: React.FC<ResourcePageProps> = ({ onConsultationClick, onNavigate }) => {
  const blogPosts = [
    {
      id: 1,
      title: '2026 Dubai Villa Design Trends: What\'s In and What\'s Out',
      excerpt: 'Explore the hottest interior design trends for Dubai villas this year, from warm minimalism to biophilic design elements.',
      category: 'Design Trends',
      date: 'January 28, 2026',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Smart Home Integration: A Complete Guide for Villa Owners',
      excerpt: 'Everything you need to know about integrating smart home technology into your Dubai villa renovation project.',
      category: 'Technology',
      date: 'January 21, 2026',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'Pool Renovation Ideas: Transforming Your Outdoor Space',
      excerpt: 'From infinity edges to natural stone decking, discover how to create a resort-style pool experience at home.',
      category: 'Outdoor Living',
      date: 'January 14, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 4,
      title: 'Italian Marble vs Porcelain: Making the Right Choice',
      excerpt: 'A detailed comparison of flooring options for Dubai\'s climate, including maintenance, cost, and aesthetic considerations.',
      category: 'Materials',
      date: 'January 7, 2026',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0bbc564ce?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 5,
      title: 'Palm Jumeirah Renovation: What You Need to Know',
      excerpt: 'Special considerations for renovating Signature and Garden Villas on the Palm, including Nakheel approval processes.',
      category: 'Community Guide',
      date: 'December 28, 2025',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 6,
      title: 'Kitchen Design: Creating the Heart of Your Villa',
      excerpt: 'Expert tips on designing a luxury kitchen that combines Italian aesthetics with practical functionality.',
      category: 'Interior Design',
      date: 'December 21, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800'
    },
  ];

  const categories = ['All', 'Design Trends', 'Materials', 'Technology', 'Community Guide', 'Interior Design', 'Outdoor Living'];

  return (
    <div className="animate-in fade-in">
      {/* Hero */}
      <section className="py-20 bg-[#F5F1E8]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <span className="text-[#C9A96E] text-sm uppercase tracking-widest font-bold block mb-4">INSIGHTS & INSPIRATION</span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Smart Renovation Blog
          </h1>
          <p className="text-xl text-[#707070] max-w-2xl mx-auto">
            Expert insights on villa renovation, interior design trends, and luxury living in Dubai.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  idx === 0
                    ? 'bg-[#C9A96E] text-white'
                    : 'bg-gray-100 hover:bg-[#C9A96E] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#707070] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-playfair font-bold mb-3 group-hover:text-[#C9A96E] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#707070] text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#C9A96E] font-semibold text-sm">
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#1A1A1A] text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Stay Inspired</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest design trends, renovation tips, and exclusive project reveals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-gold text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-playfair mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Turn inspiration into reality with a free consultation.</p>
          <Button variant="white" onClick={onConsultationClick}>Book Free Consultation</Button>
        </div>
      </section>
    </div>
  );
};
