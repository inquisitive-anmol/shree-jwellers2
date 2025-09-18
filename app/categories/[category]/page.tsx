import { categories, sampleProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ImageCarousel from '@/components/common/ImageCarousel';
import Link from 'next/link';
import { ArrowLeft, Filter, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CategoryProducts from '@/components/category/CategoryProducts';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find(cat => cat.slug === params.category);
  
  if (!category) {
    notFound();
  }

  // Filter products by category
  const categoryProducts = sampleProducts.filter(product => product.category === category.slug);

  return (
    <div className="min-h-screen bg-cream-gradient py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-brown/70 mb-8">
          <Link href="/" className="hover:text-brown transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-brown transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-brown font-medium">{category.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          href="/collections"
          className="inline-flex items-center space-x-2 text-brown hover:text-brown-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Collections</span>
        </Link>

        {/* Category Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brown mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-brown/80 max-w-2xl mx-auto mb-8">
            {category.description}
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-brown/70">
            <span>{category.productCount} Products Available</span>
            <span>•</span>
            <span>Premium Quality Assured</span>
            <span>•</span>
            <span>Certified Jewelry</span>
          </div>
        </div>

        <CategoryProducts products={categoryProducts} />

        {/* Load More */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-brown text-brown hover:bg-brown hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}