'use client';

import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import SplashScreen from '@/components/ui/splash-screen';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AnimatePresence, motion } from 'motion/react';
import Shutter from '@/components/ui/shutter';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showShutter, setShowShutter] = useState(false);
  return (
    <div className='relative'>
      {
        loading ? <AnimatePresence><SplashScreen finishLoading={() => {
          setLoading(false)
          setShowShutter(true);
        }} /></AnimatePresence> : (
          <>
            {/* Shutter transition */}
            {showShutter && (
              <Shutter onFinish={() => setShowShutter(false)} />
            )}
            <motion.div className="min-h-screen bg-gradient-to-r from-black/40 to-cream-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: loading ? 0 : 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Header />
              <HeroSection />
              <CategoryGrid />
              <ServicesSection />
              <TestimonialsSection />
              <Footer />
            </motion.div>
          </>
        )
      }
    </div>
    // <div className="min-h-screen">
    //   <HeroSection />
    //   <CategoryGrid />
    //   <ServicesSection />
    //   <TestimonialsSection />
    // </div>
    // </>
  );
}