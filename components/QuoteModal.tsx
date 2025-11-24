'use client';

import { useState, useEffect } from 'react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string; // Track which CTA was clicked
}

export default function QuoteModal({ isOpen, onClose, source = 'hero' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    locations: '',
    conceptType: '',
    geography: [],
    currentSetup: '',
    priority: '',
    name: '',
    role: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_start_quote', {
        event_category: 'Quote Form',
        event_label: source,
      });
    }
  }, [isOpen, source]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submit_quote', {
        event_category: 'Quote Form',
        event_label: `${formData.locations} locations - ${formData.conceptType}`,
        value: formData.locations
      });
    }

    // TODO: Send to actual API endpoint
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleGeographyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = Array.from(e.target.selectedOptions).map(opt => opt.value);
    setFormData(prev => ({
      ...prev,
      geography: options as any
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
                  <h2 className="text-3xl font-bold mb-2">Tell us about your locations</h2>
                  <p className="text-white/90">We'll send a per-store quote and rollout plan</p>
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
              {/* Number of Locations */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of locations *
                </label>
                <select
                  name="locations"
                  required
                  value={formData.locations}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select...</option>
                  <option value="1-3">1-3 locations</option>
                  <option value="4-10">4-10 locations</option>
                  <option value="11-25">11-25 locations</option>
                  <option value="26-50">26-50 locations</option>
                  <option value="51+">51+ locations</option>
                </select>
              </div>

              {/* Concept Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Concept type *
                </label>
                <select
                  name="conceptType"
                  required
                  value={formData.conceptType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select...</option>
                  <option value="full-service">Full-service restaurant</option>
                  <option value="fast-casual">Fast casual</option>
                  <option value="qsr">Quick-service / QSR</option>
                  <option value="coffee-bakery">Coffee / bakery</option>
                  <option value="commissary">Commissary + satellites</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Geography */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Where are your locations? * <span className="text-xs font-normal text-gray-500">(Select all that apply)</span>
                </label>
                <select
                  name="geography"
                  required
                  multiple
                  value={formData.geography}
                  onChange={handleGeographyChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                  size={4}
                >
                  <option value="la-county">Los Angeles County</option>
                  <option value="greater-socal">Greater Southern California</option>
                  <option value="multi-state">Multi-state</option>
                  <option value="other">Other</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">Hold Ctrl (Windows) or Cmd (Mac) to select multiple</p>
              </div>

              {/* Current Setup */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current setup *
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'multiple-vendors', label: 'We have multiple cleaning / PM vendors' },
                    { value: 'single-vendor', label: 'Single vendor for everything' },
                    { value: 'in-house', label: 'Mostly handled by staff' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="currentSetup"
                        value={option.value}
                        checked={formData.currentSetup === option.value}
                        onChange={handleChange}
                        required
                        className="mr-3 w-4 h-4 text-primary"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Top Priority */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Top priority *
                </label>
                <select
                  name="priority"
                  required
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white"
                >
                  <option value="">Select your biggest challenge...</option>
                  <option value="standardize">Standardize cleanliness across locations</option>
                  <option value="reduce-emergencies">Reduce emergency maintenance calls</option>
                  <option value="consolidate-vendors">Consolidate vendors + invoices</option>
                  <option value="visibility">Get visibility / reporting</option>
                  <option value="expansion">Prepare for expansion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your name *
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
                    Your role *
                  </label>
                  <input
                    type="text"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="VP Operations"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
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

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Custom Quote →'}
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
                Takes about 60 seconds. We'll send a quote and rollout options in 1 business day.
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're reviewing your locations and will send you a per-location quote + rollout plan within 1 business day.
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-left">
              <h4 className="font-bold text-gray-900 mb-3">What happens next:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">1.</span>
                  <span>We map a facilities program (cleaning, PM, repairs, vendor coordination) based on your locations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">2.</span>
                  <span>You get a per-location price + rollout plan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">3.</span>
                  <span>We can pilot at a subset of locations before rolling out chain-wide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">4.</span>
                  <span>You'll get dashboard access to track every location in real-time</span>
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
