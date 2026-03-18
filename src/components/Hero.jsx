import { motion } from 'framer-motion';

import dentalImage from '../assets/dental.jpeg';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[40rem] h-[40rem] bg-cyan/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[30rem] h-[30rem] bg-navy/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-max border border-slate-100">
              <span className="text-amber-500">⭐</span>
              <span className="text-sm font-semibold text-navy">4.9/5 Stars</span>
              <span className="text-sm text-slate-500 font-medium">from 400+ Happy Patients</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-navy leading-[1.15] tracking-tight">
              Premium Dental Care & <span className="text-cyan">Root Canal Specialists</span> in Patna.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Creating beautiful smiles since 2014 in a highly hygienic, patient-first environment. Our world-class sterilization and expert care start at just ₹200.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="tel:07739953840"
                className="bg-cyan hover:bg-cyan/90 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-cyan/30 active:scale-95 flex items-center gap-2"
              >
                Book Appointment
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-slate-50 text-navy px-8 py-3.5 rounded-full font-semibold text-lg transition-all border border-slate-200 hover:border-slate-300"
              >
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan/20 to-transparent rounded-[3rem] transform translate-x-4 translate-y-4" />
            <img
              src={dentalImage}
              alt="Modern Nalanda Dental Clinic Interior"
              className="relative rounded-[3rem] w-full h-[500px] object-cover shadow-2xl object-center border-8 border-white"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy h-5">Painless</p>
                  <p className="text-sm text-slate-500 font-medium">Root Canal Treatment</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
