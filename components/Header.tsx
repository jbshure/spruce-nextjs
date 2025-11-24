'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import SpeakToSalesModal from './SpeakToSalesModal';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-custom-sm">
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Hey Spruce Logo"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-white hover:text-white/80 font-medium transition">
                Services ▾
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-custom-xl py-2 z-50">
                  <Link href="/restaurant-cleaning-los-angeles" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                    Restaurant Cleaning
                  </Link>
                  <Link href="/commercial-kitchen-cleaning" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                    Kitchen Cleaning
                  </Link>
                  <Link href="/preventive-maintenance" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                    Preventive Maintenance
                  </Link>
                  <Link href="/vendor-management" className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                    Vendor Management
                  </Link>
                </div>
              )}
            </div>
            <Link href="/#platform" className="text-white hover:text-white/80 font-medium transition">
              Dashboard
            </Link>
            <Link href="/#case-studies" className="text-white hover:text-white/80 font-medium transition">
              Case Studies
            </Link>
            <Link href="/#pricing" className="text-white hover:text-white/80 font-medium transition">
              Pricing
            </Link>
            <Link href="/#about" className="text-white hover:text-white/80 font-medium transition">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+18772532646" className="text-white hover:text-white/80 font-semibold transition">
              1-877-CLEANING
            </a>
            <Link
              href="/#quote"
              className="text-white hover:text-white/80 font-semibold transition"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-white text-primary px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Speak to Sales
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/restaurant-cleaning-los-angeles" className="text-white hover:text-white/80 py-2">
                Restaurant Cleaning
              </Link>
              <Link href="/commercial-kitchen-cleaning" className="text-white hover:text-white/80 py-2">
                Kitchen Cleaning
              </Link>
              <Link href="/preventive-maintenance" className="text-white hover:text-white/80 py-2">
                Preventive Maintenance
              </Link>
              <Link href="/#platform" className="text-white hover:text-white/80 py-2">
                Dashboard
              </Link>
              <Link href="/#pricing" className="text-white hover:text-white/80 py-2">
                Pricing
              </Link>
              <a href="tel:+18772532646" className="text-white hover:text-white/80 py-2 font-semibold">
                Call 1-877-CLEANING
              </a>
              <Link href="/#quote" className="text-white hover:text-white/80 py-2">
                Get a Quote
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="text-left text-white hover:text-white/80 py-2 font-semibold"
              >
                Speak to Sales
              </button>
            </div>
          </div>
        )}
      </nav>

      <SpeakToSalesModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
