import React from 'react';
import { motion } from 'framer-motion';

// import BunnyGirlImage from './assets/Bunny-Girl-3D-Character.png'; // Adjust the path as needed

const CaseStudy = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Paul Frank's iconic character, Bunny Girl, gets a 3D makeover
              </h2>
              <p className="text-gray-600 mb-4">How we helped</p>
              <p className="text-lg mb-6">
                We recreated Paul Frank's beloved Bunny Girl in a fresh, 3D look, 
                blending classic charm with modern design for a new generation of fans.
              </p>
              <a href="#" className="btn-primary bg-purple-600 text-white">
                Read the story
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg overflow-hidden">
              <img
                /*src="https://via.placeholder.com/600x400/FF69B4/FFFFFF?text=Bunny+Girl+3D"*/
                  // src={BunnyGirlImage}
                  src="/assets/Bunny-Girl-3D-Character.jpg"
                  alt="Bunny Girl 3D Character"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
