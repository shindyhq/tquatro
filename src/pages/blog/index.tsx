import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Tag, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/wordpress";

// Master categories list to ensure UI presence even if data is missing
const MASTER_CATEGORIES = ["All", "Strategy", "Operations", "Supply Chain", "Media", "Digital"];

// Mock Data to keep the UI populated until WP is ready
const mockPosts = [
  {
    slug: "strategy-execution-gap",
    title: "The Strategy-Execution Gap: Why Most Consultancy Advice Fails",
    excerpt: "Success in the digital marketplace doesn't come from 50-page slide decks. It comes from the ability to turn high-level vision into warehouse-level reality.",
    featuredImage: { node: { sourceUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" } },
    categories: { nodes: [{ name: "Strategy" }] }
  },
  {
    slug: "integrated-commerce-future",
    title: "Omnichannel is Dead. Long Live Integrated Commerce.",
    excerpt: "The line between physical and digital storefronts has dissolved. If your supply chain doesn't reflect that, you're losing margin every single day.",
    featuredImage: { node: { sourceUrl: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800" } },
    categories: { nodes: [{ name: "Operations" }] }
  },
  {
    slug: "supply-chain-resilience",
    title: "Supply Chain Resilience: More Than Just a Buzzword",
    excerpt: "Predictability is the new competitive advantage. How leading brands are restructuring their fulfillment to survive global marketplace volatility.",
    featuredImage: { node: { sourceUrl: "https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=800" } },
    categories: { nodes: [{ name: "Supply Chain" }] }
  }
];

export async function getServerSideProps() {
  try {
    const posts = await getAllPosts();
    return {
      props: {
        posts: posts && posts.length > 0 ? posts : mockPosts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts, using mocks:", error);
    return {
      props: {
        posts: mockPosts,
      },
    };
  }
}

export default function Blog({ posts }: { posts: any[] }) {
  const [activeCategory, setActiveCategory] = React.useState("All");

  // Merge Master Category list with dynamic categories from WP posts
  const dynamicCategories = posts?.flatMap(post => post.categories.nodes.map((n: any) => n.name)) || [];
  const categories = [...new Set([...MASTER_CATEGORIES, ...dynamicCategories])];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter((post: any) => 
        post.categories.nodes.some((cat: any) => cat.name === activeCategory)
      );

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
            {categories.map((cat: any) => (
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
            {filteredPosts && filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group flex flex-col h-full bg-white/[0.02] border border-white/5 overflow-hidden hover:border-[#cc4e00]/30 transition-all duration-500"
                >
                  {/* Image Container */}
                  <Link href={`/blog/${post.slug}`} className="relative h-72 overflow-hidden block">
                    <Image 
                      src={post.featuredImage?.node?.sourceUrl || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"} 
                      alt={post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-[#cc4e00] text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                        {post.categories.nodes[0]?.name || "Uncategorized"}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-10 flex flex-col flex-grow space-y-6">
                    <div className="flex items-center space-x-6 text-[10px] font-black uppercase tracking-widest text-white/30">
                      <div className="flex items-center">
                        <Tag className="w-3 h-3 mr-2 text-[#cc4e00]" />
                        Knowledge Share
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-2 text-[#cc4e00]" />
                        Evergreen
                      </div>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-[#cc4e00] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <div 
                      className="text-white/40 text-sm font-light leading-relaxed line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    />

                    <div className="pt-6 mt-auto">
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center space-x-4 text-[#cc4e00] group/link">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] border-b border-[#cc4e00]/30 group-hover/link:border-[#cc4e00] transition-colors">Read Article</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10">
                <p className="text-white/40 font-light uppercase tracking-widest text-sm">No insights published yet.</p>
              </div>
            )}
          </div>

          {/* Newsletter / CTA Section */}
          <div className="mt-48 py-24 px-12 md:px-24 bg-[#cc4e00] relative overflow-hidden group">
             {/* Background Texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(45deg,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />
             
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
