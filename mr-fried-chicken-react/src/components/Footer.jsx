import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Order Online', href: 'tel:+4512345678' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+45 12 34 56 78', href: 'tel:+4512345678' },
    { icon: Mail, text: 'info@mrfriedchicken.dk', href: 'mailto:info@mrfriedchicken.dk' },
    { icon: MapPin, text: 'Østre Stationsvej 27, 5000 Odense' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-3xl font-black gradient-text">
                  🍗 Mr. Fried Chicken
                </span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Odense's premier destination for mouthwatering burgers and crispy fried chicken. 
                Made with premium ingredients, served with passion, loved by locals.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  🍔 <span>Premium Burgers</span>
                </span>
                <span className="flex items-center gap-2">
                  🍗 <span>Crispy Chicken</span>
                </span>
                <span className="flex items-center gap-2">
                  ⚡ <span>Fast Delivery</span>
                </span>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">Get in Touch</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index}>
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <item.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item.text}</span>
                      </motion.a>
                    ) : (
                      <div className="flex items-start gap-3 text-gray-300">
                        <item.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{item.text}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Opening Hours */}
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="font-semibold text-secondary mb-2">Opening Hours</h4>
                <p className="text-gray-300 text-sm">
                  Mon-Sun: 11:00 AM - 10:00 PM<br />
                  Delivery until 9:30 PM
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Mr. Fried Chicken. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1 flex items-center justify-center lg:justify-start gap-1">
                  Crafted with <Heart size={12} className="text-red-400" /> in Odense, Denmark
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Premium burgers & crispy chicken since 2025 • Fresh ingredients • Bold flavors
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-primary/50"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;