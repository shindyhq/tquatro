import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesOverview } from "@/components/sections/IndustriesOverview";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Industries() {
  return (
    <>
      <Head>
        <title>Industries | T-QUATRO LLC</title>
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen pt-24">
        <HeroSection
          eyebrow="Where We Focus"
          titleLineOne="Deep expertise where"
          titleLineTwo="commerce meets digital."
          subtitle="We don't try to be everything to everyone. We focus on the sectors where our background in operations, data, and digital strategy can have the most immediate impact."
          imageUrl="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <IndustriesOverview />

        <CtaSection
          title="Do we understand your space?"
          subtitle="Chances are, we do. More importantly, we're quick learners who value data over assumptions. Let's talk about the specific challenges in your industry."
          primaryCta={{ label: "Start the Conversation", href: "/contact" }}
          secondaryCta={{ label: "View All Services", href: "/services" }}
        />
      </main>

      <Footer />
    </>
  );
}
