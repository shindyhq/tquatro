import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Section } from '../ui/Section';
import { ShoppingBag, Store, Smartphone, Truck, Newspaper } from 'lucide-react';

const industries = [
  { 
    icon: <ShoppingBag className="h-6 w-6 text-[#cc4e00]" />, 
    title: 'E-Commerce', 
    desc: 'Infrastructure and strategy to claim your share of the digital marketplace.' 
  },
  { 
    icon: <Store className="h-6 w-6 text-[#cc4e00]" />, 
    title: 'Retail & Omnichannel', 
    desc: 'Alignment across operations, data, and complete customer experience.' 
  },
  { 
    icon: <Smartphone className="h-6 w-6 text-[#cc4e00]" />, 
    title: 'Social Commerce', 
    desc: 'Direct path from content discovery to conversion on social channels.' 
  },
  { 
    icon: <Truck className="h-6 w-6 text-[#cc4e00]" />, 
    title: 'Supply Chain', 
    desc: 'Operational rigor for sourcing, forecasting, and fulfillment workflows.' 
  },
  { 
    icon: <Newspaper className="h-6 w-6 text-[#cc4e00]" />, 
    title: 'Media & Publications', 
    desc: 'First-party media assets and content-to-commerce systems.' 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

export const IndustriesOverview = () => {
  return (
    <Section className="bg-white py-24 md:py-32 relative overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-px h-full bg-[#010b2b]/5 pointer-events-none" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Focused Editorial Header */}
          <div className="lg:w-[40%] flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <span className="text-[#cc4e00] font-black tracking-[0.5em] text-[10px] uppercase">Where We Operate</span>
                <div className="h-[1px] w-8 bg-[#cc4e00]" />
              </div>
              
              <Heading level={2} className="text-[#010b2b] text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter uppercase font-black">
                Five Sectors.<br/>
                Deep <span className="text-[#cc4e00]">Experties.</span>
              </Heading>

              <Text className="text-[#010b2b]/60 text-base leading-relaxed max-w-sm border-l-2 border-[#cc4e00]/20 pl-6 italic">
                Focused industries where data, digital channels, and consumer behavior intersect.
              </Text>
            </motion.div>
          </div>

          {/* Right Column: Streamlined Magazine List - Height Optimized */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-[60%] flex flex-col divide-y divide-[#010b2b]/5 border-y border-[#010b2b]/5"
          >
            {industries.map((ind, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                className="group relative flex items-center justify-between py-6 md:py-8 transition-all duration-500 hover:pl-4"
              >
                <div className="flex items-center space-x-6 md:space-x-10">
                  {/* Compact Icon Block */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#010b2b]/5 group-hover:border-[#cc4e00]/40 group-hover:bg-[#cc4e00]/5 transition-all duration-500 rounded-lg">
                    {ind.icon}
                  </div>

                  <div className="flex flex-col space-y-1">
                    <Heading level={4} className="text-[#010b2b] text-xl font-bold uppercase tracking-tight group-hover:text-[#cc4e00] transition-colors duration-300">
                      {ind.title}
                    </Heading>
                    <Text className="text-[#010b2b]/50 text-sm md:text-base leading-tight font-light group-hover:text-[#010b2b]/80 transition-colors duration-300 line-clamp-1 md:line-clamp-none">
                      {ind.desc}
                    </Text>
                  </div>
                </div>

                {/* Streamlined Editorial Index */}
                <div className="flex-shrink-0 ml-4">
                  <span className="text-[#010b2b]/10 font-black text-2xl group-hover:text-[#cc4e00]/20 transition-all duration-500">
                    0{i + 1}
                  </span>
                </div>

                {/* Micro-interaction: Hover Line Reveal */}
                <div className="absolute left-0 top-0 h-full w-0 bg-[#cc4e00] group-hover:w-[2px] transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </Section>
  );
};
