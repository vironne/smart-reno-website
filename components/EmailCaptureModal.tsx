import React, { useState } from 'react';
import { X, Heart, Sparkles, Send } from 'lucide-react';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  favoritesCount: number;
}

export const EmailCaptureModal: React.FC<EmailCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  favoritesCount
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    onSubmit(email);
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#333] p-8 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 opacity-20">
            <Heart size={40} className="fill-current" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <Sparkles size={40} />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>

          <div className="w-20 h-20 bg-[#C9A96E] rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={36} className="fill-white text-white" />
          </div>

          <h2 className="text-2xl font-playfair font-bold mb-2">
            You've saved {favoritesCount} favorites!
          </h2>
          <p className="text-white/70 text-sm">
            You have great taste in luxury design
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
              Unlock Your Inspiration Board
            </h3>
            <p className="text-[#707070] text-sm leading-relaxed">
              Enter your email to receive your personalized collection and exclusive renovation insights from our design team.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`w-full px-5 py-4 border-2 rounded-xl text-lg transition-colors focus:outline-none focus:border-[#C9A96E] ${
                  error ? 'border-red-400' : 'border-gray-200'
                }`}
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#C9A96E] hover:bg-[#b8986a] text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Get My Inspiration Board
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-[#707070] mt-6">
            By submitting, you agree to receive design inspiration and renovation tips.
            <br />Unsubscribe anytime.
          </p>

          <button
            onClick={onClose}
            className="w-full mt-4 text-[#707070] hover:text-[#1A1A1A] text-sm font-medium transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};
