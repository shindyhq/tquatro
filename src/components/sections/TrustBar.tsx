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

              {/* Stats Row according to doc */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-px bg-white/5 border border-white/5 mt-20">
                {[
                  { label: "Industries", value: "5", icon: <Globe className="w-5 h-5" /> },
                  { label: "Service Lines", value: "8", icon: <Layers className="w-5 h-5" /> },
                  { label: "Approach", value: "360°", icon: <RotateCcw className="w-5 h-5" /> },
                  { label: "Focus", value: "Nationally", icon: <Navigation className="w-5 h-5" />, sub: "Dallas-Based" },
                ].map((stat, i) => (
                  <div key={i} className="p-10 md:p-12 bg-[#010b2b] flex flex-col items-center space-y-4 group hover:bg-white/[0.02] transition-colors border-r border-white/5 last:border-r-0">
                    <div className="text-[#cc4e00] opacity-40 group-hover:opacity-100 transition-opacity">
                       {stat.icon}
                    </div>
                    <div className="flex flex-col items-center">
                       <span className="text-white text-4xl md:text-5xl font-black tracking-tighter uppercase">{stat.value}</span>
                       <span className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mt-2 group-hover:text-white/60 transition-colors">{stat.label}</span>
                       {stat.sub && (
                         <span className="text-[#cc4e00]/40 text-[9px] font-bold uppercase tracking-widest mt-1">{stat.sub}</span>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
