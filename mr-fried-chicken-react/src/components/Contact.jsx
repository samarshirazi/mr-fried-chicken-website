import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Østre Stationsvej 27\n5000 Odense, Denmark',
      action: 'Get Directions',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+45 12 34 56 78',
      action: 'Call Now',
      href: 'tel:+4512345678',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mrfriedchicken.dk',
      action: 'Send Email',
      href: 'mailto:info@mrfriedchicken.dk',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: 'Mon-Sun: 11:00 AM - 10:00 PM\nDelivery until 9:30 PM',
      action: 'View Menu',
      color: 'text-orange-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to taste the best burgers in Odense? Contact us for orders, reservations, or questions!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 whitespace-pre-line mb-4">{item.content}</p>
                    
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-primary hover:text-secondary font-medium text-sm transition-colors"
                      >
                        {item.action}
                        <ExternalLink size={14} />
                      </motion.a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                        {item.action}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map Placeholder / Additional Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 flex flex-col items-center justify-center text-center space-y-6"
          >
            {/* Map Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl shadow-primary/25"
            >
              <MapPin size={40} className="text-white" />
            </motion.div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Find Us in Odense</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Located in the heart of Odense, we're easily accessible by public transport and offer 
                convenient parking for our dine-in customers.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 w-full">
              <motion.a
                href="tel:+4512345678"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full justify-center"
              >
                <Phone size={18} />
                Order Now
              </motion.a>
              
              <motion.a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full justify-center"
              >
                View Menu
              </motion.a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-xs text-gray-400">Happy Customers</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">4.9★</div>
                <div className="text-xs text-gray-400">Average Rating</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">15min</div>
                <div className="text-xs text-gray-400">Delivery Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;