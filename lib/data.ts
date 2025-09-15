import { Category, Product, Service, ContactInfo } from '@/types/jewelry';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Gold Rings',
    slug: 'gold-rings',
    description: 'Elegant gold rings for every occasion',
    image: 'https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 24,
  },
  {
    id: '2',
    name: 'Bracelets',
    slug: 'bracelets',
    description: 'Beautiful gold and diamond bracelets',
    image: 'https://images.pexels.com/photos/1454191/pexels-photo-1454191.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 18,
  },
  {
    id: '3',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Traditional and modern earring designs',
    image: 'https://images.pexels.com/photos/1391480/pexels-photo-1391480.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 32,
  },
  {
    id: '4',
    name: 'Necklaces',
    slug: 'necklaces',
    description: 'Stunning necklaces for special moments',
    image: 'https://images.pexels.com/photos/1721555/pexels-photo-1721555.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 28,
  },
  {
    id: '5',
    name: 'Bangles',
    slug: 'bangles',
    description: 'Traditional gold bangles and kadas',
    image: 'https://images.pexels.com/photos/1726254/pexels-photo-1726254.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 22,
  },
  {
    id: '6',
    name: 'Pendants',
    slug: 'pendants',
    description: 'Exquisite gold and diamond pendants',
    image: 'https://images.pexels.com/photos/1453769/pexels-photo-1453769.jpeg?auto=compress&cs=tinysrgb&w=600',
    productCount: 16,
  },
  {
    id: '7',
    name: 'Silver Unique Items',
    slug: 'silver-items',
    description: 'Unique and exquisite silver items',
    image: '/prods/charan-paduka/charan-paduka (1).jpg',
    productCount: 43,
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Digital Gold',
    description: 'Invest in 24k pure gold digitally with instant buying and selling',
    icon: 'smartphone',
    features: ['24k Pure Gold', 'Instant Transactions', 'Secure Storage', 'Real-time Rates'],
  },
  {
    id: '2',
    title: 'Gold SIP',
    description: 'Systematic Investment Plan for gold with flexible monthly payments',
    icon: 'trending-up',
    features: ['Monthly SIP', 'Flexible Amount', 'Long-term Growth', 'Tax Benefits'],
  },
  {
    id: '3',
    title: 'E-Gift Card',
    description: 'Perfect gift for your loved ones, redeemable across all jewelry',
    icon: 'gift',
    features: ['Instant Delivery', 'Custom Amount', 'No Expiry', 'Easy Redemption'],
  },
  {
    id: '4',
    title: 'Custom Jewelry',
    description: 'Design your own unique pieces with our expert craftsmen',
    icon: 'pen-tool',
    features: ['Personal Design', 'Expert Crafting', 'Premium Materials', 'Lifetime Service'],
  },
];

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Traditional Gold Ring',
    category: 'gold-rings',
    price: 45000,
    originalPrice: 48000,
    images: ['https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Elegant 22k gold ring with intricate traditional design',
    material: '22k Gold',
    weight: '8.5g',
    purity: '916',
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Diamond Bracelet',
    category: 'bracelets',
    price: 125000,
    images: ['https://images.pexels.com/photos/1454191/pexels-photo-1454191.jpeg?auto=compress&cs=tinysrgb&w=600'],
    description: 'Stunning diamond bracelet with 18k gold setting',
    material: '18k Gold + Diamonds',
    weight: '12.3g',
    purity: '750',
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    name: 'Charan Paduka',
    category: 'silver-items',
    price: 125000,
    images: ['/prods/charan-paduka/charan-paduka (1).jpg', '/prods/charan-paduka/charan-paduka (2).jpg', '/prods/charan-paduka/charan-paduka (3).jpg', '/prods/charan-paduka/charan-paduka (4).jpg', '/prods/charan-paduka/charan-paduka (5).jpg', '/prods/charan-paduka/charan-paduka (6).jpg', '/prods/charan-paduka/charan-paduka (7).jpg', '/prods/charan-paduka/charan-paduka (8).jpg', '/prods/charan-paduka/charan-paduka (9).jpg', '/prods/charan-paduka/charan-paduka (10).jpg', '/prods/charan-paduka/charan-paduka (11).jpg', '/prods/charan-paduka/charan-paduka (12).jpg', '/prods/charan-paduka/charan-paduka (13).jpg'],
    description: 'Stunning Silver Charan Paduka',
    material: 'Silver',
    weight: '',
    purity: '',
    inStock: true,
    featured: true,
  },
  // Add more sample products as needed
];

export const contactInfo: ContactInfo = {
  phone: '+91 9667177704',
  whatsapp: '6377209425 ',
  email: 'info@priyanshjewellers.com',
  address: 'Priyansh Jewellers, Sona Patti, Naya Bazar, Sujangarh 331507',
  hours: {
    weekdays: '10:00 AM - 8:00 PM',
    weekends: '10:00 AM - 9:00 PM',
  },
};

export const testimonials = [
  {
    id: '1',
    name: 'Priya Sharma',
    text: 'Beautiful jewelry with excellent craftsmanship. The gold quality is outstanding and the designs are unique.',
    rating: 5,
    location: 'Raipur',
  },
  {
    id: '2',
    name: 'Raj Patel',
    text: 'Trusted jeweller with transparent pricing. Bought my wedding rings here and couldn\'t be happier.',
    rating: 5,
    location: 'Durg',
  },
  {
    id: '3',
    name: 'Anita Gupta',
    text: 'Excellent customer service and wide variety of traditional designs. Highly recommended for special occasions.',
    rating: 5,
    location: 'Bhilai',
  },
];