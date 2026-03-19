import Head from "next/head";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Check } from "lucide-react";

const detailedServices = [
  { id: '01', identifier: 'ecommerce-brokerage', title: 'E-Commerce Brokerage', desc: 'Strategic positioning and channel management to expand your reach.', bullets: ['Marketplace strategy (Amazon, Walmart, eBay)', 'Account health & compliance', 'Platform expansion planning', 'Brand registry management'] },
  { id: '02', identifier: 'marketplace-integrations', title: 'Marketplace Integrations', desc: 'Unified infrastructure for multi-channel commerce.', bullets: ['Inventory & order synchronization', 'API & middleware implementation', 'ERP/IMS connectivity', 'Data health & mapping'] },
  { id: '03', identifier: 'product-sourcing', title: 'Product Sourcing', desc: 'Building resilient and profitable supply chains.', bullets: ['Supplier discovery & vetting', 'Quality control frameworks', 'Logistics & landed cost optimization', 'Contract negotiation support'] },
  { id: '04', identifier: 'product-development', title: 'Product Development', desc: 'From concept validation to profitable launch.', bullets: ['Market research & competitive analysis', 'Sourcing-aligned design', 'Packaging & branding strategy', 'GTM (Go-To-Market) planning'] },
  { id: '05', identifier: 'business-turnaround', title: 'Business Turnaround', desc: 'Operational restoration when things aren\'t working.', bullets: ['Root cause diagnosis', 'Cash flow & margin stabilization', 'Operational restructuring', 'Performance recovery roadmap'] },
  { id: '06', identifier: 'bookkeeping', title: 'Bookkeeping', desc: 'Clean data for confident decision-making.', bullets: ['Monthly reconciliation', 'P&L and Balance Sheet reporting', 'Accounts Payable/Receivable', 'Decision-ready financial snapshots'] },
  { id: '07', identifier: 'seo-services', title: 'SEO Services', desc: 'Sustainable visibility that you own.', bullets: ['Technical SEO audits', 'On-page & content optimization', 'Authority building (backlink strategy)', 'E-commerce specific keyword growth'] },
  { id: '08', identifier: 'media-publications', title: 'Media & Publications', desc: 'Authority-driven content strategy.', bullets: ['Editorial calendar development', 'Brand-owned media channels', 'Newsletter & audience growth', 'Thought leadership positioning'] },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | T-QUATRO LLC</title>
      </Head>

      <Navbar />

      <main className="flex flex-col min-h-screen pt-24">
        <HeroSection
          eyebrow="Our Expertise"
          titleLineOne="Modular solutions."
          titleLineTwo="Compound results."
          subtitle="Whether you need a single specialized service or a full-stack operational overhaul, we deliver the expertise and execution to move your business forward."
          imageUrl="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          align="center"
        />

        <Section background="default" spacing="lg">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {detailedServices.map((s) => (
                <div key={s.id} id={s.identifier} className="flex flex-col p-10 bg-secondary/5 border border-secondary/10 hover:border-accent hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-black text-accent">{s.id}</span>
                    <Heading level={4}>{s.title}</Heading>
                  </div>
                  <Text variant="lead" className="mb-8">{s.desc}</Text>
                  
                  <ul className="space-y-4 mt-auto">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-secondary/80 font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <CtaSection
          title="Not sure where to start?"
          subtitle="Most of our clients start with a specific problem and expand from there. Let's look at your current situation and see which lever will move the needle fastest."
          primaryCta={{ label: "Get an Assessment", href: "/contact" }}
          secondaryCta={{ label: "See Industry Expertise", href: "/industries" }}
        />
      </main>

      <Footer />
    </>
  );
}
