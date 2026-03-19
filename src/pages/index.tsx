import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SliderHeroSection } from "@/components/sections/SliderHeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { FourTsSection } from "@/components/sections/FourTsSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IndustriesOverview } from "@/components/sections/IndustriesOverview";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { SocialProof } from "@/components/sections/SocialProof";
import { CtaSection } from "@/components/sections/CtaSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>T-QUATRO LLC | Online Retail Consultancy</title>
        <meta name="description" content="T-QUATRO LLC helps businesses compete, grow, and win in the digital marketplace — through strategy, systems, and hands-on execution across every channel that matters." />
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen has-fixed-navbar">
        <SliderHeroSection />

        <TrustBar />

        <StatsSection />

        {/* Intro / Positioning Section */}
        <Section background="default" className="border-b border-secondary/10">
          <Container>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start py-12 md:py-20 lg:py-32">
              {/* Left Column: Heading & Tagline */}
              <div className="lg:w-[40%] flex flex-col space-y-8 lg:sticky lg:top-32">
                <div className="space-y-4">
                  <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs block opacity-90">
                    Who We Are
                  </span>
                  <Heading level={2} className="text-secondary leading-[0.9] lg:text-7xl xl:text-8xl">
                    We&apos;re not your average consultancy.
                  </Heading>
                </div>
                
                <div className="flex flex-col space-y-6 max-w-sm">
                  <div className="h-[2px] w-16 bg-accent/30" />
                  <Text variant="lead" className="text-accent font-medium text-2xl md:text-3xl leading-tight">
                    Most firms hand you a report and move on. <span className="text-secondary italic">We stay in the room.</span>
                  </Text>
                </div>
              </div>
              
              {/* Right Column: Content & Beliefs */}
              <div className="lg:w-[60%] flex flex-col space-y-16 lg:pt-4">
                <div className="space-y-8 max-w-2xl">
                  <Text variant="lead" className="text-foreground/90 leading-relaxed">
                    T-QUATRO LLC was built by operators who understand what it actually takes to grow a business in today&apos;s digital landscape &mdash; not in theory, but in practice. 
                  </Text>
                  <Text className="text-foreground/80">
                    From Amazon storefronts to supply chain logistics, from bookkeeping to SEO, we bring the expertise and execution that most consultancies only promise. We work with brands at every stage &mdash; early-scale operators ready to expand, and established businesses looking to sharpen their edge.
                  </Text>
                </div>
                
                <div className="relative bg-secondary/[0.02] p-8 md:p-16 border-l-[1px] border-secondary/10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.03] rounded-full blur-[100px] -mr-32 -mt-32" />
                  
                  <div className="relative z-10 space-y-12">
                    <div className="space-y-2">
                      <Heading level={4} className="text-secondary text-sm tracking-[0.2em] font-black opacity-40">
                        OUR CORE PHILOSOPHY
                      </Heading>
                      <div className="h-px w-full bg-secondary/5" />
                    </div>
                    
                    <ul className="grid gap-12">
                      {[
                        { title: "Execution First", text: "Strategy without execution is just a document." },
                        { title: "Directed Intel", text: "Data without direction is just noise." },
                        { title: "Stable Structure", text: "Growth without structure doesn't last." }
                      ].map((belief, idx) => (
                        <li key={idx} className="flex gap-8 group">
                          <span className="text-accent/20 font-black text-4xl md:text-6xl leading-none group-hover:text-accent/40 transition-colors duration-500">
                            0{idx + 1}
                          </span>
                          <div className="space-y-2 pt-1">
                            <h4 className="font-bold text-secondary uppercase tracking-widest text-xs">
                              {belief.title}
                            </h4>
                            <Text as="p" className="text-foreground/90 italic leading-snug">
                              &ldquo;{belief.text}&rdquo;
                            </Text>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-8 border-t border-secondary/5">
                      <p className="text-accent font-black uppercase tracking-[0.25em] text-xs">
                        That&apos;s the gap we close.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <FourTsSection />
        
        <FeatureShowcase />

        <ServicesOverview />

        <IndustriesOverview />
        
        <div id="how-we-work">
          <HowWeWork />
        </div>
        
        <SocialProof />

        <CtaSection
          title="Ready to move?"
          subtitle="Whether you're launching something new, scaling what's already working, or working through a challenge — we're straightforward to talk to, and there's no pressure. Tell us where you are and where you're trying to go. We'll tell you honestly if and how we can help."
          primaryCta={{ label: "Start the Conversation", href: "/contact" }}
          secondaryCta={{ label: "Explore Services", href: "/services" }}
        />
      </main>

      <Footer />
    </>
  );
}
