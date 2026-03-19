import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { motion } from 'framer-motion';
import { BarChart3, Briefcase, Globe, Target } from 'lucide-react';

const stats = [
  {
    value: '8',
    suffix: '',
    label: 'Service Lines',
    desc: 'Modular services that work individually or as a full-stack growth system',
    icon: <BarChart3 className="h-8 w-8 text-[#cc4e00]" />
  },
  {
    value: '5',
    suffix: '',
    label: 'Industry Sectors',
    desc: 'Deep expertise where digital commerce, data, and consumer behavior intersect',
    icon: <Briefcase className="h-8 w-8 text-[#cc4e00]" />
  },
  {
    value: '360',
    suffix: '°',
    label: 'Integrated Approach',
    desc: 'Strategy, execution, and optimization — not just a report and a handshake',
    icon: <Target className="h-8 w-8 text-[#cc4e00]" />
  },
  {
    value: '100',
    suffix: '%',
    label: 'Operator-Led',
    desc: 'Built by people who have actually done it — not just studied it from the outside',
    icon: <Globe className="h-8 w-8 text-[#cc4e00]" />
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export const StatsSection = () => {
  return (
    <Section className="bg-[#010b2b] py-32 md:py-48 overflow-hidden relative">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full border-l border-white/5 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />
      
      {/* Massive subtle background 'NUMBERS' text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] select-none">
        <span className="text-[25rem] font-black leading-none uppercase tracking-tighter text-white">
          Data
        </span>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col space-y-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
          >
            <div className="space-y-6 max-w-2xl">
              <div className="flex items-center space-x-6">
                <span className="text-[#cc4e00] font-black tracking-[0.4em] uppercase text-xs">By the Numbers</span>
                <div className="h-[1px] w-24 bg-[#cc4e00]" />
              </div>
              <Heading level={2} className="text-[clamp(2.5rem,7vw,5rem)] leading-[0.9] tracking-tighter text-white uppercase font-black">
                The Proof is in the <br/>
                <span className="text-[#cc4e00]">Execution.</span>
              </Heading>
            </div>
            
            <div className="lg:mb-4">
              <Text className="text-white/40 text-lg font-light max-w-xs leading-relaxed border-l-2 border-white/10 pl-6 italic">
                Because at the end of the day, results are the only language that matters.
              </Text>
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-[#010b2b] p-10 md:p-14 flex flex-col space-y-10 group relative transition-all duration-700 hover:bg-white/[0.02]"
              >
                {/* Micro-interaction: Animated Corner Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-white/5 border border-white/5 group-hover:bg-[#cc4e00]/10 group-hover:border-[#cc4e00]/20 transition-all duration-500">
                    {stat.icon}
                  </div>
                  <span className="text-white/5 font-black text-6xl group-hover:text-white/10 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-black text-white leading-none tracking-tighter group-hover:text-[#cc4e00] transition-colors duration-500">
                      {stat.value}
                    </span>
                    <span className="text-4xl font-black text-[#cc4e00]">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-bold text-white uppercase tracking-[0.2em] text-sm">
                      {stat.label}
                    </h4>
                    <Text className="text-white/50 text-base leading-relaxed font-light group-hover:text-white/80 transition-all duration-500 line-clamp-3">
                      {stat.desc}
                    </Text>
                  </div>
                </div>

                {/* Micro-interaction: Bottom Progress Link */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#cc4e00] group-hover:w-full transition-all duration-700 ease-[0.16,1,0.3,1]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
