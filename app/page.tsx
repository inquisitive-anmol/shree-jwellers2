
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import VisitStore from '@/components/home/VisitStore';

export default function Home() {

  return (
    <div className='relative'>

      <div className="min-h-screen bg-cream-gradient"
      >
        <Header />
        <HeroSection />
        <CategoryGrid />
        <ServicesSection />
        <TestimonialsSection />
        <VisitStore />
        <Footer />
      </div>
    </div>
  );
}