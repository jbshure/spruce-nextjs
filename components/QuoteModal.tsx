'use client';

import { useState } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    locations: '',
    annualSpend: '',
    footprint: '',
    priority: '',
    source: '',
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'Quote Form',
        event_label: `${formData.locations} locations`,
        value: parseInt(formData.annualSpend) || 0
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        {!isSubmitted ? (
          <>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-t-3xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Get Your Custom Quote</h2>
                  <p className="text-white/90">Takes less than 2 minutes • Board-ready report in 24 hours</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white text-3xl leading-none"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="Acme Restaurants"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="john@acmerestaurants.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Business Info */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Locations *
                </label>
                <select
                  name="locations"
                  required
                  value={formData.locations}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select...</option>
                  <option value="1">1 location</option>
                  <option value="2-5">2-5 locations</option>
                  <option value="6-10">6-10 locations</option>
                  <option value="11-25">11-25 locations</option>
                  <option value="26-50">26-50 locations</option>
                  <option value="51+">51+ locations</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Spend on Cleaning/PM/Repairs (Per Location) *
                </label>
                <select
                  name="annualSpend"
                  required
                  value={formData.annualSpend}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select range...</option>
                  <option value="0-25000">$0 - $25,000</option>
                  <option value="25000-50000">$25,000 - $50,000</option>
                  <option value="50000-100000">$50,000 - $100,000</option>
                  <option value="100000-200000">$100,000 - $200,000</option>
                  <option value="200000+">$200,000+</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Geographic Footprint *
                </label>
                <select
                  name="footprint"
                  required
                  value={formData.footprint}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select...</option>
                  <option value="la-metro">LA Metro only</option>
                  <option value="socal">Southern California</option>
                  <option value="california">California-wide</option>
                  <option value="west-coast">West Coast</option>
                  <option value="national">National</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Pain Point / Key Priority *
                </label>
                <select
                  name="priority"
                  required
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select your biggest challenge...</option>
                  <option value="standardize">Standardize cleaning across all locations</option>
                  <option value="reduce-calls">Reduce after-hours vendor calls</option>
                  <option value="cut-costs">Cut facility maintenance costs</option>
                  <option value="better-reporting">Improve audit and compliance reporting</option>
                  <option value="vendor-coordination">Coordinate multiple vendors (hood, pest, HVAC)</option>
                  <option value="health-inspection">Health inspection support</option>
                  <option value="emergency-response">Faster emergency response</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Where did you hear about us?
                </label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select...</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Referral from another operator</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="industry-event">Industry Event</option>
                  <option value="email">Email/Newsletter</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Custom Quote →'}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive communications from Hey Spruce. We respect your privacy and never share your data.
              </p>
            </form>
          </>
        ) : (
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h3>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in Hey Spruce. We're reviewing your information and will send you a customized quote + dashboard snapshot within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left">
              <h4 className="font-bold text-gray-900 mb-3">What happens next:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">1.</span>
                  <span>We'll analyze your current spend and location count</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">2.</span>
                  <span>Calculate potential savings and ROI using our data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">3.</span>
                  <span>Send you a board-ready proposal with pricing tiers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">4.</span>
                  <span>Include a dashboard demo showing real-time facility tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onClose}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-dark transition"
              >
                Continue Browsing
              </button>
              <a
                href="tel:+18772532646"
                className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition"
              >
                Call Us Now
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
