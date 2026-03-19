import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

// Slide Data - Enhanced with Pattern overlays and specific brand themes
const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    line1: 'COMMERCE IS',
    line2: 'EVOLVING.',
    subtitle: 'Bridging the gap between theory and deep channel execution in a modern retail landscape.',
    ctaLabel: 'See Our Process',
    ctaHref: '/#how-we-work',
    pattern: 'mesh',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    line1: 'UNCOMPROMISING',
    line2: 'STRATEGY.',
    subtitle: 'Data-driven operations that impact the bottom line across every digital marketplace.',
    ctaLabel: 'View Services',
    ctaHref: '/services',
    pattern: 'dots',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    line1: 'OPERATORS',
    line2: 'FIRST.',
    subtitle: 'Real-world expertise from specialists who have managed multi-million dollar brands.',
    ctaLabel: 'About Us',
    ctaHref: '/about',
    pattern: 'grid',
  },
];

const SLIDE_DURATION = 8000;

// Animation Variants
const textContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 }
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const wordVariants: Variants = {
  hidden: { y: '100%', rotateX: 45, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    rotateX: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    y: '-100%',
    opacity: 0,
    filter: 'blur(10px)',
    transition: { duration: 0.5, ease: "easeIn" }
  }
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
};

const backgroundVariants: Variants = {
  enter: (direction: number) => ({
    scale: 1.2,
    opacity: 0,
    x: direction > 0 ? '10%' : '-10%',
  }),
  center: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
      opacity: { duration: 1 },
      x: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    }
  },
  exit: (direction: number) => ({
    scale: 1.1,
    opacity: 0,
    x: direction < 0 ? '10%' : '-10%',
    transition: { duration: 1 }
  })
};

const patternVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 0.15, 
    scale: 1,
    transition: { duration: 2, ease: "easeOut" }
  }
};

export const SliderHeroSection = () => {
  const [page, setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const slideIndex = Math.abs(page[0] % slides.length);
  const currentSlide = slides[slideIndex];
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage([page[0] + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      paginate(1);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100vh] overflow-hidden bg-[#010b2b]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={page[1]} mode="popLayout">
          <motion.div
            key={page[0]}
            custom={page[1]}
            variants={backgroundVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {/* Visual Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#010b2b] via-[#010b2b]/80 to-transparent z-10" />
            <div className="absolute inset-0 bg-[#010b2b]/30 mix-blend-multiply z-10" />
            
            <Image 
              src={currentSlide.image} 
              alt="Slide" 
              fill
              priority
              className="object-cover grayscale brightness-75"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Interactive Pattern Layer (Micro-Animated) */}
      <motion.div 
        key={`pattern-${slideIndex}`}
        variants={patternVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 z-10 pointer-events-none opacity-20"
      >
        {currentSlide.pattern === 'grid' && (
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #cc4e00 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        )}
        {currentSlide.pattern === 'dots' && (
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #cc4e00 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
        )}
        {currentSlide.pattern === 'mesh' && (
          <div className="w-full h-full opacity-30" style={{ background: 'linear-gradient(45deg, #cc4e00 12%, transparent 0, transparent 88%, #cc4e00 0), linear-gradient(135deg, transparent 37%, #cc4e00 0, #cc4e00 63%, transparent 0), linear-gradient(45deg, transparent 37%, #cc4e00 0, #cc4e00 63%, transparent 0)', backgroundSize: '60px 60px' }} />
        )}
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-20 h-full flex items-center pt-24">
        <Container className="h-full flex items-center">
          <div className="w-full lg:w-[65%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col space-y-10"
              >
                {/* Massive Editorial Header */}
                <div className="flex flex-col -space-y-4 md:-space-y-8">
                  <div className="overflow-hidden">
                    <motion.span 
                      variants={wordVariants}
                      className="block font-black text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] tracking-tighter uppercase text-white"
                    >
                      {currentSlide.line1}
                    </motion.span>
                  </div>
                  <div className="overflow-hidden">
                    <motion.span 
                      variants={wordVariants}
                      className="block font-black text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] tracking-tighter uppercase text-[#cc4e00]"
                    >
                      {currentSlide.line2}
                    </motion.span>
                  </div>
                </div>

                {/* Refined Subtitle Area */}
                <motion.div variants={fadeUpVariants} className="max-w-xl pl-2 border-l-2 border-[#cc4e00]/30 ml-1">
                  <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed tracking-wide">
                    {currentSlide.subtitle}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-8 mt-12">
                    <Link href={currentSlide.ctaHref}>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative flex items-center bg-[#cc4e00] text-white px-10 py-5 font-black uppercase text-sm tracking-[0.2em] overflow-hidden"
                      >
                        <span className="relative z-10">{currentSlide.ctaLabel}</span>
                        <motion.div 
                          className="absolute inset-0 bg-white"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        />
                        <style jsx>{`
                          .group:hover span { color: #010b2b; }
                        `}</style>
                        <MoveUpRight className="ml-4 h-5 w-5 relative z-10 group-hover:text-[#010b2b] transition-colors" />
                      </motion.div>
                    </Link>

                    <div className="flex items-center space-x-4">
                       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 whitespace-nowrap">Explore Capabilities</span>
                       <div className="h-px w-12 bg-white/20" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </div>

      {/* Professional Slider Controls (Micro-Animated) */}
      <div className="absolute bottom-20 left-0 w-full z-30">
        <Container>
          <div className="flex items-center justify-between">
            
            {/* Progress Loop */}
            <div className="flex items-center space-x-12">
              <div className="flex flex-col space-y-4">
                <span className="text-[10px] font-black tracking-[0.5em] text-[#cc4e00] uppercase">Status</span>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setIsPaused(!isPaused)}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#cc4e00] transition-all group"
                    aria-label={isPaused ? "Play" : "Pause"}
                  >
                    {isPaused ? <Play className="h-4 w-4 fill-white" /> : <Pause className="h-4 w-4 fill-white" />}
                  </button>
                  <div className="h-10 w-px bg-white/10 mx-2" />
                  <div className="flex items-end h-8 overflow-hidden font-black text-4xl text-white/10">
                     <AnimatePresence mode="wait">
                       <motion.span 
                          key={slideIndex}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          className="text-white"
                       >
                         0{slideIndex + 1}
                       </motion.span>
                     </AnimatePresence>
                     <span className="text-sm pb-1 ml-1">/{slides.length}</span>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col space-y-4 w-64">
                 <span className="text-[10px] font-black tracking-[0.5em] text-white/20 uppercase">Next Transition</span>
                 <div className="h-1 w-full bg-white/5 relative overflow-hidden">
                   <motion.div 
                      initial={false}
                      animate={{ width: isPaused ? '0%' : '100%' }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                      key={page[0]}
                      className="absolute inset-y-0 left-0 bg-[#cc4e00]"
                   />
                 </div>
              </div>
            </div>

            {/* Premium Gallery Buttons */}
            <div className="flex items-center">
              <div className="relative flex p-1 bg-[#010b2b]/80 backdrop-blur-xl border border-white/5 rounded-full">
                <button 
                  onClick={() => paginate(-1)}
                  className="group w-16 h-16 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all relative overflow-hidden"
                  aria-label="Previous Slide"
                >
                  <div className="absolute inset-0 bg-[#cc4e00] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                  <ChevronLeft className="h-6 w-6 relative z-10" />
                </button>
                
                <div className="w-px h-8 bg-white/10 self-center mx-1" />
                
                <button 
                  onClick={() => paginate(1)}
                  className="group w-16 h-16 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all relative overflow-hidden"
                  aria-label="Next Slide"
                >
                  <div className="absolute inset-0 bg-[#cc4e00] scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                  <ChevronRight className="h-6 w-6 relative z-10" />
                </button>
              </div>
            </div>

          </div>
        </Container>
      </div>

      {/* Minimalist Watermark Elements */}
      <div className="absolute top-24 right-12 z-10 hidden xl:flex flex-col items-end space-y-4 opacity-20">
        <span className="text-[10px] font-black uppercase tracking-[1em] vertical-text text-white">Online Retail Specialists</span>
        <div className="h-32 w-px bg-[#cc4e00]" />
      </div>

    </section>
  );
};
