import { services } from '@/lib/data';
import { 
  Smartphone, 
  TrendingUp, 
  Gift, 
  PenTool,
  Check,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const iconMap = {
  smartphone: Smartphone,
  'trending-up': TrendingUp,
  gift: Gift,
  'pen-tool': PenTool,
};

export default function ServicesPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-cream-gradient pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            Our <span className="text-secondary">Premium</span> Services
          </h1>
          <p className="text-xl text-brown/80 max-w-3xl mx-auto">
            Beyond beautiful jewelry, we offer innovative financial solutions and personalized 
            services to enhance your jewelry experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold text-primary">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-brown/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <h3 className="font-semibold text-brown">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                          <span className="text-brown/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Button className="w-full bg-primary hover:bg-primary-dark text-white group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-2xl p-12 shadow-lg text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Additional Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Jewelry Repair & Maintenance</h3>
              <p className="text-brown/70 text-sm">Professional repair and cleaning services</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Gold Exchange</h3>
              <p className="text-brown/70 text-sm">Exchange your old gold for new designs</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Certification & Appraisal</h3>
              <p className="text-brown/70 text-sm">Professional jewelry valuation services</p>
            </div>
          </div>

          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Contact Us for More Information
            </Button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}