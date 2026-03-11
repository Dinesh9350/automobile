'use client'

import { motion } from 'framer-motion'
import { Ruler, Clock, Truck, Palette, Shield, Factory } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Professional design services for decals, labels and packaging. From concept to final print.',
    color: 'from-uv-blue to-uv-cyan'
  },
  {
    icon: Factory,
    title: 'In-House Production',
    description: 'Complete manufacturing setup with screen printing, digital printing and curing facilities.',
    color: 'from-uv-purple to-uv-pink'
  },
  {
    icon: Ruler,
    title: 'Any Size & Shape',
    description: 'Custom die-cutting for stickers and labels. No shape limitations with precision cutting.',
    color: 'from-uv-pink to-uv-orange'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'Rigorous quality control with 0% defect tolerance. Material traceability guaranteed.',
    color: 'from-uv-orange to-yellow-500'
  },
  {
    icon: Truck,
    title: 'All India Shipping',
    description: 'We deliver across India. Located in Bahadurgarh, Haryana with reliable logistics.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Quick turnaround on orders with 24/7 quality monitoring and production tracking.',
    color: 'from-uv-cyan to-blue-500'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.1),transparent_50%)]" />
      
      <div className="section-padding max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-uv-blue font-semibold text-sm uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose{' '}
            <span className="text-gradient">R.V. Graphics</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}