import { motion } from 'framer-motion';
import { ArrowRight, Phone, Menu as MenuIcon } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
        />
        
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-accent/10 to-primary/10 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight"
          >
            <span className="gradient-text">
              Mr. Fried Chicken
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Discover Odense's most <span className="text-primary font-semibold">irresistible burgers</span> and <span className="text-secondary font-semibold">crispy fried chicken</span>! 
            Handcrafted with premium ingredients, bold flavors, and served with genuine passion.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              onClick={scrollToMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-5"
            >
              <MenuIcon size={20} />
              Explore Menu
              <ArrowRight size={20} />
            </motion.button>

            <motion.a
              href="tel:+4512345678"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-5"
            >
              <Phone size={20} />
              Order Now
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '4.9★', label: 'Rating' },
              { number: '15min', label: 'Avg. Delivery' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;