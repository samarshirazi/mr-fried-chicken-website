import { motion } from 'framer-motion';
import { Heart, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Heart,
      number: '2025',
      label: 'Established',
      color: 'text-red-400'
    },
    {
      icon: Award,
      number: '4.9★',
      label: 'Customer Rating',
      color: 'text-yellow-400'
    },
    {
      icon: Clock,
      number: '15min',
      label: 'Average Delivery',
      color: 'text-green-400'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl font-black text-dark mb-6"
              >
                Our Passion for{' '}
                <span className="gradient-text">Perfect Food</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                At Mr. Fried Chicken, we're not just about crispy chicken - we're masters of the perfect burger experience! 
                Our signature burgers feature hand-breaded crispy chicken, premium beef patties, and locally sourced 
                ingredients that create unforgettable flavor combinations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-gray-700 leading-relaxed mb-6"
              >
                From our legendary "Fried Boss Burger" to our spicy buffalo wings, every dish is crafted with passion 
                and precision. We believe that great food brings people together, which is why we put love into every 
                burger, every piece of chicken, and every side dish we serve.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Using only the freshest ingredients and time-honored cooking techniques, we ensure that every bite 
                delivers the perfect balance of taste, texture, and satisfaction. This is more than fast food - 
                this is food made with heart.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-2xl bg-white shadow-lg border border-gray-100"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-dark">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* SVG Image Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary p-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="burgerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#ffd700" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Burger Stack */}
                  <ellipse cx="200" cy="120" rx="80" ry="20" fill="url(#burgerGrad)" />
                  <ellipse cx="200" cy="140" rx="85" ry="12" fill="#8B4513" />
                  <ellipse cx="200" cy="160" rx="90" ry="8" fill="#228B22" />
                  <ellipse cx="200" cy="180" rx="95" ry="15" fill="#DC143C" />
                  <ellipse cx="200" cy="200" rx="90" ry="12" fill="#FF6347" />
                  <ellipse cx="200" cy="220" rx="85" ry="15" fill="#8B4513" />
                  <ellipse cx="200" cy="240" rx="80" ry="20" fill="url(#burgerGrad)" />
                  
                  <text x="200" y="290" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="bold">
                    PREMIUM
                  </text>
                  <text x="200" y="320" textAnchor="middle" fill="#ffffff" fontSize="20">
                    BURGERS
                  </text>
                </svg>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-secondary text-dark p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">🍔</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-primary text-white p-3 rounded-full shadow-lg"
              >
                <span className="text-2xl">🍗</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;