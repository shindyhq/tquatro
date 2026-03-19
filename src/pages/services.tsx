import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Check, Zap, Target, BarChart3, Globe, Package, RefreshCw, BookOpen, Search } from "lucide-react";
import Link from "next/link";

const detailedServices = [
  { 
    id: '01', 
    identifier: 'ecommerce-brokerage', 
    title: 'E-Commerce Brokerage', 
    icon: <Globe className="w-6 h-6" />,
    desc: 'Strategic positioning and channel management to expand your reach.', 
    bullets: ['Marketplace strategy (Amazon, Walmart, eBay)', 'Account health & compliance', 'Platform expansion planning', 'Brand registry management'] 
  },
  { 
    id: '02', 
    identifier: 'marketplace-integrations', 
    title: 'Marketplace Integrations', 
    icon: <Zap className="w-6 h-6" />,
    desc: 'Unified infrastructure for multi-channel commerce.', 
    bullets: ['Inventory & order synchronization', 'API & middleware implementation', 'ERP/IMS connectivity', 'Data health & mapping'] 
  },
  { 
    id: '03', 
    identifier: 'product-sourcing', 
    title: 'Product Sourcing', 
    icon: <Package className="w-6 h-6" />,
    desc: 'Building resilient and profitable supply chains.', 
    bullets: ['Supplier discovery & vetting', 'Quality control frameworks', 'Logistics & landed cost optimization', 'Contract negotiation support'] 
  },
  { 
    id: '04', 
    identifier: 'product-development', 
    title: 'Product Development', 
    icon: <Target className="w-6 h-6" />,
    desc: 'From concept validation to profitable launch.', 
    bullets: ['Market research & competitive analysis', 'Sourcing-aligned design', 'Packaging & branding strategy', 'GTM (Go-To-Market) planning'] 
  },
  { 
    id: '05', 
    identifier: 'business-turnaround', 
    title: 'Business Turnaround', 
    icon: <RefreshCw className="w-6 h-6" />,
    desc: 'Operational restoration when things aren\'t working.', 
    bullets: ['Root cause diagnosis', 'Cash flow & margin stabilization', 'Operational restructuring', 'Performance recovery roadmap'] 
  },
  { 
    id: '06', 
    identifier: 'bookkeeping', 
    title: 'Bookkeeping', 
    icon: <BarChart3 className="w-6 h-6" />,
    desc: 'Clean data for confident decision-making.', 
    bullets: ['Monthly reconciliation', 'P&L and Balance Sheet reporting', 'Accounts Payable/Receivable', 'Decision-ready financial snapshots'] 
  },
  { 
    id: '07', 
    identifier: 'seo-services', 
    title: 'SEO Services', 
    icon: <Search className="w-6 h-6" />,
    desc: 'Sustainable visibility that you own.', 
    bullets: ['Technical SEO audits', 'On-page & content optimization', 'Authority building (backlink strategy)', 'E-commerce specific keyword growth'] 
  },
  { 
    id: '08', 
    identifier: 'media-publications', 
    title: 'Media & Publications', 
    icon: <BookOpen className="w-6 h-6" />,
    desc: 'Authority-driven content strategy.', 
    bullets: ['Editorial calendar development', 'Brand-owned media channels', 'Newsletter & audience growth', 'Thought leadership positioning'] 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
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

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | T-QUATRO LLC</title>
        <meta name="description" content="Explore T-QUATRO's modular e-commerce services, from marketplace integrations to product development and business turnaround." />
      </Head>

      <Navbar />

      <main className="bg-[#010b2b] min-h-screen">
        
        {/* Editorial Sub-Hero */}
        <section className="relative pt-48 pb-32 overflow-hidden">
          {/* Background Watermark */}
          <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
             <span className="text-[25rem] font-black uppercase leading-none text-white">Expertise</span>
          </div>

          <Container>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 flex flex-col space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center space-x-4"
                >
                  <div className="h-px w-12 bg-[#cc4e00]" />
                  <span className="text-[#cc4e00] font-black uppercase tracking-[0.4em] text-xs">Operational Infrastructure</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.9] tracking-tighter text-white"
                >
                  Modular <span className="text-[#cc4e00]">Solutions.</span><br />
                  Compound Results.
                </motion.h1>
              </div>

              <div className="lg:col-span-4 lg:pb-6">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-white/50 text-xl font-light leading-relaxed max-w-sm"
                >
                  Whether you need a single specialized service or a full-stack overhaul, we deliver the execution to move your brand forward.
                </motion.p>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Master Grid */}
        <section className="pb-48 relative">
          <Container>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/5 border border-white/5"
            >
              {detailedServices.map((service) => (
                <motion.div 
                  key={service.id}
                  id={service.identifier}
                  variants={itemVariants}
                  className="group relative bg-[#010b2b] p-12 flex flex-col min-h-[450px] transition-all duration-700 hover:bg-[#010b2b]/50 overflow-hidden"
                >
                  {/* Hover Background Patterns */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#cc4e00_1px,transparent_0)] bg-[size:24px_24px]" />

                  {/* Top-Right Index */}
                  <div className="absolute top-12 right-12">
                     <span className="text-[#cc4e00] font-black text-sm tracking-widest opacity-40">0{service.id}</span>
                  </div>

                  <div className="flex flex-col space-y-8 flex-grow">
                    {/* Icon Block */}
                    <div className="w-14 h-14 bg-white/5 flex items-center justify-center text-[#cc4e00] border-t border-l border-white/10 group-hover:bg-[#cc4e00] group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight pr-8">
                        {service.title}
                      </h3>
                      <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">
                        {service.desc}
                      </p>
                    </div>

                    <div className="h-px w-full bg-white/5" />

                    <ul className="space-y-3 pt-2">
                       {service.bullets.map((bullet, idx) => (
                         <li key={idx} className="flex items-center gap-3">
                            <div className="w-1 h-1 bg-[#cc4e00] group-hover:w-4 transition-all duration-500" />
                            <span className="text-white/40 text-[11px] font-black uppercase tracking-[0.1em] group-hover:text-white/70 transition-colors">
                              {bullet}
                            </span>
                         </li>
                       ))}
                    </ul>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     <ArrowUpRight className="text-[#cc4e00] w-6 h-6" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Dynamic CTA Strip */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: 'linear-gradient(90deg, #cc4e00 0%, transparent 100%)', maskImage: 'radial-gradient(black, transparent)' }} />
           
           <Container>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                 <div className="max-w-2xl space-y-6">
                    <h2 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none">
                       READY FOR <span className="text-[#cc4e00]">OPERATIONAL</span><br />STABILITY?
                    </h2>
                    <p className="text-white/40 text-xl font-light">
                       Most clients start with a specific problem. We deliver the lever that moves the needle fastest.
                    </p>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-6">
                    <Link href="/contact">
                       <motion.div 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-12 py-6 bg-[#cc4e00] text-white font-black uppercase tracking-[0.2em] text-sm flex items-center group"
                       >
                          Schedule Assessment
                          <ArrowUpRight className="ml-4 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                       </motion.div>
                    </Link>
                    <Link href="/about">
                       <div className="px-12 py-6 border border-white/10 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-colors">
                          Our Philosophy
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
