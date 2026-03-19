import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';

const testimonials = [
  {
    quote:
      "Working with a team that actually understands ecommerce operations - not just the theory - made all the difference. They helped us streamline our marketplace presence and finally get our numbers in order.",
    author: 'E-commerce Brand Owner',
    location: 'Texas',
  },
  {
    quote:
      "Our SEO traffic had flatlined for two years. Within six months of working with T-QUATRO, we had our best organic quarter to date.",
    author: 'DTC Brand Founder',
    location: 'United States',
  },
  {
    quote:
      "They came in during a difficult period for our business and helped us see clearly where the problems were. The turnaround plan they built was practical, not pie-in-the-sky.",
    author: 'Retail Business Owner',
    location: 'Texas',
  },
  {
    quote:
      "T-QUATRO's approach to marketplace integration isn't just about software—it's about the math of the business. They helped us understand our true landed costs across every channel.",
    author: 'Multi-Channel Retailer',
    location: 'United States',
  },
];

export const SocialProof = () => {
  return (
    <section className="py-32 md:py-48 bg-[#010b2b] overflow-hidden relative border-t border-white/5">
      {/* Editorial Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#cc4e00]/5 blur-[100px] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32">
          
          {/* Left: Section Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 lg:sticky lg:top-48"
            >
              <div className="flex flex-col space-y-4">
                <span className="text-[#cc4e00] font-black tracking-[0.4em] uppercase text-xs">Testimonials</span>
                <div className="h-16 w-[2px] bg-[#cc4e00]" />
              </div>
              
              <Heading level={2} className="text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.9] tracking-tighter uppercase font-black">
                Trusted by <br />
                <span className="text-[#cc4e00]">Operators.</span>
              </Heading>

              <Text className="text-white/40 text-lg font-light leading-relaxed max-w-sm">
                We measure our success by the tangible operational shifts we execute for our partners.
              </Text>
            </motion.div>
          </div>

          {/* Right: Testimonial Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/5 overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#010b2b] p-10 md:p-14 relative group transition-all duration-500 hover:bg-white/[0.02] flex flex-col justify-between h-full"
              >
                <div className="relative z-10 space-y-10">
                  {/* Visual Pull-Quote Motif */}
                  <span className="block text-6xl font-black text-[#cc4e00]/10 select-none pointer-events-none group-hover:text-[#cc4e00]/20 transition-colors duration-500">
                    &ldquo;
                  </span>

                  <Text className="text-white/80 text-lg md:text-xl font-light leading-relaxed tracking-tight">
                    {t.quote}
                  </Text>
                </div>
                  
                <div className="flex items-center space-x-6 pt-10 border-t border-white/5 mt-10">
                  <div className="w-10 h-[1px] bg-[#cc4e00]" />
                  <div className="flex flex-col">
                    <span className="text-white font-black uppercase tracking-widest text-[10px]">
                      {t.author}
                    </span>
                    <span className="text-[#cc4e00]/60 text-[9px] font-bold uppercase tracking-[0.2em] mt-1">
                      {t.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
};
