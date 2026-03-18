import { motion } from 'framer-motion';
import { Activity, Sparkles, Grid, ShieldCheck, HeartPulse } from 'lucide-react';

const services = [
  {
    title: 'Root Canal (RCT)',
    description: 'Painless, single-sitting root canal treatments using advanced endodontic technology.',
    icon: Activity,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements to restore your perfect smile.',
    icon: Sparkles,
  },
  {
    title: 'Orthodontics',
    description: 'Straighten misaligned teeth with premium braces and invisible aligners.',
    icon: Grid,
  },
  {
    title: 'Crowns & Bridges',
    description: 'Durable and highly aesthetic caps to protect weakened or damaged teeth.',
    icon: ShieldCheck,
  },
  {
    title: 'Gum Treatments',
    description: 'Effective non-surgical therapy for bleeding gums, swelling, and bad breath.',
    icon: HeartPulse,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan font-semibold tracking-wider text-sm uppercase mb-3">What We Do</h2>
            <h3 className="text-4xl font-bold text-navy mb-4">Premium Dental Services</h3>
            <p className="text-slate-600 text-lg">
              Comprehensive care under one roof. We combine clinical expertise with patient comfort.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-cyan/10 rounded-2xl flex items-center justify-center mb-6 text-cyan group-hover:bg-cyan group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
