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
              Restaurant Cleaning & Facilities Management for Multi-Location Chains
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
