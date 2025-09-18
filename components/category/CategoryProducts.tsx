'use client';

import { useMemo, useState } from 'react';
import type { Product } from '@/types/jewelry';
import ImageCarousel from '@/components/common/ImageCarousel';
import { Button } from '@/components/ui/button';
import { Filter, Heart, Share2 } from 'lucide-react';

interface CategoryProductsProps {
  products: Product[];
}

export default function CategoryProducts({ products }: CategoryProductsProps) {
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    products.forEach(p => (p.tags || []).forEach(t => tagSet.add(t)));
    return Array.from(tagSet).sort((a, b) => a.localeCompare(b));
  }, [products]);

  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return products;
    return products.filter(p => {
      if (!p.tags || p.tags.length === 0) return false;
      return p.tags.some(t => selected.includes(t));
    });
  }, [products, selected]);

  const toggle = (tag: string) => {
    setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggle(tag)}
                className={`px-3 py-1 rounded-full border text-xs ${selected.includes(tag) ? 'bg-navy text-white border-navy' : 'bg-white text-brown/80 border-gray-300'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <div className="text-sm text-brown/70">
          Showing {filtered.length} of {products.length} products
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map((product, index) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <ImageCarousel images={product.images} alt={product.name} priority={index < 4} />
              <div className="pointer-events-none absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="pointer-events-auto w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-navy" />
                </button>
                <button className="pointer-events-auto w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                  <Share2 className="w-4 h-4 text-navy" />
                </button>
              </div>
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 rounded-full text-xs font-semibold">SALE</div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-heading font-semibold text-navy mb-2 group-hover:text-navy-dark transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-brown/70 mb-3">{product.material}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-navy">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-sm text-brown/50 line-through">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              <div className="flex justify-between text-xs text-brown/70 mb-4">
                {product.weight && <span>Weight: {product.weight}</span>}
                {product.purity && <span>Purity: {product.purity}</span>}
              </div>
              <div className={`text-xs font-medium mb-4 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </div>
              <Button className="w-full bg-navy hover:bg-navy-dark text-white" disabled={!product.inStock}>
                {product.inStock ? 'View Details' : 'Notify When Available'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


