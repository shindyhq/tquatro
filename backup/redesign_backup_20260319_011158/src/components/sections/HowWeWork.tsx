import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import Link from 'next/link';
import { ArrowRight, MoveRight } from 'lucide-react';

const steps = [
  { 
    num: '01', 
    title: 'Discovery', 
    tag: 'Tailored', 
    desc: "We start by listening. A thorough look at your business, your goals, and the specific challenges standing between where you are and where you want to be. No assumptions, no templates." 
  },
  { 
    num: '02', 
    title: 'Strategy', 
    tag: 'Transparency', 
    desc: "Based on what we learn, we develop a focused plan — and we walk you through it plainly. Not a 50-page deck full of ideas, but a clear, prioritized roadmap." 
  },
  { 
    num: '03', 
    title: 'Execution', 
    tag: 'Tenacity', 
    desc: "This is where most consultancies stop. We don't. We stay involved through implementation — whether managing marketplace integrations, launching SEO, or restructuring operations." 
  },
  { 
    num: '04', 
    title: 'Measure & Optimize', 
    tag: 'Transformation', 
    desc: "We track what matters, report honestly, and adjust when needed. At every stage, the question we're asking is simple: is this business in a better position than before?" 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export const HowWeWork = () => {
  return (
    <section className="py-32 md:py-48 bg-[#010b2b] text-white overflow-hidden relative">
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Editorial Header */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col space-y-8"
            >
              <div className="flex items-center space-x-4">
                <span className="text-[#cc4e00] font-black tracking-[0.3em] uppercase text-xs">Methodology</span>
                <div className="h-[1px] w-12 bg-[#cc4e00]" />
              </div>
              
              <Heading level={2} className="text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter text-white uppercase font-black">
                Straight-forward.<br/>
                <span className="text-[#cc4e00]">No guesswork.</span>
              </Heading>
              
              <Text className="text-white/60 text-lg leading-relaxed max-w-xl font-light">
                We believe every engagement should be clear from day one &mdash; what we&apos;re doing, why we&apos;re doing it, and what success looks like. Here&apos;s how most projects unfold:
              </Text>

              <div className="pt-8">
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 group"
                  >
                    <span className="text-white font-black uppercase tracking-widest text-sm border-b-2 border-[#cc4e00] pb-2 group-hover:bg-[#cc4e00] group-hover:px-4 transition-all duration-300">
                      Start The Conversation
                    </span>
                    <MoveRight className="text-[#cc4e00] h-6 w-6" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Step Grid */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-[#010b2b] p-8 md:p-12 flex flex-col space-y-8 group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02]"
                >
                  {/* Micro-Interaction: Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#cc4e00] border-l-transparent translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  
                  <div className="flex justify-between items-start">
                    <span className="text-[#cc4e00] font-black text-xs tracking-widest uppercase py-1 border-b border-[#cc4e00]/30 transition-all duration-500 group-hover:pr-4 group-hover:border-[#cc4e00]">
                      Phase {step.num}
                    </span>
                    <span className="text-6xl font-black text-white/5 group-hover:text-[#cc4e00]/10 transition-colors duration-500 leading-none">
                      {step.num}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <Heading level={4} className="text-2xl font-black text-white uppercase group-hover:text-[#cc4e00] transition-colors">{step.title}</Heading>
                    <span className="inline-block text-[10px] font-bold text-[#cc4e00]/60 uppercase tracking-[0.2em]">{step.tag}</span>
                    <Text className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/80 transition-colors">
                      {step.desc}
                    </Text>
                  </div>

                  {/* Micro-Interaction: Line Animation */}
                  <div className="h-[2px] w-0 bg-[#cc4e00] group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
