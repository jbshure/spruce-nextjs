import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Hey Spruce Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              The only facilities partner for multi-location restaurant chains in Los Angeles.
            </p>
          </div>

          {/* Cleaning Services */}
          <div>
            <h4 className="font-semibold mb-4">Cleaning Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/restaurant-cleaning-los-angeles" className="text-gray-600 hover:text-primary">Restaurant Cleaning</Link></li>
              <li><Link href="/commercial-kitchen-cleaning" className="text-gray-600 hover:text-primary">Kitchen Cleaning</Link></li>
              <li><Link href="/deep-kitchen-cleaning" className="text-gray-600 hover:text-primary">Deep Cleaning</Link></li>
              <li><Link href="/nightly-cleaning" className="text-gray-600 hover:text-primary">Nightly Cleaning</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-semibold mb-4">Other Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/preventive-maintenance" className="text-gray-600 hover:text-primary">Preventive Maintenance</Link></li>
              <li><Link href="/vendor-management" className="text-gray-600 hover:text-primary">Vendor Management</Link></li>
              <li><Link href="/#platform" className="text-gray-600 hover:text-primary">Platform</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📍 Los Angeles, CA</li>
              <li>📞 <a href="tel:+18772532646" className="hover:text-primary">1-877-CLEANING</a></li>
              <li>✉️ <a href="mailto:info@heyspruce.com" className="hover:text-primary">info@heyspruce.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Hey Spruce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
