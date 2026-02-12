import { Phone, Mail, Clock } from 'lucide-react';

const ContactBar = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'CALL US',
      content: 'Toll Free: 1800-889-0839',
    },
    {
      icon: Mail,
      title: 'EMAIL US',
      content: 'customersupport@skasauto.com',
    },
    {
      icon: Clock,
      title: 'OPENING HOURS',
      content: 'Mon - Sat: 10am - 07pm',
    },
  ];

  return (
    <section className="bg-skas-red py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-4 lg:px-8 ${
                index < 2 ? 'md:border-r md:border-white/30' : ''
              }`}
            >
              <item.icon className="w-6 h-6 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white/80 text-sm uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-white font-semibold">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBar;
