import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-2xl md:text-3xl leading-relaxed">
            With around 17,500 Nagarrians in 39 countries,
            Nagarro drives business value and engineering
            excellence in over 1000 clients globally. The company
            is distinguished by its entrepreneurial, agile, and
            global character, as well as its CARING values and
            mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
