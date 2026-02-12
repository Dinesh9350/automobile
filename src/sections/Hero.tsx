const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 bg-skas-red rounded-full"></span>
            Setting New Standards of
          </span>
          <br />
          Automotive Quality
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A leading manufacturer of high-quality two-wheeler gaskets under the
          brand name <span className="text-white font-semibold">'Siemen'</span> & <span className="text-white font-semibold">'SKAS'</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
