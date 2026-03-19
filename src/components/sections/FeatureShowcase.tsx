import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const features = [
  {
    tag: 'Multi-Channel Commerce',
    headline: 'One strategy.\nEvery channel that matters.',
    body:
      "Amazon, Shopify, eBay, TikTok Shop, social — the landscape is fragmented, but your operations don't have to be. We build the infrastructure that ties your marketplace presence together and keeps everything moving in one direction.",
    points: [
      'Marketplace integrations & real-time syncing',
      'Multi-channel inventory management',
      'Platform selection, setup & optimization',
      'E-commerce brokerage & partnerships',
    ],
    cta: { label: 'Explore Marketplace Services', href: '/services' },
    image:
      'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900',
    flip: false,
  },
  {
    tag: 'Growth & Visibility',
    headline: 'Visibility that earns\nits place. Not rented.',
    body:
      "Paid ads stop when the budget does. We build organic search strategies and content frameworks that compound over time — turning your brand into a trusted resource your customers actively seek out.",
    points: [
      'Technical & on-page SEO strategy',
      'Content strategy & editorial planning',
      'Brand authority through media & publications',
      'Long-term organic traffic compounding',
    ],
    cta: { label: 'See SEO & Media Services', href: '/services' },
    image:
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=900',
    flip: true,
  },
  {
    tag: 'Operations & Financials',
    headline: 'Clarity beneath\nthe surface.',
    body:
      "Most business problems trace back to two things: unclear finances and broken operations. We clean both up — building the financial visibility and operational structure that lets you make faster, smarter decisions.",
    points: [
      'Clean, current, decision-ready bookkeeping',
      'Supply chain & product sourcing optimization',
      'Business turnaround & operational restructuring',
      'Product development from concept to launch',
    ],
    cta: { label: 'Explore Operational Services', href: '/services' },
    image:
      'https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=900',
    flip: false,
  },
];

export const FeatureShowcase = () => {
  return (
    <section className="bg-background border-t border-secondary/10">
      {features.map((feature, i) => (
        <div
          key={i}
          className={`py-24 md:py-32 border-b border-secondary/10 ${
            i % 2 === 1 ? 'bg-secondary/[0.025]' : ''
          }`}
        >
          <Container>
            <div
              className={`flex flex-col ${
                feature.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } gap-16 lg:gap-24 items-center`}
            >
              {/* Text Side */}
              <div className="flex-1 flex flex-col space-y-8">
                <span className="text-accent font-bold tracking-widest uppercase text-xs">
                  {feature.tag}
                </span>

                <h2 className="text-4xl md:text-5xl font-black uppercase leading-[1.05] whitespace-pre-line">
                  {feature.headline}
                </h2>

                <p className="text-lg text-foreground/65 leading-relaxed max-w-lg">
                  {feature.body}
                </p>

                <ul className="space-y-3">
                  {feature.points.map((pt, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-sm font-semibold text-foreground/80"
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link href={feature.cta.href}>
                  <Button variant="outline" className="w-fit">
                    {feature.cta.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Visual Side */}
              <div className="flex-1 relative w-full">
                <div className="absolute -inset-2 border-2 border-accent/25 translate-x-4 translate-y-4 hidden md:block pointer-events-none" />
                <img
                  src={feature.image}
                  alt={feature.tag}
                  className="w-full h-[400px] md:h-[480px] object-cover relative z-10 grayscale-[10%] contrast-105"
                />
              </div>
            </div>
          </Container>
        </div>
      ))}
    </section>
  );
};
