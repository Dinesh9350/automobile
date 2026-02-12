const Banner = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Banner Background */}
          <div 
            className="relative h-[400px] lg:h-[500px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&q=80')`,
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-16">
              {/* 50 Years Badge */}
              <div className="absolute top-6 left-6 lg:top-10 lg:left-16">
                <div className="text-white">
                  <span className="text-5xl lg:text-7xl font-bold">50</span>
                  <div className="text-sm lg:text-base uppercase tracking-wider">
                    Years of<br />Excellence
                  </div>
                </div>
              </div>

              {/* Main Text */}
              <div className="mt-20 lg:mt-0">
                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic leading-tight">
                  Ride Like<br />
                  The Wind
                </h2>
                <p className="text-lg lg:text-xl text-white/90 uppercase tracking-wide mt-2">
                  With Siemen Gaskets
                </p>
                <p className="text-yellow-400 text-lg lg:text-xl font-bold uppercase mt-4 max-w-md">
                  The Only Gaskets Tough Enough To Keep Up!
                </p>
              </div>
            </div>

            {/* Right Side - Gasket Images */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center">
              <div className="relative">
                {/* Siemen Logo */}
                <div className="absolute -top-16 right-8">
                  <div className="text-center">
                    <div className="text-skas-red font-bold text-2xl italic transform -skew-x-12">
                      Siemen
                    </div>
                    <div className="bg-skas-red text-white text-xs px-2 py-1 uppercase tracking-wider">
                      Gaskets
                    </div>
                  </div>
                </div>
                
                {/* Premium Quality Badge */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/4 -translate-y-1/2">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-skas-red shadow-lg">
                    <div className="text-center">
                      <div className="text-skas-red text-xs font-bold uppercase">Premium</div>
                      <div className="text-skas-red text-lg font-black uppercase">Quality</div>
                      <div className="flex justify-center gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-skas-red text-xs">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
