import React from 'react';
import { motion } from 'framer-motion';

const WhatsHot = () => {
  const hotTopics = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'See how we have helped industry leaders embrace digitalization and accelerate technology-led innovation.',
      link: '#'
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description: 'Discover how our AI solutions are transforming businesses across industries.',
      link: '#'
    },
    {
      id: 3,
      title: 'Cloud Migration',
      description: 'Learn about our approach to seamless cloud transitions and optimization.',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What's hot</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card bg-white p-6 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">{topic.title}</h3>
              <p className="text-gray-600 mb-6">{topic.description}</p>
              <a href={topic.link} className="text-primary-teal font-medium hover:underline">
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsHot;
