import { categories, sampleProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ImageCarousel from '@/components/common/ImageCarousel';
import Link from 'next/link';
import { ArrowLeft, Filter, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <span>/</span>
          <span className="text-primary font-medium">{category.name}</span>
        </nav>

        {/* Back Button */}
        <Link 
          href="/collections"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Collections</span>
        </Link>

        {/* Category Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-4">
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

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 bg-white rounded-lg p-4 shadow-md">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <div className="text-sm text-brown/70">
            Showing {categoryProducts.length} of {category.productCount} products
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categoryProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Images Carousel */}
              <div className="relative">
                <ImageCarousel images={product.images} alt={product.name} priority={index < 4} />

                {/* Action Buttons */}
                <div className="pointer-events-none absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="pointer-events-auto w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-primary" />
                  </button>
                  <button className="pointer-events-auto w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Share2 className="w-4 h-4 text-primary" />
                  </button>
                </div>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    SALE
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-primary mb-2 group-hover:text-primary-dark transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-brown/70 mb-3">{product.material}</p>
                
                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-brown/50 line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex justify-between text-xs text-brown/70 mb-4">
                  {product.weight && <span>Weight: {product.weight}</span>}
                  {product.purity && <span>Purity: {product.purity}</span>}
                </div>

                {/* Stock Status */}
                <div className={`text-xs font-medium mb-4 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                  disabled={!product.inStock}
                >
                  {product.inStock ? 'View Details' : 'Notify When Available'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
}