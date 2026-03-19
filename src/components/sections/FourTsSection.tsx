import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Section } from '../ui/Section';

const values = [
  {
    title: "Transparency",
    quote: "We'll tell you honestly if we're the right fit - and point you in the right direction if we're not.",
    description: "We say what we mean - including the things that are uncomfortable to hear. If something isn't working, we'll tell you. If we're not the right fit, we'll say so. You'll never leave a conversation with us wondering where things actually stand."
  },
  {
    title: "Transformation",
    quote: "Not incremental growth. Decisive, structural, sustainable growth.",
    description: "We're not here to maintain the status quo. Every service we offer is built around changing the trajectory of your business - whether that's breaking through a growth ceiling, rebuilding a broken operation, or entering a new market with confidence."
  },
  {
    title: "Tenacity",
    quote: "This is where most consultancies stop. We don't.",
    description: "Most consultancies deliver recommendations. We deliver results - and that requires staying involved beyond the strategy session. We work through implementation, troubleshoot the unexpected, and don't walk away until the work is actually done."
  },
  {
    title: "Tailored",
    quote: "No assumptions, no templates - just honest assessment.",
    description: "No two businesses are the same, and we don't treat them that way. Every engagement starts with genuine discovery - understanding your specific situation, constraints, and goals before we recommend a single thing. What we build for you fits you, not a template."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const FourTsSection = () => {
  return (
    <Section className="bg-[#010b2b] py-32 md:py-48 overflow-hidden relative border-t border-white/5">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none" />

      <Container>
        <div className="flex flex-col space-y-24">
          
          {/* Section Header: Editorial Centered Layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-4">
              <span className="text-[#cc4e00] font-black tracking-[0.5em] uppercase text-xs">Differentiation</span>
              <div className="h-16 w-[2px] bg-[#cc4e00]" />
            </div>
            
            <Heading level={2} className="text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.85] tracking-tighter uppercase font-black">
              Four Qualities. <br className="hidden md:block" />
              <span className="text-[#cc4e00]">No Exceptions.</span>
            </Heading>

            <Text className="text-white/40 text-xl font-light leading-relaxed max-w-2xl border-x border-white/10 px-12">
              What separates the consultancies worth working with isn&apos;t the length of their service list - it&apos;s how they show up.
            </Text>
          </motion.div>

          {/* Value Grid: Grid with Silhouette T Motif */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10"
          >
            {values.map((v, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-[#010b2b] p-10 md:p-16 group relative overflow-hidden transition-all duration-700 hover:bg-white/[0.02]"
              >
                {/* Silhouette 'T' Motif Background */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 pointer-events-none">
                  <span className="text-[35rem] font-black leading-none text-white select-none">T</span>
                </div>

                <div className="relative z-10 flex flex-col h-full space-y-12">
                  <div className="flex justify-between items-start">
                    <div className="space-y-4">
                      <span className="text-[#cc4e00] font-black text-xs uppercase tracking-widest border-l-2 border-[#cc4e00] pl-4">Value 0{i + 1}</span>
                      <Heading level={3} className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight group-hover:text-[#cc4e00] transition-colors duration-500">
                        {v.title}
                      </Heading>
                    </div>
                  </div>

                  <Text className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500 max-w-prose">
                    {v.description}
                  </Text>

                  <div className="pt-8 border-t border-white/5 mt-auto">
                    <div className="flex items-center space-x-4">
                       <span className="h-px w-8 bg-[#cc4e00]/40 group-hover:w-16 transition-all duration-700" />
                       <Text className="text-[#cc4e00] font-black uppercase tracking-widest text-[10px] md:text-xs leading-snug">
                          &ldquo;{v.quote}&rdquo;
                       </Text>
                    </div>
                  </div>
                </div>

                {/* Micro-Interaction Hover Expansion */}
                <div className="absolute left-0 top-0 h-0 w-full bg-[#cc4e00] group-hover:h-[2px] transition-all duration-700 ease-in-out" />
                <div className="absolute right-0 bottom-0 h-0 w-[2px] bg-[#cc4e00] group-hover:h-24 transition-all duration-700 ease-in-out delay-100" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};
