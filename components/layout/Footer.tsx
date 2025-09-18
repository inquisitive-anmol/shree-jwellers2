import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { contactInfo, categories } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-brown text-white">
      {/* Newsletter Section */}
      {/* <div className="bg-navy-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Stay Updated with Latest Collections
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to receive exclusive offers, new arrivals, and jewelry care tips
            </p>
            <div className="flex max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="rounded-r-none bg-white text-brown"
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-secondary hover:bg-secondary-bronze text-brown font-medium"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                {/* <span className="text-primary font-bold text-lg">🕉</span> */}
                <img src="/images/pjwLogo.png" alt="Priyansh Jwellers Logo." className='rounded-full' />
              </div>
                <div>
                  <h3 className="text-xl font-heading font-bold">Priyansh Jewellerss</h3>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Crafting exquisite jewelry with tradition and excellence since generations. 
                Your trusted partner for life's precious moments.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4 text-gold" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4 text-gold" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Youtube className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="grid grid-cols-3 gap-2 text-sm md:space-y-2 md:grid-cols-1 md:text-base">
                <li><Link href="/collections" className="text-white/80 hover:text-gold transition-colors">Collections</Link></li>
                <li><Link href="/services" className="text-white/80 hover:text-gold transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-white/80 hover:text-gold transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white/80 hover:text-gold transition-colors">Contact</Link></li>
                <li><Link href="/care-guide" className="text-white/80 hover:text-gold transition-colors">Jewelry Care</Link></li>
                <li><Link href="/sizing-guide" className="text-white/80 hover:text-gold transition-colors">Sizing Guide</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Categories</h4>
              <ul className="grid grid-cols-3 gap-2 text-sm md:space-y-2 md:grid-cols-1 md:text-base">
                {categories.slice(0, 6).map((category) => (
                  <li key={category.id}>
                    <Link 
                      href={`/categories/${category.slug}`}
                      className="text-white/80 hover:text-gold transition-colors"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-heading font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <p className="text-white/80 text-sm">{contactInfo.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gold" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white/80 hover:text-gold transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gold" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white/80 hover:text-gold transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gold mt-0.5" />
                  <div className="text-white/80 text-sm">
                    <p>Mon-Fri: {contactInfo.hours.weekdays}</p>
                    <p>Sat-Sun: {contactInfo.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-white/80 text-sm">
              © 2025 Priyansh Jewellerss. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/80 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <Link href="/returns" className="text-white/80 hover:text-gold transition-colors">
                Return Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}