import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, ShieldCheck, Zap, Target, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const philosophyItems = [
  {
    id: "01",
    title: "Execution > Advice",
    icon: <Zap className="w-6 h-6" />,
    desc: "Strategy is useless without the ability to implement. We live in the details of the execution layer."
  },
  {
    id: "02",
    title: "Data Integrity",
    icon: <ShieldCheck className="w-6 h-6" />,
    desc: "Clean data is the foundation of every confident decision. We prioritize visibility over assumptions."
  },
  {
    id: "03",
    title: "Operational Speed",
    icon: <Target className="w-6 h-6" />,
    desc: "The digital marketplace moves faster than most boards. We build systems for rapid response."
  },
  {
    id: "04",
    title: "Partnership First",
    icon: <Users className="w-6 h-6" />,
    desc: "We aren't a vendor. We are an extension of your operational staff, focused on long-term stability."
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | T-QUATRO LLC</title>
        <meta name="description" content="T-QUATRO is an operationally-led consultancy. We bridge the gap between high-level strategy and day-to-day execution." />
      </Head>

      <Navbar />

      <main className="bg-[#010b2b] min-h-screen">
        
        {/* Editorial Narrative Hero */}
        <section className="relative pt-64 pb-48 overflow-hidden">
          {/* Side Watermark Decoration */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none rotate-90">
             <span className="text-[20rem] font-black uppercase tracking-tighter text-white">Operators</span>
          </div>

          <Container>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-12">
                 <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="flex items-center space-x-6 mb-12"
                 >
                    <div className="h-px w-20 bg-[#cc4e00]" />
                    <span className="text-[#cc4e00] font-black uppercase tracking-[0.5em] text-xs">Our Professional Identity</span>
                 </motion.div>
              </div>

              <div className="lg:col-span-8 space-y-12">
                 <motion.h1 
                   initial={{ opacity: 0, y: 50 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                   className="text-[clamp(3.5rem,10vw,12rem)] font-black uppercase leading-[0.85] tracking-tighter text-white"
                 >
                   Operators <span className="text-[#cc4e00]">First.</span><br />
                   Consultants Second.
                 </motion.h1>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-end pb-8">
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 0.8, duration: 1 }}
                   className="max-w-sm pl-8 border-l border-[#cc4e00]/20"
                 >
                   <p className="text-white/40 text-lg font-light leading-relaxed">
                     We didn&apos;t learn business in a classroom. We learned it on the floor, in the warehouse, and behind the dashboard.
                   </p>
                 </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Narrative Block - The Story */}
        <section className="pb-48 relative">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
               {/* Fixed-ish Image Column */}
               <div className="lg:col-span-5 relative h-[600px] overflow-hidden group border border-white/5">
                  <Image 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="T-QUATRO Operational Focus"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-[#010b2b] to-transparent">
                     <span className="text-white font-black uppercase tracking-[0.3em] text-xs opacity-50 block mb-2">Based in Dallas, TX</span>
                     <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Serving National Roster</h3>
                  </div>
               </div>

               {/* Story Content */}
               <div className="lg:col-span-7 flex flex-col space-y-16 lg:pt-24">
                  <div className="space-y-8">
                     <h2 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none">
                        BUILT FOR <br />THE <span className="text-[#cc4e00]">GAP.</span>
                     </h2>
                     <div className="space-y-6 max-w-xl">
                        <p className="text-white font-black text-2xl uppercase tracking-tight leading-tight">
                           T-QUATRO was founded to bridge the divide between high-level strategy and day-to-day execution.
                        </p>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                          In the digital marketplace, these two systems are inseparable. You cannot have a growth plan that ignores supply chain reality, and you cannot have operations that don&apos;t support the brand promise.
                        </p>
                        <p className="text-white/40 text-lg font-light leading-relaxed">
                          We bring those worlds together. Our background is built on real-world testing—ensuring your infrastructure is as resilient as your vision.
                        </p>
                     </div>
                  </div>

                  {/* Philosophy Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 overflow-hidden">
                     { philosophyItems.map((item) => (
                       <div key={item.id} className="p-10 bg-[#010b2b] space-y-6 group hover:bg-white/[0.02] transition-colors duration-500">
                          <div className="text-[#cc4e00] opacity-40 group-hover:opacity-100 transition-opacity">
                             {item.icon}
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-white font-black uppercase tracking-widest text-sm">{item.title}</h4>
                             <p className="text-white/40 text-xs font-light leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </Container>
        </section>

        {/* Closing Identity Strip */}
        <section className="py-48 border-t border-white/5 relative overflow-hidden bg-[#010b2b]">
           {/* Background Cross Pattern */}
           <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
           />
           
           <Container>
              <div className="flex flex-col items-center text-center space-y-12">
                 <div className="h-20 w-px bg-[#cc4e00] mb-8" />
                 <h2 className="text-4xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none max-w-4xl">
                    WE DON&apos;T SELL ADVICE. <br />WE IMPLEMENT <span className="text-[#cc4e00]">SOLUTIONS.</span>
                 </h2>
                 <Link href="/contact">
                    <motion.div 
                       whileHover={{ scale: 1.05 }}
                       className="group flex items-center bg-[#cc4e00] text-white px-16 py-8 font-black uppercase text-sm tracking-[0.3em] overflow-hidden relative cursor-pointer"
                    >
                       <span className="relative z-10">Start The Conversation</span>
                       <motion.div 
                          className="absolute inset-0 bg-white"
                          initial={{ x: '-101%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                       />
                       <style jsx>{`
                         .group:hover span { color: #010b2b; }
                       `}</style>
                       <ArrowUpRight className="ml-4 w-5 h-5 relative z-10 group-hover:text-[#010b2b] transition-colors" />
                    </motion.div>
                 </Link>
              </div>
           </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
