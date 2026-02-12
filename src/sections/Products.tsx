import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('SOFT GASKETS');

  const categories = [
    'SOFT GASKETS',
    'M.L.S GASKETS',
    'OIL SEALS',
    'SPIRAL WOUND GASKETS',
    'FRICTION PRODUCTS',
    'RUBBER PRODUCTS',
  ];

  const products = {
    'SOFT GASKETS': [
      {
        name: 'Asbestos Gaskets',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'Non-Asbestos Gaskets',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Silicone Lining Gaskets',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
    'M.L.S GASKETS': [
      {
        name: 'MLS Head Gaskets',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'Multi-Layer Steel Gaskets',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Performance MLS Gaskets',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
    'OIL SEALS': [
      {
        name: 'Valve Stem Seals',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'Shocker Seals',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Crankshaft Seals',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
    'SPIRAL WOUND GASKETS': [
      {
        name: 'Standard Spiral Wound',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'Inner Ring Gaskets',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Outer Ring Gaskets',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
    'FRICTION PRODUCTS': [
      {
        name: 'Clutch Plates',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'Brake Shoes',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Brake Pads',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
    'RUBBER PRODUCTS': [
      {
        name: 'Rubber Gaskets',
        image: 'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=400&q=80',
      },
      {
        name: 'O-Rings',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      },
      {
        name: 'Rubber Bushings',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&q=80',
      },
    ],
  };

  const partners = [
    { name: 'TATA STEEL', logo: 'TATA' },
    { name: 'JINDAL', logo: 'JINDAL' },
    { name: 'Ferolite', logo: 'F' },
    { name: 'Interface', logo: 'I' },
    { name: 'HINDALCO', logo: 'H' },
  ];

  const scrollCategories = (direction: 'left' | 'right') => {
    const container = document.getElementById('category-scroll');
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[350px] lg:h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-skas-red uppercase tracking-wide">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              Product Range
            </span>
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#5a5a5a] py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white">1500+</div>
              <div className="text-white/80 mt-2 text-lg">Products</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold text-white">10+</div>
              <div className="text-white/80 mt-2 text-lg">Categories</div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="w-full h-2 bg-skas-red"></div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-skas-dark text-lg lg:text-xl leading-relaxed">
            <span className="font-bold">SKAS Autotech</span> designs and manufactures a complete range of gaskets for every part of a motorbike. Today, we are the leading manufacturer of aftermarket engine gaskets for all major two-wheelers, three-wheelers and four wheelers, our setup is adapted to customise gaskets for automotive as well as non-automotive industries.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 lg:py-16 bg-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="relative mb-8">
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-skas-dark text-white p-2 hover:bg-skas-red transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              id="category-scroll"
              className="flex overflow-x-auto scrollbar-hide mx-10"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex-shrink-0 px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-skas-red text-white'
                      : 'bg-skas-dark text-white hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-skas-dark text-white p-2 hover:bg-skas-red transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Product Cards */}
          <div className="bg-white p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products[activeCategory as keyof typeof products].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-skas-red py-4 px-4 text-center">
                    <h3 className="text-white font-semibold text-sm lg:text-base">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Title */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl lg:text-3xl font-bold text-skas-dark uppercase tracking-wide">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-skas-red rounded-full"></span>
                  Our Partners
                </span>
              </h2>
            </div>
            
            {/* Divider */}
            <div className="hidden lg:block w-px h-16 bg-gray-300"></div>
            
            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-24 h-24 lg:w-28 lg:h-28 bg-skas-dark flex items-center justify-center hover:bg-skas-red transition-colors cursor-pointer"
                >
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
