import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Raman Kumar",
    review: "Very hygienic environment. Dr. Praveen explained everything smoothly. Best root canal experience I've had.",
    rating: 5,
  },
  {
    name: "Sneha Sinha",
    review: "Best treatment at affordable price. The clinic setup is premium, and I didn't feel any pain during my crown placement.",
    rating: 5,
  },
  {
    name: "Vikash Singh",
    review: "Excellent service. They maintain top-notch sterilization standards. Highly recommended for family dental care.",
    rating: 5,
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan font-semibold tracking-wider text-sm uppercase mb-3">Patient Stories</h2>
            <h3 className="text-4xl font-bold text-navy mb-4">400+ Happy Patients</h3>
            <p className="text-slate-600 text-lg">
              Don't just take our word for it. Read what our community says.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-all border border-slate-100"
            >
              <div className="flex text-amber-500 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-slate-500 font-medium">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
