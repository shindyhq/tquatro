import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog & Insights | T-QUATRO LLC</title>
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen pt-20">
        <HeroSection
          eyebrow="Insights & Media"
          titleLineOne="Thoughts on"
          titleLineTwo="Commerce."
          subtitle="A collection of our latest insights, strategies, and observations from the front lines of digital retail and operations."
        />
        
        <div className="py-32 text-center text-secondary/50 font-bold uppercase tracking-widest">
          Coming Soon
        </div>
      </main>

      <Footer />
    </>
  );
}
