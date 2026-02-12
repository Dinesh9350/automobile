interface InfoBarProps {
  onNavigate?: (page: 'home' | 'about' | 'products') => void;
}

const InfoBar = ({ onNavigate }: InfoBarProps) => {
  const items = [
    {
      title: 'WHO WE ARE',
      link: 'Get to know more about us',
      onClick: () => onNavigate?.('about'),
    },
    {
      title: 'WHAT WE DO',
      description: 'We Design and Manufacture a complete range of engine gaskets.',
    },
    {
      title: 'PRODUCT RANGE',
      link: 'Click to see our products',
      onClick: () => onNavigate?.('products'),
    },
  ];

  return (
    <section className="bg-skas-red py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`text-center px-6 ${
                index < 2 ? 'md:border-r md:border-white/30' : ''
              }`}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-white uppercase tracking-wide mb-4">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  {item.title}
                </span>
              </h3>
              {item.link ? (
                <button
                  onClick={item.onClick}
                  className="text-white/90 hover:text-white underline underline-offset-4 transition-colors"
                >
                  {item.link}
                </button>
              ) : (
                <p className="text-white/90">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBar;
