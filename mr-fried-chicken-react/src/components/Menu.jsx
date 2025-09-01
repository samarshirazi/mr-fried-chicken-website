import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Star, Plus } from 'lucide-react';
import { menuData } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('burgers');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'burgers', name: 'Signature Burgers', icon: '🍔' },
    { id: 'chicken', name: 'Chicken Classics', icon: '🍗' },
    { id: 'sides', name: 'Sides & Drinks', icon: '🍟' }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-dark via-dark-secondary to-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl" />
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
            Our <span className="gradient-text">Delicious Menu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Crafted with premium ingredients, served with passion
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuData[activeCategory]?.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
              >
                {/* Item Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.image}</span>
                    <div className="flex gap-1">
                      {item.popular && (
                        <span className="flex items-center gap-1 bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                          <Star size={10} />
                          Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="flex items-center gap-1 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">
                          <Flame size={10} />
                          Spicy
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <span className="text-2xl font-bold text-secondary">
                    {item.price} DKK
                  </span>
                </div>

                {/* Item Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  onClick={() => addToCart(item)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Plus size={18} />
                  Add to Order
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-primary to-accent text-white p-4 rounded-2xl shadow-2xl shadow-primary/25 z-50"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                {cart.length}
              </div>
              <span className="font-semibold">
                Items in cart • {cart.reduce((sum, item) => sum + item.price, 0)} DKK
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Menu;