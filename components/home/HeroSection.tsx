'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-8">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-secondary rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-secondary-bronze rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30 mb-5 mt-1">
            <Star className="w-4 h-4 text-secondary fill-current" />
            <span className="text-sm font-medium text-brown">Trusted Since 1930</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-gold mb-6 leading-tight animate-slide-up">
            Exquisite Jewelry
            <br />
            <span className="text-gold">Crafted with</span>
            <br />
            Tradition & Excellence
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gold/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our magnificent collection of handcrafted gold and diamond jewelry,
            where timeless tradition meets contemporary elegance at Raipur's most trusted jeweller.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold group"
              asChild
            >
              <Link href="/collections" className="flex items-center space-x-2">
                <span>Explore Collections</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Visit Our Store</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">40+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10k+</div>
              <div className="text-sm text-white">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">916</div>
              <div className="text-sm text-white">Gold Purity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-white">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}