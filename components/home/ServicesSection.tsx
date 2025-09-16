'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck,
  BadgeCheck,
  Wrench,
  Globe,
  Handshake,
  BadgePercent,
  RefreshCcw,
  Landmark
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  };
  const cards = [
    {
      title: 'GST Certified & Transparent',
      Icon: ShieldCheck,
      variant: 'bright',
      description: 'No hidden charges. What you see is what you get — 100% transparent billing.'
    },
    {
      title: 'BIS Hallmark Jewellery',
      Icon: BadgeCheck,
      variant: 'bright',
      description: 'Every gold and silver piece is BIS Hallmarked — guaranteed purity, zero compromise.'
    },
    {
      title: 'Free 6-Month Repairing',
      Icon: Wrench,
      variant: 'bright',
      description: 'We stand by our quality. Enjoy complimentary repair services for up to 6 months.'
    },
    {
      title: 'Worldwide Safe Delivery',
      Icon: Globe,
      variant: 'bright',
      description: 'Secure, insured shipping — your jewellery reaches you safely, wherever you are.'
    },
    {
      title: 'B2B Wholesale Excellence',
      Icon: Handshake,
      variant: 'faded',
      description: 'Trusted by jewellers & resellers across India — bulk deals, timely deliveries, quality.'
    },
    {
      title: 'Minimum Making Charges',
      Icon: BadgePercent,
      variant: 'faded',
      description: 'Ultra-competitive making charges — maximum value for every purchase.'
    },
    {
      title: 'Jewellery Exchange & Upgrades',
      Icon: RefreshCcw,
      variant: 'faded',
      description: 'Outgrown a design? Upgrade easily with flexible exchange options.'
    },
    {
      title: 'Antique Trade-In',
      Icon: Landmark,
      variant: 'faded',
      description: 'Bring your heritage pieces — honest valuation and seamless trade-in.'
    },
  ] as const;
  return (
    <section className="pb-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-secondary rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border border-secondary-bronze rounded-full translate-x-40 translate-y-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gold">
            Why Choose Us
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            At Priyansh Jewellers, we don’t just sell ornaments – we deliver heritage, trust, and unmatched value.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, Icon, variant, description }, index) => {
            const isBright = variant === 'bright';
            return (
              <motion.div
                key={title}
                className={`group relative overflow-hidden rounded-2xl ${isBright ? 'bg-gold text-navy' : 'bg-white/10 text-white'}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
              >
                {/* Content */}
                <div className="relative p-5 md:p-6 lg:p-7 xl:p-8 min-h-40 flex flex-col">
                  <div className={`${isBright ? 'bg-white' : 'bg-navy ring-2 ring-gold'} w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-4 md:mb-6`}>
                    <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isBright ? 'text-navy' : 'text-gold'}`} />
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-heading font-bold leading-snug mb-2">{title}</h3>
                  <p className={`${isBright ? 'text-navy/80' : 'text-white/85'} text-sm md:text-[15px] leading-relaxed`}>{description}</p>
                </div>
              </motion.div>
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