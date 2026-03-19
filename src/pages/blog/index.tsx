import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Calendar, User, Tag, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "The Strategy-Execution Gap: Why Most Consultancy Advice Fails",
    excerpt: "Success in the digital marketplace doesn't come from 50-page slide decks. It comes from the ability to turn high-level vision into warehouse-level reality.",
    category: "Strategy",
    author: "T-QUATRO Editorial",
    date: "March 15, 2026",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "strategy-execution-gap"
  },
  {
    id: 2,
    title: "Omnichannel is Dead. Long Live Integrated Commerce.",
    excerpt: "The line between physical and digital storefronts has dissolved. If your supply chain doesn't reflect that, you're losing margin every single day.",
    category: "Operations",
    author: "T-QUATRO Editorial",
    date: "March 10, 2026",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "integrated-commerce-future"
  },
  {
    id: 3,
    title: "Supply Chain Resilience: More Than Just a Buzzword",
    excerpt: "Predictability is the new competitive advantage. How leading brands are restructuring their fulfillment to survive global marketplace volatility.",
    category: "Supply Chain",
    author: "T-QUATRO Editorial",
    date: "March 05, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "supply-chain-resilience"
  }
];

const categories = ["All", "Strategy", "Operations", "Supply Chain", "Media", "Digital"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Head>
        <title>Insights & Media | T-QUATRO LLC</title>
        <meta name="description" content="Front-line observations, strategic insights, and operational wisdom for the modern digital marketplace." />
      </Head>

      <Navbar />

      <main className="bg-[#010b2b] min-h-screen pt-48 pb-32">
        <Container>
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-6 mb-8"
              >
                <div className="h-px w-20 bg-[#cc4e00]" />
                <span className="text-[#cc4e00] font-black uppercase tracking-[0.5em] text-xs">Knowledge & Insights</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-[0.9] tracking-tighter text-white"
              >
                Front-line <br />
                <span className="text-[#cc4e00]">observations.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-white/40 text-xl font-light leading-relaxed max-w-2xl mt-12"
              >
                We don&apos;t write for the boardroom. We write for those responsible for growth, operations, and the bottom line. No fluff - just strategies tested in the global marketplace.
              </motion.p>
            </div>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-[#cc4e00] border-[#cc4e00] text-white' 
                  : 'bg-transparent border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group flex flex-col h-full bg-white/[0.02] border border-white/5 overflow-hidden hover:border-[#cc4e00]/30 transition-all duration-500"
              >
                {/* Image Container */}
                <Link href={`/blog/${post.slug}`} className="relative h-72 overflow-hidden block">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#cc4e00] text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow space-y-6">
                  <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-white/30">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-2 text-[#cc4e00]" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-2 text-[#cc4e00]" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-[#cc4e00] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-white/40 text-sm font-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 mt-auto">
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center space-x-4 text-[#cc4e00] group/link">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#cc4e00]/30 group-hover/link:border-[#cc4e00] transition-colors">Read Article</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter / CTA Section */}
          <div className="mt-48 py-24 px-12 md:px-24 bg-[#cc4e00] relative overflow-hidden group">
            {/* Background Texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
             />
             
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                      Insights delivered <br /><span className="opacity-50">without the noise.</span>
                   </h2>
                   <p className="text-white font-medium text-lg leading-relaxed max-w-md">
                      Practical observations from the front lines of digital commerce. Join 500+ operators who value signal over noise.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                   <input 
                     type="email" 
                     placeholder="Enter your email"
                     className="flex-grow bg-[#010b2b] text-white px-8 py-6 font-medium uppercase tracking-widest text-xs border border-transparent focus:border-white transition-all outline-none"
                   />
                   <button className="bg-white text-[#010b2b] px-12 py-6 font-black uppercase tracking-widest text-xs hover:bg-[#010b2b] hover:text-white transition-all duration-300">
                      Subscribe
                   </button>
                </div>
             </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
