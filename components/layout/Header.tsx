'use client';

import { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Calculate dynamic styles based on scroll position
  const getNavbarStyles = () => {
    const isAtTop = scrollY < 10;
    const scrollProgress = Math.min(scrollY / 100, 1);

    return {
      transform: isVisible ? 'translateY(0)' : 'translateY(-120%)',
      backdropFilter: isAtTop ? 'blur(0px)' : `blur(${8 + scrollProgress * 8}px)`,
      backgroundColor: isAtTop
        ? 'rgba(255, 255, 255, 0.95)'
        : `rgba(255, 255, 255, ${0.95 + scrollProgress * 0.05})`,
      boxShadow: isAtTop
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        : `0 10px 25px -5px rgba(0, 0, 0, ${0.1 + scrollProgress * 0.1})`,
      opacity: isVisible ? 1 : 0,
    };
  };

  const navbarStyles = getNavbarStyles();

  return (
    <>
      <header
        className="fixed top-8 left-0 right-0 z-50 border-b border-secondary/20 transition-all duration-700 ease-out"
        style={navbarStyles}
      >
        <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-20 h-20 bg-gold-gradient rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                {/* <span className="text-primary font-bold text-lg">🕉</span> */}
                <img src="/images/pjwLogo.png" alt="Priyansh Jwellers Logo." className='rounded-full' />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-heading font-bold text-primary">
                  Priyansh Jewellerss
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-brown hover:text-primary transition-colors duration-200 font-medium relative group text-lg"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Contact Info & CTA */}
            {/* <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-brown">
                <MapPin className="w-4 h-4 text-primary" />
                <Link href="https://maps.app.goo.gl/AaJA38BMauunr33A6?g_st=awb" target='_blank'>
                  <span>Sujangarh</span>
                </Link>
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
            </div> */}

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
              {/* <div className="pt-4 border-t border-secondary/20">
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
              </div> */}
            </div>
          </div>
        )}
      </header>
    </>
  );
}