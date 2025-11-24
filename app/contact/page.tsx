import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
  title: 'Contact Hey Spruce | Get a Free Quote for Restaurant Cleaning',
  description: 'Contact Hey Spruce for restaurant cleaning services in Los Angeles. Get a free quote for multi-location facilities management, nightly cleaning, and preventive maintenance.',
};

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="text-sm text-white/80 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <span>Contact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Get a Free Quote
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ready to simplify facilities management for your restaurant chain? Contact us for a free, no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We serve multi-location restaurant chains across Los Angeles County. Our team is ready to discuss your specific needs and provide a customized quote.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a href="tel:+18772532646" className="text-primary text-xl hover:underline">
                    1-877-CLEANING
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a href="mailto:contact@heyspruce.com" className="text-primary hover:underline">
                    contact@heyspruce.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                  <p className="text-gray-600">
                    Los Angeles County including Downtown LA, West Hollywood, Santa Monica, Beverly Hills, Pasadena, Glendale, Burbank, and surrounding areas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    We typically respond to inquiries within 2-4 hours during business hours. For urgent needs, please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-custom-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@restaurant.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="1-877-CLEANING"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Restaurant / Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="ABC Restaurant Group"
                  />
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Locations
                  </label>
                  <select
                    id="locations"
                    name="locations"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 location</option>
                    <option value="2-3">2-3 locations</option>
                    <option value="4-10">4-10 locations</option>
                    <option value="11-25">11-25 locations</option>
                    <option value="26+">26+ locations</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="services" className="block text-sm font-semibold text-gray-700 mb-2">
                    Services Interested In
                  </label>
                  <select
                    id="services"
                    name="services"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select...</option>
                    <option value="nightly-cleaning">Nightly Cleaning</option>
                    <option value="deep-cleaning">Deep Kitchen Cleaning</option>
                    <option value="preventive-maintenance">Preventive Maintenance</option>
                    <option value="vendor-management">Vendor Management</option>
                    <option value="full-facilities">Full Facilities Management</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition"
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to be contacted by Hey Spruce regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to Talk?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is available to discuss your facilities management needs
          </p>
          <a
            href="tel:+18772532646"
            className="inline-block bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-dark transition"
          >
            Call 1-877-CLEANING
          </a>
        </div>
      </section>
    </main>
  );
}
