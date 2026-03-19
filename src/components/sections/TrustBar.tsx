import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Heading } from '../ui/Heading';
import { motion } from 'framer-motion';
import { Globe, Layers, RotateCcw, Navigation } from 'lucide-react';

export const TrustBar = () => {
  return (
    <Section className="relative overflow-hidden bg-[#010b2b] py-32 md:py-48 border-b border-white/5">
      {/* Editorial Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 pointer-events-none" />
      
      {/* Background Accent - adjusted for Navy/Orange */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,78,0,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <Container>
        <div className="flex flex-col items-center">
          {/* Quote Block - Bold Editorial Block Transformation */}
          <div className="relative max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="flex flex-col items-center space-y-6">
                <span className="inline-block text-[#cc4e00] font-black uppercase tracking-[0.5em] text-[10px] md:text-xs px-4 py-2 border border-[#cc4e00]/30">
                  The Core Conviction
                </span>
                <div className="h-16 w-[2px] bg-[#cc4e00]" />
              </div>
              
              <div className="max-w-4xl mx-auto px-4">
                <Heading level={2} className="text-white text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-tighter uppercase font-black">
                  The marketplace doesn&apos;t reward the biggest &mdash; 
                  <br className="hidden md:block" />
                  <span className="text-[#cc4e00]">it rewards the most prepared.</span>
                </Heading>
              </div>

              {/* Visual Divider Block */}
              <div className="flex flex-col items-center pt-12">
                <div className="w-1 h-20 bg-gradient-to-b from-[#cc4e00] to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
