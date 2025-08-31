# Shree Ganesh Jewellers - Premium Jewelry Showcase Website

A modern, responsive jewelry showcase website built with Next.js 14 and Tailwind CSS, featuring traditional Indian aesthetics and premium design elements.

## Features

### 🏠 Homepage
- **Hero Section**: Compelling headline with live gold rates banner
- **Product Categories**: Interactive grid showcasing 6 jewelry categories
- **Services Section**: Digital Gold, Gold SIP, E-Gift Cards, Custom Jewelry
- **Customer Testimonials**: Social proof from satisfied customers
- **Premium Design**: Traditional Indian color palette with modern UX

### 📱 Responsive Design
- Mobile-first approach with optimized layouts
- Touch-friendly navigation and interactions
- Responsive images and typography
- Cross-device compatibility

### 🎨 Design System
- **Colors**: Deep maroon (#800020), gold (#ffd700), cream (#f5f5dc)
- **Typography**: Playfair Display for headings, Inter for body text
- **Animations**: Smooth transitions, hover effects, and micro-interactions
- **Patterns**: Traditional Indian decorative elements

### 📄 Pages
- **Homepage**: Complete showcase with all sections
- **Collections**: Overview of all jewelry categories
- **Category Pages**: Dynamic routing for each jewelry type
- **About**: Company story and values
- **Contact**: Contact form with WhatsApp integration
- **Services**: Detailed service descriptions

### 🛠 Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Image optimization with next/image
- SEO optimized with meta tags
- Performance optimized components

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with fonts and navigation
│   ├── page.tsx                 # Homepage
│   ├── collections/             # Collections overview
│   ├── categories/[category]/   # Dynamic category pages
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── services/                # Services page
│   └── globals.css             # Global styles and CSS variables
├── components/                  # Reusable React components
│   ├── layout/                 # Layout components (Header, Footer)
│   ├── home/                   # Homepage-specific components
│   └── ui/                     # shadcn/ui components
├── lib/                        # Utility functions and data
│   ├── utils.ts               # Utility functions
│   └── data.ts                # Mock data and constants
├── types/                      # TypeScript type definitions
│   └── jewelry.ts             # Product and category types
└── public/                     # Static assets
```

## Component Architecture

### Layout Components
- **Header**: Fixed navigation with gold rate banner and mobile menu
- **Footer**: Comprehensive footer with contact info and newsletter signup

### Home Components
- **HeroSection**: Main landing area with call-to-action
- **CategoryGrid**: Interactive product categories showcase
- **ServicesSection**: Premium services presentation
- **TestimonialsSection**: Customer reviews and social proof

### Page Components
- **CollectionsPage**: Complete collections overview
- **CategoryPage**: Dynamic category with product filtering
- **AboutPage**: Company story and achievements
- **ContactPage**: Contact form and store information
- **ServicesPage**: Detailed service descriptions

## Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#800020',
    dark: '#9d0208',
  },
  secondary: {
    DEFAULT: '#ffd700',
    bronze: '#b8860b',
  },
  // ... more colors
}
```

### Content
Update business information in `lib/data.ts`:

```typescript
export const contactInfo: ContactInfo = {
  phone: '+91 9876543210',
  whatsapp: '+91 9876543210',
  email: 'info@shreeganeshjewellers.com',
  address: 'Your store address',
  // ... more details
};
```

### Products & Categories
Add your jewelry data in `lib/data.ts`:

```typescript
export const categories: Category[] = [
  // Add your categories
];

export const sampleProducts: Product[] = [
  // Add your products
];
```

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS purging
- **SEO**: Comprehensive meta tags and structured data

## Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The website is configured for static export and can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting provider**

Build command: `npm run build`

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus indicators

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For technical support or customization requests, please contact the development team or refer to the documentation.

---

**Shree Ganesh Jewellers** - Crafting Excellence Since 1985