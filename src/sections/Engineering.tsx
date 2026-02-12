const Engineering = () => {
  return (
    <section className="bg-skas-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Content - Red Background */}
          <div className="bg-skas-red p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-wide mb-6">
              <span className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                Engineering Innovation
              </span>
            </h2>
            <p className="text-white/90 leading-relaxed text-justify">
              First and foremost, we are committed to producing high-quality products
              that meet the highest standards of performance and durability. We have
              over 5 decades of experience. Our products are rigorously tested to
              ensure that they are reliable and safe, and we use only the best materials
              and have complete in-house manufacturing process to produce them.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[300px] lg:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Engineering Innovation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
