import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import { ArrowUpRight, MoveRight } from 'lucide-react';

const services = [
  { id: '01', title: 'E-Commerce Brokerage', desc: 'Connecting your business with the right platforms, buyers, and partnerships to unlock marketplace reach and transaction value.' },
  { id: '02', title: 'Marketplace Integrations', desc: 'Selling on multiple platforms shouldn\'t mean managing multiple headaches. We build seamless multi-channel infrastructure.' },
  { id: '03', title: 'Product Sourcing', desc: 'We build strategic supplier relationships and sourcing frameworks that protect your bottom line while scaling your catalog.' },
  { id: '04', title: 'Product Development', desc: 'We help you move from concept to launch with research-backed validation, competitive positioning, and a go-to-market plan.' },
  { id: '05', title: 'Business Turnaround', desc: 'We step in, diagnose the root cause, and rebuild the operational foundation your business needs to get back on track.' },
  { id: '06', title: 'Bookkeeping', desc: 'Clean, current, and decision-ready financials so you always know exactly where your business stands.' },
  { id: '07', title: 'SEO Services', desc: 'Visibility that earns its place - not rented. We build organic search strategies that compound over time.' },
  { id: '08', title: 'Media & Publications', desc: 'We develop content strategies and editorial frameworks that build authority and grow audiences.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export const ServicesOverview = () => {
  return (
    <section className="py-32 md:py-48 bg-[#010b2b] text-white relative overflow-hidden">
      {/* Editorial Watermark */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5">
        <span className="text-[15rem] font-black leading-none uppercase">Service</span>
      </div>

      <Container>
        {/* Header Block: Editorial Spacing */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12 border-b border-white/5 pb-24">
          <div className="flex flex-col space-y-8 max-w-3xl">
            <div className="flex items-center space-x-6">
              <span className="text-[#cc4e00] font-black tracking-[0.4em] uppercase text-xs">Our Expertise</span>
              <div className="h-[1px] w-24 bg-[#cc4e00]" />
            </div>
            
            <Heading level={2} className="text-[clamp(3rem,8vw,6rem)] leading-[0.85] tracking-tighter text-white uppercase font-black">
              Eight Verticals.<br/>
              <span className="text-[#cc4e00]">One Outcome.</span>
            </Heading>
            
            <Text className="text-white/60 text-xl font-light leading-relaxed max-w-2xl">
              Our services are modular by design and powerful in combination. Whether you need one solution or a full-stack growth system, everything we offer is built to deliver measurable outcomes - not just activity.
            </Text>
          </div>

          <div className="flex flex-col gap-6 w-full lg:w-auto self-start lg:self-end">
            <Link href="/services">
              <Button size="lg" className="bg-[#cc4e00] hover:bg-[#a63f00] text-white rounded-none border-none py-6 px-10 font-black uppercase tracking-widest text-sm w-full lg:w-auto">
                Explore The Verticals
              </Button>
            </Link>
          </div>
        </div>

        {/* Services List: Magazine List Layout with Hover Visuals */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-12"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className="group border-b border-white/10 pb-12 flex flex-col space-y-6 relative hover:border-[#cc4e00] transition-colors duration-500"
            >
              {/* Micro-interaction: Animated Service Number */}
              <div className="flex items-center justify-between">
                <span className="text-[#cc4e00] font-black italic text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                  {s.id}.
                </span>
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-[#cc4e00] group-hover:border-[#cc4e00] transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 opacity-40 group-hover:opacity-100" />
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Heading level={3} className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#cc4e00] transition-colors">
                  {s.title}
                </Heading>
                <Text className="text-white/40 text-base leading-relaxed font-light group-hover:text-white/70 transition-colors max-w-lg">
                  {s.desc}
                </Text>
              </div>

              {/* Hover Visual Accent */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-[#cc4e00] group-hover:h-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Contact Trigger */}
        <div className="mt-32 pt-24 border-t border-white/5 flex flex-col items-center text-center space-y-12">
           <Heading level={4} className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-tighter">
             Transform Your <span className="text-white/40">Infrastructure</span>
           </Heading>
           <Link href="/contact">
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center space-x-6 group"
              >
                <span className="text-white font-black uppercase tracking-[0.3em] text-sm border-b-2 border-white/20 pb-2 group-hover:border-[#cc4e00] transition-colors">
                  Get Started
                </span>
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#cc4e00] group-hover:border-[#cc4e00] transition-all duration-300">
                  <MoveRight className="text-white h-6 w-6" />
                </div>
              </motion.button>
           </Link>
        </div>
      </Container>
    </section>
  );
};
