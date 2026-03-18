import { motion } from 'framer-motion';
import { ShieldCheck, IndianRupee } from 'lucide-react';
import dentistImage from "../assets/dentist-heroimg.jpeg"


const Expert = () => {
  return (
    <section id="expert" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyan/10 rounded-3xl transform -rotate-3 scale-105" />
              <img
                src={dentistImage}
                alt="Dr. Praveen Prasad - Dental Surgeon"
                className="relative rounded-3xl w-full max-w-md mx-auto object-cover h-[500px] shadow-2xl border-4 border-white"
              />
              <div className="absolute top-8 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100">
                <div className="bg-amber-100 p-2 rounded-full">
                  <span className="text-xl">🎓</span>
                </div>
                <div>
                  <p className="font-bold text-navy text-sm leading-tight">10+ Years</p>
                  <p className="text-xs text-slate-500 font-medium">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-cyan font-semibold tracking-wider text-sm uppercase mb-3">Meet The Expert</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy mb-6">Dr. Praveen Prasad</h3>
            <p className="text-xl text-slate-600 mb-6 font-medium">
              BDS (Dental Surgeon)
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              With over a decade of experience in advanced dentistry, Dr. Praveen Prasad specializes in painless root canal treatments, aesthetic smiles, and comprehensive dental care. Committed to providing premium care with state-of-the-art technology.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex gap-4">
                <div className="mt-1 bg-cyan/10 p-2.5 rounded-xl h-max">
                  <IndianRupee className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">Affordable Care</h4>
                  <p className="text-sm text-slate-500 font-medium">Consultation starts at just ₹200.</p>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex gap-4">
                <div className="mt-1 bg-cyan/10 p-2.5 rounded-xl h-max">
                  <ShieldCheck className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-navy mb-1">World-Class Safety</h4>
                  <p className="text-sm text-slate-500 font-medium">100% strict sterilization protocols.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/9107739953840"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:shadow-lg active:scale-95"
            >
              Consult Dr. Prasad today
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Expert;
