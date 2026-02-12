import { Lightbulb, Wrench, Factory } from 'lucide-react';

const AboutUs = () => {
  const journeyMilestones = [
    { year: '2019', event: 'Fourth Plant, at Sector-35, Gurugram.' },
    { year: '2012', event: 'Third Plant at Keshopur Industrial. Area, New Delhi.' },
    { year: '2006', event: 'Second Plant at Daultabad, Gurugram.' },
    { year: '1993', event: 'First Plant at Vikaspuri, New Delhi.' },
    { year: '1970', event: 'Shakti Motors was founded at Karol Bagh by Mr. Satish Kumar Pahuja under the brand name "Siemen Gaskets".' },
  ];

  const services = [
    {
      icon: Lightbulb,
      title: 'Product Innovation',
      description: 'Our R&D department constantly works on developing new products as per client\'s requirement.',
    },
    {
      icon: Wrench,
      title: 'Tool Development',
      description: 'Our CnC equipped tool room is able to develop dies & tools quickly and efficiently.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Hi-tech manufacturing plants with best machineries, advanced technologies, research-backed designs and systems.',
    },
  ];

  const teamMembers = [
    { name: 'S K Pahuja', role: 'Director' },
    { name: 'Pankaj Pahuja', role: 'Director' },
    { name: 'Amit Pahuja', role: 'Director - Production & R&D' },
    { name: 'Vikas Pahuja', role: 'Director - Marketing' },
  ];

  const certificates = [
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[350px] lg:h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white uppercase tracking-wide">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              About Us
            </span>
          </h1>
        </div>
      </section>

      {/* 50 Years of Excellence */}
      <section className="bg-[#5a5a5a] py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white uppercase tracking-wide">
            <span className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-skas-red rounded-full"></span>
              50 Years of Excellence
            </span>
          </h2>
          <div className="w-full h-1 bg-skas-red mt-6"></div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Hexagon pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon fill="none" stroke="#C73E3E" strokeWidth="1" points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-skas-red rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-3 bg-skas-red rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-3 bg-skas-red -rotate-45"></div>
              </div>
              <div className="text-5xl lg:text-6xl font-bold text-skas-dark tracking-tight">skas</div>
            </div>
          </div>
          <div className="text-skas-gray text-lg mb-8">Autotech Private Limited</div>
          
          <p className="text-skas-dark text-lg lg:text-xl leading-relaxed mb-6">
            <span className="underline font-semibold">SKAS AUTOTECH PRIVATE LIMITED</span> has been a leading manufacturer of high-quality two-wheeler gaskets under the brand name <span className="font-bold">"Siemen"</span>.
          </p>
          <p className="text-skas-gray text-lg leading-relaxed">
            Our strong commitment to innovation and customer satisfaction has built a reputation for producing durable and reliable products that meet the needs of our diverse client base.
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 lg:py-24 bg-[#e8e8e8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-skas-dark uppercase tracking-wide text-center mb-12">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              Journey
            </span>
          </h2>
          
          <p className="text-skas-dark text-lg leading-relaxed text-center max-w-4xl mx-auto mb-16">
            Founded in 1970 by <span className="font-bold">Shri Satish Kumar Pahuja</span>, our company has come a long way. From humble beginnings as a small unit called Shakti Motors, we have grown into a leading manufacturer of high-quality automotive gaskets and components, with a global customer base and a reputation for excellence.
          </p>

          <div className="space-y-10">
            {journeyMilestones.map((milestone, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl lg:text-3xl font-bold text-skas-red">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 bg-skas-red rounded-full"></span>
                      {milestone.year}
                    </span>
                  </span>
                </div>
                <p className="text-skas-dark text-lg">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-[#5a5a5a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-wide text-center mb-8">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              Services
            </span>
          </h2>
          
          <p className="text-white/90 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-16">
            Today, we are proud to be a trusted partner to many automobile companies around the world, and we are committed to continuing to provide the highest level of service and support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-skas-red rounded-full flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-skas-dark uppercase tracking-wide text-center mb-8">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              Core Team
            </span>
          </h2>
          
          <p className="text-skas-gray text-lg leading-relaxed text-center max-w-3xl mx-auto mb-16">
            Meet the visionary founder and dedicated core team of SKAS Autotech Pvt. Ltd., driving innovation in automotive manufacturing
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#e8e8e8] rounded-lg overflow-hidden">
                <div className="aspect-square bg-[#d0d0d0] flex items-center justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-skas-red rounded-full flex items-center justify-center">
                      <div className="w-10 h-10 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-skas-red rotate-45"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-4 bg-skas-red -rotate-45"></div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-bold text-skas-dark">{member.name}</h3>
                  <p className="text-skas-gray text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 lg:py-24 bg-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-skas-dark uppercase tracking-wide text-center mb-12">
            <span className="inline-flex items-center gap-3">
              <span className="w-3 h-3 bg-skas-red rounded-full"></span>
              Certificates
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-[#d0d0d0] aspect-[4/3] flex items-center justify-center p-4">
                <img 
                  src={cert} 
                  alt={`Certificate ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        {/* Hexagon pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="hexagons2" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon fill="none" stroke="#C73E3E" strokeWidth="1" points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#hexagons2)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl lg:text-4xl font-bold uppercase tracking-wide mb-8">
            <span className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-skas-red rounded-full"></span>
              <span className="text-skas-dark">WE ARE</span>
              <span className="text-skas-red">SKAS AUTOTECH PVT. LTD.</span>
            </span>
          </h2>
          
          <p className="text-skas-dark text-lg lg:text-xl leading-relaxed">
            Our customer baseline is growing and so is our commitment for excellence. <span className="font-bold">SKAS Autotech</span> will continue to produce high-quality, reliable, and innovative products for the next generation engines.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
