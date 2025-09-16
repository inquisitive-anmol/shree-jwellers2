'use client';

import { services } from '@/lib/data';
import { 
  Smartphone, 
  TrendingUp, 
  Gift, 
  PenTool,
  Check
} from 'lucide-react';
import Link from 'next/link';

const iconMap = {
  smartphone: Smartphone,
  'trending-up': TrendingUp,
  gift: Gift,
  'pen-tool': PenTool,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-secondary rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border border-secondary-bronze rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-secondary">Premium</span> Services
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Beyond beautiful jewelry, we offer modern investment solutions and personalized services 
            to enhance your jewelry experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-navy rounded-2xl ring-2 ring-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-gold" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-white/90">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
            <span className="text-white/90 font-medium">Interested in our services?</span>
            <Link
              href="/services"
              className="bg-secondary hover:bg-secondary-bronze text-primary px-6 py-2 rounded-full font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}