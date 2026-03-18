import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-navy text-white pt-24 pb-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-white to-cyan" />
        <div className="absolute bottom-0 right-0 -mb-32 -mr-32 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-cyan rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  N
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">Nalanda Clinic</span>
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed mb-8">
                Premium Dental Care & Root Canal Specialists in Patna. Creating beautiful smiles since 2014 in a highly hygienic, patient-first environment.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan flex items-center justify-center transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan flex items-center justify-center transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-slate-300 hover:text-cyan transition-colors">Services</a></li>
                <li><a href="#expert" className="text-slate-300 hover:text-cyan transition-colors">Meet Dr. Prasad</a></li>
                <li><a href="#testimonials" className="text-slate-300 hover:text-cyan transition-colors">Testimonials</a></li>
                <li><a href="#" className="text-slate-300 hover:text-cyan transition-colors">Book Appointment</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Clinic Address</p>
                    <p className="text-slate-300 text-sm leading-relaxed">Khajpura, Patna<br/>Bihar 800014</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-white mb-1">Phone</p>
                    <a href="tel:07739953840" className="text-slate-300 text-sm hover:text-cyan transition-colors">077399 53840</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold text-white mb-6">Find Us</h4>
              <div className="rounded-2xl overflow-hidden h-48 bg-white/5 border border-white/10 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=25.620472,85.080056&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 z-10"
                  title="Clinic Location Map"
                ></iframe>
              </div>
            </div>
            
          </div>

          <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left items-center">
            <p className="text-slate-400 text-sm bg-navy">
              &copy; {new Date().getFullYear()} Nalanda Dental Clinic. All rights reserved.
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
              <span className="text-slate-400 text-sm hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-slate-400 text-sm hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/9107739953840"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-all hover:-translate-y-1 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>
    </>
  );
};

export default Footer;
