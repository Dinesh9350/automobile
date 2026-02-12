const Brands = () => {
  return (
    <section id="products" className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold text-skas-dark uppercase tracking-wide">
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-skas-red rounded-full"></span>
              Our Brands
            </span>
          </h2>
        </div>

        {/* Brands Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Siemen Gaskets */}
          <div className="text-center">
            <div className="mb-4">
              <div className="text-skas-red text-sm italic mb-2">Quality Assurance ...</div>
              <div className="relative inline-block">
                <div className="text-4xl lg:text-5xl font-bold text-skas-red italic transform -skew-x-12">
                  Siemen
                </div>
                <div className="absolute -top-2 -right-4 w-8 h-8">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="#C73E3E" strokeWidth="3" transform="rotate(-15 50 50)"/>
                    <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke="#C73E3E" strokeWidth="3" transform="rotate(15 50 50)"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-skas-red text-white text-sm px-4 py-1.5 uppercase tracking-wider inline-block">
              Gaskets
            </div>
          </div>

          {/* SKAS Gaskets */}
          <div className="text-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-skas-dark rounded-full flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-2 bg-skas-dark rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-2 bg-skas-dark -rotate-45"></div>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-skas-dark tracking-tight">
                skas
              </div>
            </div>
            <div className="text-skas-gray text-sm uppercase tracking-wider">
              Gaskets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
