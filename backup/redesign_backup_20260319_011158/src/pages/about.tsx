import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FourTsSection } from "@/components/sections/FourTsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | T-QUATRO LLC</title>
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen pt-24">
        <HeroSection
          titleLineOne="Operators first."
          titleLineTwo="Consultants second."
          subtitle="We didn't learn business in a classroom or a boardroom. We learned it on the floor, in the warehouse, and behind the dashboard. T-QUATRO LLC is an operationally-led consultancy for brands that need more than just advice — they need a partner who knows how to execute."
          imageUrl="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <FourTsSection />

        <Section background="default" spacing="xl">
          <Container>
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3">
                <span className="text-secondary/60 font-bold tracking-widest uppercase text-sm block mb-4">Our Story</span>
                <Heading level={2}>Built for the gap.</Heading>
              </div>
              <div className="md:w-2/3 flex flex-col space-y-6 pt-2">
                <Text variant="lead" className="text-accent font-semibold">
                  T-QUATRO LLC was founded to close the gap between high-level strategy and day-to-day execution.
                </Text>
                <Text>
                  In the digital marketplace, those two things can&apos;t be separated. You can&apos;t have a growth strategy that doesn&apos;t account for supply chain reality, and you can&apos;t have operations that don&apos;t support your brand promise.
                </Text>
                <Text>
                  We bring those worlds together. Based in Dallas, TX, we serve a national roster of clients who value expertise that has been tested in the real world.
                </Text>
              </div>
            </div>
          </Container>
        </Section>

        <CtaSection
          title="Find out if we're what you're looking for."
          subtitle="No high-pressure sales. Just an honest conversation about your business and where you want to take it."
          primaryCta={{ label: "Start the Conversation", href: "/contact" }}
          secondaryCta={{ label: "View Our Services", href: "/services" }}
        />
      </main>

      <Footer />
    </>
  );
}
