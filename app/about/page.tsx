import Image from 'next/image';
import { Users, Award, Heart, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const achievements = [
  { icon: Users, label: '10,000+ Happy Customers', value: '10K+' },
  { icon: Award, label: 'Years of Excellence', value: '40+' },
  { icon: Heart, label: 'Customer Satisfaction', value: '99%' },
  { icon: Shield, label: 'Certified Products', value: '100%' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
            About <span className="text-secondary">Shree Ganesh</span> Jewellers
          </h1>
          <p className="text-xl text-brown/80 max-w-3xl mx-auto leading-relaxed">
            A legacy of trust, tradition, and timeless elegance that has been serving 
            Raipur and beyond for over four decades.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Journey of Excellence
            </h2>
            <p className="text-brown/80 leading-relaxed">
              Founded in 1985 with a vision to bring the finest jewelry to the people of Raipur, 
              Shree Ganesh Jewellers has grown from a small family business to one of the most 
              trusted names in the jewelry industry.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Our commitment to quality, authenticity, and customer satisfaction has remained 
              unwavering throughout our journey. Every piece of jewelry that leaves our store 
              carries with it the blessings of Lord Ganesha and the promise of excellence.
            </p>
            <p className="text-brown/80 leading-relaxed">
              Today, we continue to honor traditional craftsmanship while embracing modern 
              techniques to create jewelry that not only adorns but also tells a story of 
              heritage and love.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jewelry craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
              <div className="text-sm text-brown/70">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12">
            Our Values & Commitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Authenticity</h3>
              <p className="text-brown/80 leading-relaxed">
                Every piece is hallmarked and certified, ensuring you receive only genuine, 
                high-quality jewelry that meets international standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Craftsmanship</h3>
              <p className="text-brown/80 leading-relaxed">
                Our skilled artisans bring decades of experience, creating each piece with 
                meticulous attention to detail and traditional techniques.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">Trust</h3>
              <p className="text-brown/80 leading-relaxed">
                Built on relationships and transparency, we've earned the trust of thousands 
                of families across Chhattisgarh through honest practices.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Visit Our Store Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our collections in person and let our experts help you find the perfect piece.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary-bronze text-primary font-semibold">
            Get Directions
          </Button>
        </div>
      </div>
    </div>
  );
}