'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactInfo } from '@/lib/data';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Collections', href: '/collections' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Gold Rate Banner */}
      <div className="bg-primary text-white py-2 px-4 text-center text-sm font-medium">
        <div className="">
          GOLD 22 KT (916) ₹69,800/10gm | SILVER ₹82,500/kg | Live Rates Updated
        </div>
      </div>

      <header className="fixed top-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary/20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-primary font-bold text-lg">🕉</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-primary">
                  SHREE GANESH
                </span>
                <span className="text-sm text-primary/80 font-medium -mt-1">
                  JEWELLERS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brown hover:text-primary transition-colors duration-200 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-brown">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Raipur</span>
              </div>
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary-dark text-white"
                asChild
              >
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-brown" />
              ) : (
                <Menu className="h-6 w-6 text-brown" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-secondary/20">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-brown hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary/20">
                <Button 
                  variant="default" 
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  asChild
                >
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}