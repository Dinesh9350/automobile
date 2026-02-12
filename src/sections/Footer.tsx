import { Youtube, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const products = [
    'Asbestos & Non-Asbestos Gaskets',
    'Silicon Lining Gaskets',
    'MLS Gaskets & SL Gaskets',
    'Oil Seals (Shocker & Valve Seal)',
    'Spiral Wound Gaskets & Graphite Bush',
    'Clutch Plates & Break Shoe',
  ];

  const socialLinks = [
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-skas-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6">
              Over 5 Decades of<br />Experience
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-skas-red rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-2 bg-skas-red rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-2 bg-skas-red -rotate-45"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight">skas</span>
                <span className="text-xs text-gray-400 -mt-1">Autotech Private Limited</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-skas-red transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6">
              Our Products
            </h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  - {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-6">
              Contact
            </h3>
            <address className="not-italic text-gray-400 text-sm leading-relaxed">
              Plot No. 16, Sector-35, HSIIDC<br />
              Udyog Vihar, Phase VII, Gurugram<br />
              Haryana - 122004
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-gray-500 text-sm">
            © 2023 Skas Autotech Pvt. Ltd. Powered and secured by{' '}
            <a href="#" className="text-white underline hover:text-skas-red transition-colors">
              AdMadBOX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
