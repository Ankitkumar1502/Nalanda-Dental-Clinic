import { motion } from 'framer-motion';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-navy/10 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-cyan rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan/30">
            N
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-navy leading-tight">Nalanda Clinic</span>
            <span className="text-xs text-cyan font-medium leading-none">Dental & Root Canal Center</span>
          </div>
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-cyan transition-colors">Services</a>
          <a href="#expert" className="text-sm font-medium text-slate-600 hover:text-cyan transition-colors">The Expert</a>
          <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-cyan transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-cyan transition-colors">Contact</a>
        </motion.nav>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <a 
            href="tel:07739953840" 
            className="bg-navy hover:bg-navy/90 text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-navy/20 active:scale-95"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Navigation;
