import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | T-QUATRO LLC</title>
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen pt-24">
        <HeroSection
          titleLineOne="Let's get to work."
          subtitle="Whether you have a specific project in mind or just want to explore how we might help your business grow, we're straightforward to talk to."
          imageUrl="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />

        <Section background="default" spacing="lg">
          <Container>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Contact Info Col */}
              <div className="lg:w-1/3 flex flex-col space-y-12">
                <div>
                  <span className="text-secondary/50 font-bold tracking-widest uppercase text-xs block mb-4">The Promise</span>
                  <Text className="text-secondary/90 italic border-l-2 border-accent pl-4">
                    When you reach out, you won&apos;t get a scripted sales pitch. You&apos;ll get an honest response from a member of our team who understands the challenges you&apos;re facing. If we can help, we&apos;ll tell you how. If we can&apos;t, we&apos;ll tell you that too.
                  </Text>
                </div>

                <div className="flex flex-col space-y-8">
                  <div>
                    <Heading level={6} className="text-accent mb-2">📍 Headquarters</Heading>
                    <Text className="font-semibold">T-QUATRO LLC<br/>Dallas, TX</Text>
                  </div>
                  <div>
                    <Heading level={6} className="text-accent mb-2">📧 Email</Heading>
                    <a href="mailto:hello@tquatro.com" className="text-primary font-semibold hover:text-accent transition-colors underline underline-offset-4">hello@tquatro.com</a>
                  </div>
                </div>
              </div>

              {/* Form Col */}
              <div className="lg:w-2/3 bg-secondary/5 p-8 md:p-12 border border-secondary/10">
                <Heading level={4} className="mb-8">Send an Inquiry</Heading>
                
                <form className="flex flex-col space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-secondary/70">Name</label>
                      <input type="text" id="name" className="p-4 bg-white border border-secondary/20 focus:border-accent focus:outline-none transition-colors rounded-none" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-secondary/70">Email Address</label>
                      <input type="email" id="email" className="p-4 bg-white border border-secondary/20 focus:border-accent focus:outline-none transition-colors rounded-none" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="text-sm font-bold uppercase tracking-wider text-secondary/70">Company</label>
                      <input type="text" id="company" className="p-4 bg-white border border-secondary/20 focus:border-accent focus:outline-none transition-colors rounded-none" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="website" className="text-sm font-bold uppercase tracking-wider text-secondary/70">Website (Optional)</label>
                      <input type="url" id="website" className="p-4 bg-white border border-secondary/20 focus:border-accent focus:outline-none transition-colors rounded-none" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-secondary/70">What&apos;s on your mind?</label>
                    <textarea id="message" rows={5} className="p-4 bg-white border border-secondary/20 focus:border-accent focus:outline-none transition-colors resize-none rounded-none" required></textarea>
                  </div>

                  <Button type="submit" size="lg" className="self-start mt-4">
                    Submit Inquiry →
                  </Button>
                </form>
              </div>

            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
