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
              The Only Facilities Partner for Multi-Location Restaurant Chains
            </h1>
            <p className="text-xl text-white/90 mb-4">
              One platform. One partner. Complete facilities management for growing restaurant brands across Los Angeles.
            </p>
            <p className="text-2xl text-white font-medium mb-8">
              Cleaning + Preventive Maintenance + Repairs + Vendor Management
            </p>

            {/* Service Pillars */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { text: 'Nightly Cleaning' },
                { text: 'Preventive Maintenance' },
                { text: 'Emergency Repairs' },
                { text: 'Vendor Platform' }
              ].map((pillar, idx) => (
                <div key={idx} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl p-4 hover:bg-white/25 transition">
                  <div className="text-white font-semibold text-sm">{pillar.text}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition text-center"
              >
                Get Instant Quote
              </button>
              <Link href="#roi-calculator" className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition text-center">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Facilities Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your multi-location restaurant chain needs in one partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Restaurant Cleaning',
                description: 'Nightly cleaning, deep kitchen cleaning, BOH/FOH services',
                link: '/restaurant-cleaning-los-angeles'
              },
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
                title: 'Vendor Management',
                description: 'Coordinate all vendors through one platform',
                link: '/vendor-management'
              },
              {
                title: 'Hood & Exhaust Coordination',
                description: 'NFPA 96 compliant hood cleaning scheduling',
                link: '/hood-exhaust-cleaning'
              },
              {
                title: 'Multi-Location Programs',
                description: 'Built for restaurant chains across LA',
                link: '/multi-location-cleaning'
              }
            ].map((service, idx) => (
              <Link key={idx} href={service.link} className="bg-white rounded-2xl p-6 shadow-custom-md hover:shadow-custom-xl transition-all duration-300 group">
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

      {/* Metrics Dashboard */}
      <MetricsDashboard />

      {/* Trust & Proof */}
      <TrustProof />

      {/* Platform Section */}
      <section id="platform" className="scroll-mt-24 py-16 md:py-24 bg-slate-50">
        <div className="container-custom max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
                The Spruce Platform
              </h2>
              <p className="mt-4 text-slate-700">
                One dashboard for every location, work order, and vendor. Spruce isn&apos;t just a cleaning crew – behind every visit is a platform that shows you exactly what&apos;s getting done across your chain.
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

              <div className="mt-8">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  See how the platform works
                </button>
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
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Streamline Your Facility Operations?</h2>
          <p className="text-xl mb-8 text-white/90">Join 50+ multi-location restaurant brands saving 28% on facility costs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-white text-primary px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition"
            >
              Get Your Custom Quote
            </button>
            <a
              href="tel:+18772532646"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition"
            >
              Call 1-877-CLEANING
            </a>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
