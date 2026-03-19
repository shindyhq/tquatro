import Head from "next/head";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ShoppingBag, Store, Smartphone, Truck, Newspaper, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const industrySectors = [
  {
    id: "01",
    slug: "ecommerce",
    title: "Direct-to-Consumer / E-Commerce",
    icon: <ShoppingBag className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Helping brands dominate marketplace ecosystems (Amazon, Walmart) while building sustainable off-platform growth.",
    stats: "250M+ GMV Managed",
    focus: ["Marketplace Strategy", "Brand Registry", "Channel Hygiene"]
  },
  {
    id: "02",
    slug: "retail-omnichannel",
    title: "Retail & Omnichannel",
    icon: <Store className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Bridging the physical and digital gap for brick-and-mortar brands ready for operational scale.",
    stats: "15+ Years Experience",
    focus: ["Inventory Sync", "Store-as-Hub", "BOPIS Implementation"]
  },
  {
    id: "03",
    slug: "social-commerce",
    title: "Social Commerce",
    icon: <Smartphone className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/5077067/pexels-photo-5077067.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Optimizing the path to purchase within social feeds (TikTok, Instagram Shop) through integrated data stacks.",
    stats: "Mobile-First Infrastructure",
    focus: ["Creator Integrations", "Feed-to-Checkout", "Live Selling Ops"]
  },
  {
    id: "04",
    slug: "supply-chain",
    title: "Supply Chain & Logistics",
    icon: <Truck className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "The invisible foundation of every great brand-restructuring supply chains for profitability and resilience.",
    stats: "40% Higher Margin Potential",
    focus: ["Supplier Discovery", "Landed Cost Analysis", "Q.C. Management"]
  },
  {
    id: "05",
    slug: "media-publications",
    title: "Media & Publications",
    icon: <Newspaper className="w-8 h-8" />,
    image: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=800",
    desc: "Harnessing content as an asset-building owned audiences that convert into transactional outcomes.",
    stats: "Authority-First Growth",
    focus: ["Editorial Operations", "Newsletter Scale", "Brand IP Support"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Industries() {
  return (
    <>
      <Head>
        <title>Industries | T-QUATRO LLC</title>
        <meta name="description" content="T-QUATRO focuses on the sectors where operations, data, and digital strategy have the most immediate impact-from DTC to Supply Chain & Logistics." />
      </Head>

      <Navbar />

      <main className="bg-[#010b2b] min-h-screen">
        
        {/* Editorial Sub-Hero */}
        <section className="relative pt-48 pb-32 overflow-hidden">
           {/* Subtle Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#cc4e00_1px,transparent_0)] bg-[size:40px_40px]" />
          
          <Container>
            <div className="relative z-10 flex flex-col space-y-12">
               <motion.div 
                 initial={{ opacity: 0, scaleX: 0 }}
                 animate={{ opacity: 0.3, scaleX: 1 }}
                 transition={{ duration: 1 }}
                 className="h-px w-32 bg-[#cc4e00] origin-left" 
               />
               
               <div className="flex flex-col -space-y-4 md:-space-y-8">
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[clamp(3.5rem,10vw,10rem)] font-black uppercase tracking-tighter text-white leading-[0.9]"
                  >
                    Where We <span className="text-[#cc4e00]">Focus.</span>
                  </motion.h1>
               </div>

               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6, duration: 1 }}
                 className="max-w-2xl"
               >
                 <p className="text-white/40 text-xl md:text-2xl font-light leading-relaxed">
                   We don&apos;t try to be everything to everyone. We specialize in the sectors where commerce meets deep operational complexity.
                 </p>
               </motion.div>
            </div>
          </Container>
        </section>

        {/* Industry Sector List - Horizontal Interaction */}
        <section className="pb-48">
          <Container>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              {industrySectors.map((industry) => (
                <motion.div 
                  key={industry.id}
                  variants={itemVariants}
                  className="group relative border-t border-white/5 py-16 transition-all duration-700 hover:bg-white/[0.02]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10 p-4">
                     {/* Index & Icon */}
                     <div className="lg:col-span-1 flex flex-col items-start space-y-6">
                        <span className="text-[10px] font-black tracking-[0.4em] text-[#cc4e00]">0{industry.id}</span>
                        <div className="text-white/20 group-hover:text-[#cc4e00] transition-colors duration-500">
                           {industry.icon}
                        </div>
                     </div>

                     {/* Main Info */}
                     <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                           <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                              {industry.title}
                           </h2>
                           <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                              {industry.desc}
                           </p>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                           <span className="text-[#cc4e00] text-xs font-black uppercase tracking-[0.2em]">Primary Metric</span>
                           <span className="text-white font-black text-2xl uppercase tracking-tighter opacity-80">{industry.stats}</span>
                        </div>
                     </div>

                     {/* Core Focus Areas */}
                     <div className="lg:col-span-3 lg:pt-2">
                        <ul className="flex flex-col space-y-4">
                           <li className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Core Competencies</li>
                           {industry.focus.map((item, i) => (
                             <li key={i} className="flex items-center space-x-4">
                               <div className="h-px w-4 bg-[#cc4e00] group-hover:w-8 transition-all duration-500" />
                               <span className="text-white/40 text-sm font-black uppercase tracking-widest group-hover:text-white/80 transition-colors">{item}</span>
                             </li>
                           ))}
                        </ul>
                     </div>

                     {/* Image Reveal Area */}
                     <div className="lg:col-span-3 relative h-64 lg:h-80 overflow-hidden transform lg:translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:translate-x-0">
                        <Image 
                          src={industry.image} 
                          alt={industry.title} 
                          fill 
                          priority
                          className="object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                        />
                        {/* Orange Overlay Reveal */}
                        <div className="absolute inset-0 bg-[#cc4e00]/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-1000" />
                     </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Closing Border */}
              <div className="border-t border-white/5 w-full" />
            </motion.div>
          </Container>
        </section>

        {/* Dynamic Consultation CTA */}
        <section className="py-48 bg-[#cc4e00] relative overflow-hidden">
           {/* Moving Pattern Watermark */}
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
             className="absolute inset-0 whitespace-nowrap opacity-10 pointer-events-none flex items-center"
           >
             <span className="text-[25rem] font-black text-white uppercase italic leading-none mr-32 select-none">Impact Focus Growth Strategy</span>
             <span className="text-[25rem] font-black text-white uppercase italic leading-none mr-32 select-none">Impact Focus Growth Strategy</span>
           </motion.div>

           <Container>
              <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                 <h2 className="text-7xl md:text-[9rem] font-black uppercase tracking-tighter text-white leading-none">
                    READY TO <br />DOMINATE?
                 </h2>
                 <p className="text-white/80 text-2xl font-light max-w-2xl leading-relaxed">
                   More than just understanding your space-we implement the data-led systems required to win in it.
                 </p>
                 
                 <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
                    <Link href="/contact">
                       <motion.div 
                         whileHover={{ scale: 1.05 }}
                         className="px-16 py-8 bg-[#010b2b] text-white font-black uppercase tracking-[0.2em] text-sm flex items-center gap-6 group"
                       >
                          Schedule Assessment
                          <ArrowUpRight className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                       </motion.div>
                    </Link>
                    <Link href="/services">
                       <div className="flex items-center space-x-4 group cursor-pointer">
                          <span className="text-white font-black uppercase tracking-[0.2em] text-sm group-hover:mr-4 transition-all">Explore Services</span>
                          <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white" />
                       </div>
                    </Link>
                 </div>
              </div>
           </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
