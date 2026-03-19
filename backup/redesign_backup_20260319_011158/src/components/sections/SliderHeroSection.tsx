import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Slide Data
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    bgColor: 'bg-[#010b2b]',
    colorHex: '#010b2b',
    textColorPrimary: 'text-white',
    textColorAccent: 'text-[#cc4e00]',
    line1: 'COMMERCE IS',
    line2: 'EVOLVING.',
    subtitle: 'Expert guidance for the modern retail landscape.',
    ctaLabel: 'See Our Process',
    ctaHref: '/#how-we-work',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    bgColor: 'bg-[#010b2b]',
    colorHex: '#010b2b',
    textColorPrimary: 'text-white',
    textColorAccent: 'text-[#cc4e00]',
    line1: 'UNCOMPROMISING',
    line2: 'STRATEGY.',
    subtitle: 'Data-driven decisions that impact the bottom line.',
    ctaLabel: 'View Services',
    ctaHref: '/services',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    bgColor: 'bg-[#010b2b]',
    colorHex: '#010b2b',
    textColorPrimary: 'text-white',
    textColorAccent: 'text-[#cc4e00]',
    line1: 'OPERATORS',
    line2: 'FIRST.',
    subtitle: 'Real-world experience, not just textbook theory.',
    ctaLabel: 'About Us',
    ctaHref: '/about',
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    bgColor: 'bg-[#010b2b]',
    colorHex: '#010b2b',
    textColorPrimary: 'text-white',
    textColorAccent: 'text-[#cc4e00]',
    line1: 'BUILT FOR',
    line2: 'SCALE.',
    subtitle: 'Infrastructure and operations ready for your next phase of growth.',
    ctaLabel: "Let's Talk",
    ctaHref: '/contact',
  },
];

// Content Animation Variants
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const titleLineVariants: Variants = {
  hidden: { y: '100%', opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Image Transition Variants
const imageSlideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '5%' : '-5%',
    opacity: 0,
    scale: 1.1,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 25 },
      opacity: { duration: 1.2, ease: "easeInOut" },
      scale: { duration: 10, ease: "linear" } // Subtle Ken Burns
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '5%' : '-5%',
    opacity: 0,
    scale: 1.05,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 25 },
      opacity: { duration: 0.8 }
    }
  })
};

const SLIDE_DURATION = 7000;

export const SliderHeroSection = () => {
  const [page, setPage] = useState([0, 0]); // [current index, direction]
  const [isPaused, setIsPaused] = useState(false);
  const slideIndex = Math.abs(page[0] % slides.length);
  const currentSlide = slides[slideIndex];

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPage([page[0] + 1, 1]);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [page, isPaused]);

  const paginate = (newDirection: number) => {
    setPage([page[0] + newDirection, newDirection]);
  };

  return (
    <section 
      className="relative w-full h-[100vh] flex flex-col lg:flex-row overflow-hidden bg-[#010b2b]"
      style={{ 
        '--slide-color': '#010b2b',
        '--slide-color-transparent': '#010b2b00' 
      } as React.CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* BASE LAYER: Media spans full width */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <AnimatePresence initial={false} custom={page[1]} mode="popLayout">
          <motion.div
            key={page[0]}
            custom={page[1]}
            variants={imageSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-[#010b2b]/40 z-10" />
            <img 
              src={currentSlide.image} 
              alt="Hero Showcase" 
              className="w-full h-full object-cover object-center grayscale-[30%] contrast-[1.1] brightness-[0.7]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* OVERLAY LAYER 1: Editorial Diagonal Blend */}
      <div 
        className="absolute inset-0 z-10 w-full h-full pointer-events-none transition-all duration-1000 ease-in-out hidden lg:block"
        style={{
          background: 'linear-gradient(105deg, #010b2b 0%, #010b2b 30%, #010b2bCC 45%, #010b2b00 75%)'
        }}
      />
      <div 
        className="absolute inset-0 z-10 w-full h-full pointer-events-none transition-all duration-1000 ease-in-out lg:hidden"
        style={{
          background: 'linear-gradient(180deg, #010b2b 0%, #010b2b 40%, #010b2b80 70%, #010b2b00 100%)'
        }}
      />
      
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -top-[10%] -left-[5%] text-[40rem] font-black text-white leading-none select-none"
        >
          T
        </motion.div>
      </div>

      {/* OVERLAY LAYER 2: Text / Controls */}
      <div className="container relative z-30 h-full flex items-center">
        <div className="w-full lg:w-[70%] flex flex-col justify-center px-4 md:px-0 pointer-events-none">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col space-y-6 lg:space-y-10 pointer-events-auto"
            >
              {/* Slide Count / Eyebrow */}
              <motion.div variants={fadeUpVariants} className="flex items-center space-x-6">
                <div className="flex flex-col">
                   <span className="text-[#cc4e00] font-black tracking-[0.2em] text-sm uppercase mb-1">Observation 0{slideIndex + 1}</span>
                   <div className="h-[2px] w-12 bg-[#cc4e00]" />
                </div>
              </motion.div>

              {/* Massive Editorial Typography */}
              <div className="flex flex-col -space-y-4 md:-space-y-8 lg:-space-y-12">
                <div className="overflow-hidden py-2">
                  <motion.h1 
                    variants={titleLineVariants}
                    className="font-black text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter uppercase text-white"
                  >
                    {currentSlide.line1}
                  </motion.h1>
                </div>
                <div className="overflow-hidden py-2">
                  <motion.h1 
                    variants={titleLineVariants}
                    className="font-black text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-tighter uppercase text-[#cc4e00]"
                  >
                    {currentSlide.line2}
                  </motion.h1>
                </div>
              </div>

              {/* Subtitle & CTA */}
              <motion.div variants={fadeUpVariants} className="max-w-2xl pt-4">
                <p className="text-lg md:text-2xl font-light tracking-wide text-white/80 mb-12 leading-relaxed max-w-xl">
                  {currentSlide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link href={currentSlide.ctaHref}>
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="group flex items-center space-x-4 text-white text-lg font-bold uppercase tracking-widest"
                    >
                      <span className="relative">
                        {currentSlide.ctaLabel}
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#cc4e00] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </span>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#cc4e00] group-hover:border-[#cc4e00] transition-all duration-300">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </motion.button>
                  </Link>

                  <div className="hidden sm:block h-[1px] w-24 bg-white/10" />
                  
                  <Link href="/contact" className="text-white/40 hover:text-[#cc4e00] transition-colors text-sm font-bold uppercase tracking-widest">
                    Request Consultation
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Editorial Navigation / Progress */}
      <div className="absolute bottom-12 left-0 w-full z-40 pointer-events-none px-4 md:px-12 lg:px-24">
        <div className="container flex flex-col md:flex-row items-end justify-between gap-8 md:gap-0">
          
          {/* Progress Indicators */}
          <div className="flex space-x-8 pointer-events-auto">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setPage([idx, idx > slideIndex ? 1 : -1])}
                className="group relative flex flex-col items-start py-4"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className={`text-[10px] font-black tracking-widest mb-2 transition-colors duration-300 ${idx === slideIndex ? 'text-[#cc4e00]' : 'text-white/20 group-hover:text-white/50'}`}>
                  0{idx + 1}
                </span>
                <div className="h-[2px] w-12 md:w-24 bg-white/10 overflow-hidden relative">
                  <motion.div 
                    initial={false}
                    animate={{ x: idx === slideIndex ? '0%' : '-100%' }}
                    transition={{ 
                      duration: idx === slideIndex ? SLIDE_DURATION / 1000 : 0.4, 
                      ease: idx === slideIndex ? "linear" : "easeOut" 
                    }}
                    className="absolute inset-0 h-full w-full bg-[#cc4e00]"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-4 pointer-events-auto">
             <div className="flex items-center space-x-2 mr-4">
                <span className="text-white/20 font-black text-xs uppercase tracking-[0.3em]">Volume</span>
                <span className="text-white font-black text-xs uppercase tracking-[0.3em]">2026.01</span>
             </div>
             <div className="flex border border-white/10 overflow-hidden">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-4 hover:bg-white/5 transition-colors text-white border-r border-white/10"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="p-4 hover:bg-white/5 transition-colors text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
