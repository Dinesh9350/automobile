import { Award, Clock, Users, Lightbulb, Handshake, Timer } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality',
      subtitle: 'Products',
    },
    {
      icon: Clock,
      title: '5 Decades',
      subtitle: 'of Expertise',
      customIcon: true,
    },
    {
      icon: Users,
      title: 'Customer',
      subtitle: 'Focus',
    },
    {
      icon: Lightbulb,
      title: 'Always Striving',
      subtitle: 'to Innovation',
    },
    {
      icon: Handshake,
      title: 'Strong',
      subtitle: 'Team',
    },
    {
      icon: Timer,
      title: 'Fast',
      subtitle: 'Delivery',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-skas-lightgray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-bold text-skas-dark uppercase tracking-wide">
            <span className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-skas-red rounded-full"></span>
              We Innovate & Produce
            </span>
          </h2>
          <p className="mt-8 text-skas-gray text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            "We offer the best combination of quality, innovation, and customer service in the
            industry. We are confident that our products and services will meet and exceed your
            expectations, and we look forward to the opportunity to work with you."
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {feature.customIcon ? (
                  <div className="relative">
                    <div className="text-skas-red font-bold text-4xl">5</div>
                    <div className="text-skas-red text-xs uppercase tracking-wider">Decades</div>
                  </div>
                ) : (
                  <feature.icon className="w-12 h-12 text-skas-red stroke-[1.5]" />
                )}
              </div>
              <h3 className="text-lg font-medium text-skas-dark">
                {feature.title}
              </h3>
              <p className="text-skas-gray">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
