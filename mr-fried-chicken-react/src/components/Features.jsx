import { motion } from 'framer-motion';
import { featuresData } from '../data/menuData';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gradient-to-l from-accent to-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-dark mb-6">
            Why Choose <span className="gradient-text">Mr. Fried Chicken</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What makes us the best choice for burgers and fried chicken in Odense
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg shadow-primary/25"
                >
                  {feature.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-sm"
              />
              
              <motion.div
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-tl from-accent/20 to-secondary/20 rounded-full blur-sm"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-10 py-5"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience the Difference
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;