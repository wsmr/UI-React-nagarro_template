import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { id: 'fluidic', label: 'Fluidic Enterprise' },
    { id: 'ar24', label: 'AR\'24/Q1\'25' },
    { id: 'customer', label: 'Customer speak' },
    { id: 'tsuite', label: 'T-suite' }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveTab(next)
  };

  const heroContent = [
    {
      title: "Nagarro releases FY 2024 and Q1 2025 statements",
      buttonText: "Know more",
      buttonLink: "#"
    },
    {
      title: "Annual Report 2024 and Q1 2025 Financial Results",
      buttonText: "View report",
      buttonLink: "#"
    },
    {
      title: "Hear what our customers have to say",
      buttonText: "Read testimonials",
      buttonLink: "#"
    },
    {
      title: "T-suite: Technology leadership insights",
      buttonText: "Explore",
      buttonLink: "#"
    }
  ];

  return (
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-700 opacity-80 z-0"></div>
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          {/*/!* Background gradient wave effect *!/*/}
          {/*<div className="absolute inset-0 wave-bg">*/}
          {/*  <div className="hero-gradient opacity-70 w-full h-full"></div>*/}
          {/*</div>*/}

          {/*<div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">*/}
            <div className="mt-20 md:mt-0">
              <Slider {...sliderSettings}>
                {heroContent.map((content, index) => (
                    <div key={index} className="outline-none">
                      <motion.div
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{duration: 0.5}}
                          className="text-white max-w-3xl"
                      >
                        <h1 className="text-4xl md:text-6xl font-bold mb-8">{content.title}</h1>
                        <a href={content.buttonLink} className="btn-primary inline-block">
                          {content.buttonText}
                        </a>
                      </motion.div>
                    </div>
                ))}
              </Slider>
            </div>

            {/* Slider controls */}
            <div className="absolute bottom-20 left-0 right-0">
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center">
                  {tabs.map((tab, index) => (
                      <button
                          key={tab.id}
                          className={`mr-4 mb-2 px-4 py-2 text-sm rounded-full transition-all ${
                              activeTab === index
                                  ? 'bg-white bg-opacity-20 text-white'
                                  : 'text-white text-opacity-70 hover:text-opacity-100'
                          }`}
                          onClick={() => setActiveTab(index)}
                      >
                        {tab.label}
                      </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
      </section>
);
};

export default Hero;
