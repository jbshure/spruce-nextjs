'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuoteModal from './QuoteModal';
import ROICalculator from './ROICalculator';
import TrustProof from './TrustProof';
import MetricsDashboard from './MetricsDashboard';

export default function HomePageClient() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary-dark to-secondary flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-1.webp"
            alt="Professional restaurant kitchen cleaning services"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Restaurant Cleaning Los Angeles | Facilities Management for Multi-Location Chains
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Nightly cleaning, deep kitchen cleaning, and full facilities management across LA and Southern California – backed by a single dashboard.
            </p>
            <p className="text-lg text-white/80 mb-2">
              Serving LA Metro, Orange County, Inland Empire, and select multi-state groups
            </p>
            <p className="text-2xl text-white font-medium mb-8">
              Professional Restaurant Cleaning + PM + Repairs + Vendor Coordination
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { text: 'Nightly Cleaning' },
                { text: 'Deep Kitchen Cleaning' },
                { text: 'Preventive Maintenance' },
                { text: 'Client Dashboard' }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-4 hover:bg-white/25 transition">
                  <div className="text-white font-semibold text-sm">{pillar.text}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setIsQuoteModalOpen(true);
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'hero_quote_click', {
                      event_category: 'Quote CTA',
                      event_label: 'Hero Section'
                    });
                  }
                }}
                className="btn-secondary btn-lg text-center"
              >
                Get Custom Facilities Quote
              </button>
              <Link href="#roi-calculator" className="btn-ghost btn-lg text-center">
                Calculate Savings
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/20">
              {[
                { label: 'Fully', sub: 'Insured' },
                { label: 'NFPA 96', sub: 'Compliant' },
                { label: 'LA County', sub: 'Licensed' },
                { label: 'Multi-Location', sub: 'Specialists' }
              ].map((badge, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/20 transition">
                  <div className="text-white font-bold text-sm">{badge.label}</div>
                  <div className="text-white/80 text-xs">{badge.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Cleaning Services - Featured */}
      <section id="services" className="section-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Restaurant Cleaning Services Los Angeles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cleaning programs built for multi-location restaurant chains
            </p>
          </div>

          {/* Featured Restaurant Cleaning Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <Link href="/restaurant-cleaning-los-angeles" className="card card-hover p-8 group animate-fade-in block">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition">Restaurant Cleaning Programs</h3>
                  <p className="text-gray-700 mb-4">Complete cleaning services designed for restaurant chains across Los Angeles and Southern California</p>
                  <ul className="grid md:grid-cols-3 gap-3 mb-4">
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Nightly FOH/BOH cleaning</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Quarterly deep cleans</span>
                    </li>
                    <li className="flex items-start text-sm">
                      <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Inspection-prep detailing</span>
                    </li>
                  </ul>
                  <div className="text-primary font-semibold text-lg">View full cleaning services →</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Services Grid */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Complete Facilities Management</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond cleaning: preventive maintenance, repairs, and vendor coordination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Kitchen Deep Cleaning',
                description: 'Equipment pull-outs, degreasing, quarterly programs',
                link: '/commercial-kitchen-cleaning'
              },
              {
                title: 'Preventive Maintenance',
                description: 'Equipment PM, filter changes, light repairs',
                link: '/preventive-maintenance'
              },
              {
                title: 'Vendor Coordination',
                description: 'Manage HVAC, refrigeration, plumbing through one dashboard',
                link: '/vendor-management'
              },
              {
                title: 'Hood & Exhaust Cleaning',
                description: 'NFPA 96 compliant hood cleaning scheduling',
                link: '/hood-exhaust-cleaning'
              },
              {
                title: 'Light Repairs',
                description: 'Small fixes handled in-house during cleaning visits',
                link: '/repairs'
              },
              {
                title: 'Multi-Location Programs',
                description: 'Standardized service across your entire chain',
                link: '/multi-location-cleaning'
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="card card-hover p-6 group animate-fade-in">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4 text-primary font-semibold">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <div id="roi-calculator" className="scroll-mt-20">
        <ROICalculator />
      </div>

      {/* How Quote Process Works */}
      <section className="section-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-lg text-center mb-12">How the Quote Process Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: '1',
                title: 'Share your locations & priorities',
                desc: 'Tell us about your concept, footprint, and biggest facility challenges'
              },
              {
                num: '2',
                title: 'We map a facilities program',
                desc: 'Cleaning, PM, repairs, and vendor coordination tailored to your operations'
              },
              {
                num: '3',
                title: 'Get per-location pricing + rollout plan',
                desc: 'Transparent quote delivered within 1 business day'
              },
              {
                num: '4',
                title: 'Pilot before scaling',
                desc: 'Test at a subset of locations before rolling out chain-wide'
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <MetricsDashboard />

      {/* Trust & Proof */}
      <TrustProof />

      {/* Case Studies */}
      <section id="case-studies" className="section-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from multi-location restaurant brands using Spruce
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Case Study 1: Fast-Casual Chain */}
            <div className="card p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">Fast-Casual Concept</div>
                  <div className="text-sm text-gray-600">28 locations • Southern California</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-xl mb-3">The Problem</h3>
                <p className="text-gray-700 mb-4">
                  Working with 8 different vendors across 28 locations. No visibility into what was getting done. Emergency cleanings eating into margins. Operations team spending 20+ hours/week coordinating vendors.
                </p>

                <h3 className="font-bold text-xl mb-3">The Solution</h3>
                <p className="text-gray-700 mb-4">
                  Consolidated to Spruce for nightly cleaning + quarterly deep cleans. All 28 locations on standardized checklist. Dashboard gave ops team real-time visibility. Light repairs handled during cleaning visits.
                </p>

                <h3 className="font-bold text-xl mb-3">The Results</h3>
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">31%</div>
                    <div className="text-xs text-gray-600">Cost reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15hr</div>
                    <div className="text-xs text-gray-600">Weekly time saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs text-gray-600">Inspection pass</div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700">
                "The dashboard alone saved our ops team 15+ hours per week. We actually know what's getting done now."
              </blockquote>
            </div>

            {/* Case Study 2: QSR Franchise */}
            <div className="card p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">Quick-Service Franchise Group</div>
                  <div className="text-sm text-gray-600">47 locations • National footprint</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-xl mb-3">The Problem</h3>
                <p className="text-gray-700 mb-4">
                  Franchisees using local cleaning companies with wildly inconsistent quality. 18-24 emergency calls per month across the system. Corporate had zero visibility into facilities issues until they became crises.
                </p>

                <h3 className="font-bold text-xl mb-3">The Solution</h3>
                <p className="text-gray-700 mb-4">
                  Rolled out Spruce to all company-owned stores first (12 locations), then offered to franchisees. Standardized cleaning specs, PM schedules, and vendor coordination. Corporate got dashboard access to track all locations.
                </p>

                <h3 className="font-bold text-xl mb-3">The Results</h3>
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">40%</div>
                    <div className="text-xs text-gray-600">Fewer emergencies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">8→1</div>
                    <div className="text-xs text-gray-600">Vendor portals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">1.4d</div>
                    <div className="text-xs text-gray-600">Avg close time</div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-700">
                "Single platform replaced 8 different vendor portals. Franchisees are thrilled with the consistency."
              </blockquote>
            </div>

            {/* Case Study 3: Fine Dining Group */}
            <div className="card p-8 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-lg">Full-Service Restaurant Group</div>
                  <div className="text-sm text-gray-600">12 locations • LA Metro Area</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-xl mb-3">The Problem</h3>
                <p className="text-gray-700 mb-4">
                  High-end concepts requiring white-glove cleaning standards. Previous vendor missed details, leading to 3 health code violations in one year. No photo documentation meant disputes over what actually got cleaned.
                </p>

                <h3 className="font-bold text-xl mb-3">The Solution</h3>
                <p className="text-gray-700 mb-4">
                  Implemented detailed checklists with photo requirements for every visit. Assigned dedicated crews who learned each venue's unique needs. Added pre-inspection deep cleans to schedule automatically.
                </p>

                <h3 className="font-bold text-xl mb-3">The Results</h3>
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">0</div>
                    <div className="text-xs text-gray-600">Code violations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">99%</div>
                    <div className="text-xs text-gray-600">Vendor on-time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">24hr</div>
                    <div className="text-xs text-gray-600">Quote delivery</div>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-700">
                "Zero health code violations in 18 months. Worth every penny for the peace of mind."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Spruce */}
      <section id="why-spruce" className="section-gray">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Why Spruce?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for multi-location restaurant chains — not adapted from single-location cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {/* Differentiator 1 */}
            <div className="card card-hover p-8 animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">One Dashboard for Every Location</h3>
              <p className="text-gray-700">
                Stop juggling vendor portals, emails, and phone calls. See every cleaning visit, work order, and vendor across your entire chain in one place. Real-time updates, photo proof, and full history.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="card card-hover p-8 animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Standardized Across All Locations</h3>
              <p className="text-gray-700">
                Same checklists, same quality standards, same reporting format — whether you have 5 locations or 50. No more inconsistency between stores. Operations teams love the predictability.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="card card-hover p-8 animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Beyond Cleaning: Full Facilities Partner</h3>
              <p className="text-gray-700">
                Nightly cleaning is just the start. We handle preventive maintenance, coordinate your other vendors (HVAC, refrigeration, plumbing), manage light repairs, and keep you compliant. One partner, complete coverage.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="card card-hover p-8 animate-fade-in">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Built for Restaurant Operations</h3>
              <p className="text-gray-700">
                We understand restaurant hours, health inspections, hood cleaning schedules, and what "clean" actually means in a commercial kitchen. Not a generic janitorial service trying to figure out your industry.
              </p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="max-w-4xl mx-auto">
            <h3 className="heading-sm text-center mb-8">What Restaurant Leaders Say</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card p-6 animate-scale-in">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Spruce has been instrumental in maintaining our high standards across all locations. The dashboard visibility is a game-changer."
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold">Angela Zeimer</div>
                  <div className="text-sm text-gray-600">Jurassic Magic</div>
                </div>
              </div>

              <div className="card p-6 animate-scale-in">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Finally, a facilities partner that understands the restaurant business. The consistency across our venues is exactly what we needed."
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold">Ahmed Ameziane</div>
                  <div className="text-sm text-gray-600">h.wood Group</div>
                </div>
              </div>

              <div className="card p-6 animate-scale-in">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Spruce handles everything from nightly cleaning to coordinating our other vendors. One less thing to manage at each location."
                  </p>
                </div>
                <div className="border-t pt-4">
                  <div className="font-bold">Jonah Freedman</div>
                  <div className="text-sm text-gray-600">Mistral & Greekmans</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Dashboard Section */}
      <section id="platform" className="scroll-mt-24 py-16 md:py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
                Client Dashboard
              </h2>
              <p className="mt-4 text-slate-700">
                Track every cleaning visit, work order, and vendor across all your locations. Behind every service is a dashboard that shows you exactly what&apos;s getting done at each restaurant.
              </p>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>
                  <span className="font-medium">Work orders –</span> create, assign, and track issues across every store.
                </li>
                <li>
                  <span className="font-medium">Asset tracking –</span> log equipment, serials, warranty info, and history.
                </li>
                <li>
                  <span className="font-medium">Checklists &amp; photos –</span> every cleaning and PM visit is checklist-driven with photo proof.
                </li>
                <li>
                  <span className="font-medium">Vendor management –</span> track HVAC, refrigeration, plumbing and other vendors in one place.
                </li>
                <li>
                  <span className="font-medium">Multi-location dashboards –</span> see open issues, completed work, and spend by location.
                </li>
              </ul>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => {
                    setIsQuoteModalOpen(true);
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'platform_quote_click', {
                        event_category: 'Quote CTA',
                        event_label: 'Platform Section'
                      });
                    }
                  }}
                  className="btn-primary btn-sm"
                >
                  See how the platform works
                </button>
                <p className="text-sm text-slate-600">
                  Platform starts at $0/location for basic tracking, $49-99/location for full automation.
                  <a href="#pricing" className="text-primary hover:underline ml-1">See all pricing →</a>
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-900">
                  Sample multi-location dashboard
                </h3>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Live status
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-medium text-slate-900">Downtown LA #1</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs text-slate-600">Cleaning complete</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-medium text-slate-900">Santa Monica #2</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    <span className="text-xs text-slate-600">PM in progress</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-medium text-slate-900">Pasadena #3</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs text-slate-600">All systems good</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <div className="font-medium text-slate-900">Burbank #4</div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500"></span>
                    <span className="text-xs text-slate-600">Work order open: HVAC</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-slate-50 p-3">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="font-semibold text-slate-900">8</div>
                    <div className="text-slate-600">Open</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">1.8d</div>
                    <div className="text-slate-600">Avg close</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">94%</div>
                    <div className="text-slate-600">On-time rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about restaurant cleaning services in Los Angeles
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much does restaurant cleaning cost in Los Angeles?",
                answer: "Restaurant cleaning costs vary based on location size, frequency, and services needed. Nightly cleaning typically ranges from $500-$2,000 per location per month. Deep kitchen cleaning runs $1,500-$5,000 per visit. Multi-location chains save 20-30% by consolidating with one partner like Spruce."
              },
              {
                question: "What's included in nightly restaurant cleaning?",
                answer: "Nightly cleaning includes FOH (dining room, restrooms, entrance) and BOH (kitchen line, equipment surfaces, floors). We handle mopping, degreasing, trash removal, surface sanitization, and restroom restocking. All visits are checklist-driven with photo documentation."
              },
              {
                question: "How often should restaurants get deep kitchen cleaning?",
                answer: "Most restaurants need deep kitchen cleaning quarterly (every 3 months). High-volume kitchens may need it monthly or bi-monthly. Deep cleaning includes equipment pull-outs, behind-the-line degreasing, wall and ceiling cleaning, and floor scrubbing."
              },
              {
                question: "Do you service restaurants outside Los Angeles?",
                answer: "Yes. We primarily serve LA Metro, Orange County, Inland Empire, and Greater Southern California. For select multi-location groups, we can expand to other California markets and coordinate services in additional states."
              },
              {
                question: "What makes Spruce different from other restaurant cleaning companies?",
                answer: "Spruce is built specifically for multi-location restaurant chains. We provide one dashboard for all locations, standardized service across your chain, and handle cleaning + preventive maintenance + vendor coordination. Most cleaning companies only do cleaning."
              },
              {
                question: "How quickly can you start service?",
                answer: "For new clients, we typically start within 1-2 weeks. This includes site visits, customized checklist creation, crew assignment, and dashboard setup. Emergency cleaning can often start within 24-48 hours."
              },
              {
                question: "Do you handle health inspection preparation?",
                answer: "Yes. We provide pre-inspection deep cleaning and know exactly what health inspectors look for in Los Angeles County. Our clients maintain a 98.7% inspection pass rate, 10% higher than the industry average."
              },
              {
                question: "Can you coordinate with our other vendors (HVAC, plumbing, etc.)?",
                answer: "Absolutely. Our dashboard tracks all vendors including HVAC, refrigeration, plumbing, and hood cleaning companies. We can create work orders, schedule service, and give you visibility into all facilities activity."
              }
            ].map((faq, idx) => (
              <div key={idx} className="card p-6 animate-fade-in">
                <h3 className="font-bold text-xl mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-primary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Streamline Your Facility Operations?</h2>
          <p className="text-xl mb-8 text-white/90">Join 50+ multi-location restaurant brands saving 28% on facility costs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setIsQuoteModalOpen(true);
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'footer_quote_click', {
                    event_category: 'Quote CTA',
                    event_label: 'Footer Section'
                  });
                }
              }}
              className="btn-secondary btn-lg"
            >
              Get Custom Facilities Quote
            </button>
            <a
              href="tel:+18772532646"
              className="btn-ghost btn-lg"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} source="hero" />
    </>
  );
}
