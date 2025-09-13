import { categories } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Package } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function CollectionsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-cream-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">
              Our Jewelry Collections
            </h1>
            <p className="text-xl text-brown/80 max-w-3xl mx-auto">
              Discover our complete range of handcrafted jewelry, from traditional designs
              to contemporary pieces, all made with the finest materials and expert craftsmanship.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Product Count */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="flex items-center space-x-2 text-sm font-semibold text-brown">
                      <Package className="w-4 h-4" />
                      <span>{category.productCount} pieces</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-brown/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-semibold">
                      Explore Collection
                    </span>
                    <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}