import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import dentalImage from '../assets/dental.jpeg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    dateTime: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;
    const onEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [isModalOpen]);

  const validateForm = () => {
    const currentErrors = {};
    if (!formData.name.trim()) {
      currentErrors.name = 'Full name is required.';
    }
    const cleanedPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanedPhone) {
      currentErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10,12}$/.test(cleanedPhone)) {
      currentErrors.phone = 'Enter a valid 10–12 digit number.';
    }
    if (!formData.service) {
      currentErrors.service = 'Please choose a service.';
    }
    if (!formData.dateTime) {
      currentErrors.dateTime = 'Please select preferred date and time.';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetAndClose = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setIsSubmitting(false);
    setFormData({ name: '', phone: '', service: '', dateTime: '', message: '' });
    setErrors({});
  };

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
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-cyan hover:bg-cyan/90 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg hover:shadow-cyan/30 active:scale-95 flex items-center gap-2"
              >
                Book Appointment
              </button>
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/55 backdrop-blur-sm"
              onClick={resetAndClose}
            />
            <motion.div
              className="relative w-full max-w-xl rounded-3xl bg-white/40 border border-white/30 shadow-2xl backdrop-blur-xl p-6 md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <button
                onClick={resetAndClose}
                className="absolute top-4 right-4 rounded-full p-2 text-slate-600 hover:bg-white/70 hover:text-slate-900"
                aria-label="Close modal"
              >
                <span aria-hidden="true">✕</span>
              </button>

              {isSuccess ? (
                <div className="text-center py-10 px-4">
                  <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Thank you!</h2>
                  <p className="mt-2 text-slate-600">Our clinic coordinator will call you shortly to confirm your slot.</p>
                  <button
                    onClick={resetAndClose}
                    className="mt-6 bg-cyan hover:bg-cyan/90 text-white px-6 py-2 rounded-full font-semibold"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <h3 className="text-2xl font-bold text-navy">Book Appointment</h3>
                  <p className="text-sm text-slate-600">Choose a time and service for your visit.</p>

                  <label className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-700">Full Name</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">👤</span>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white/70 py-3 pl-10 pr-3 text-slate-800 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && <span className="text-sm text-rose-500">{errors.name}</span>}
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-700">Phone Number</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">📞</span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="w-full rounded-xl border border-slate-200 bg-white/70 py-3 pl-10 pr-3 text-slate-800 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                        placeholder="0612-123456 or +91 612 xxx xxxx"
                      />
                    </div>
                    {errors.phone && <span className="text-sm text-rose-500">{errors.phone}</span>}
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-700">Service Selection</span>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData((prev) => ({ ...prev, service: e.target.value }))}
                      className="border rounded-xl border-slate-200 bg-white/70 py-3 px-3 text-slate-800 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                    >
                      <option value="">Select a service</option>
                      <option>Root Canal</option>
                      <option>Dental Implants</option>
                      <option>Braces/Orthodontics</option>
                      <option>Aesthetic Consultation</option>
                      <option>General Checkup</option>
                    </select>
                    {errors.service && <span className="text-sm text-rose-500">{errors.service}</span>}
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-700">Preferred Date & Time</span>
                    <input
                      type="datetime-local"
                      value={formData.dateTime}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dateTime: e.target.value }))}
                      className="border rounded-xl border-slate-200 bg-white/70 py-3 px-3 text-slate-800 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                    />
                    {errors.dateTime && <span className="text-sm text-rose-500">{errors.dateTime}</span>}
                  </label>

                  <label className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-700">Message / Chief Complaint (optional)</span>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      className="min-h-[90px] resize-none rounded-xl border border-slate-200 bg-white/70 p-3 text-slate-800 outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/30"
                      placeholder="Describe your concern"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-cyan hover:bg-cyan/90 px-6 py-3 font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Confirm Booking'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
