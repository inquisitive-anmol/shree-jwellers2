'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ImageCarouselProps = {
  images: string[];
  alt: string;
  priority?: boolean;
};

export default function ImageCarousel({ images, alt, priority }: ImageCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.95;
    el.scrollTo({ left: el.scrollLeft + (direction === 'left' ? -amount : amount), behavior: 'smooth' });
  };

  return (
    <div className="relative h-64 overflow-hidden">
      <div
        ref={scrollerRef}
        className="no-scrollbar h-full w-full overflow-x-auto overflow-y-hidden flex snap-x snap-mandatory scroll-smooth"
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative h-64 w-full flex-shrink-0 basis-full snap-center">
            <Image
              src={src}
              alt={`${alt} - ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={priority && idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollBy('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 text-white grid place-items-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollBy('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/55 text-white grid place-items-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}


