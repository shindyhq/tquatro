import { Star } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';

const testimonials = [
  {
    quote:
      "Working with a team that actually understands ecommerce operations — not just the theory — made all the difference. They helped us streamline our marketplace presence and finally get our numbers in order.",
    author: 'E-commerce Brand Owner',
    location: 'Dallas, TX',
    rating: 5,
  },
  {
    quote:
      "Our SEO traffic had flatlined for two years. Within six months of working with T-QUATRO, we had our best organic quarter to date.",
    author: 'DTC Brand Founder',
    location: 'United States',
    rating: 5,
  },
  {
    quote:
      "They came in during a difficult period for our business and helped us see clearly where the problems were. The turnaround plan they built was practical, not pie-in-the-sky.",
    author: 'Retail Business Owner',
    location: 'Texas',
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < count ? 'fill-accent text-accent' : 'text-secondary/20'}`}
      />
    ))}
  </div>
);

export const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-accent font-bold tracking-widest uppercase text-sm">
            Why Businesses Choose T-QUATRO
          </span>
          <Heading level={2}>Trusted by Operators.</Heading>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground/60 uppercase tracking-widest">
              5.0 &mdash; from our clients
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-8 md:p-10 border border-secondary/10 bg-white shadow-sm relative group hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <StarRating count={t.rating} />
              <span className="absolute top-6 right-8 text-7xl text-accent/10 leading-none pointer-events-none">
                &quot;
              </span>
              <p className="italic text-lg leading-relaxed text-secondary/90 relative z-10 mb-8 mt-6">
                {t.quote}
              </p>
              <div className="mt-auto border-t border-secondary/10 pt-5 space-y-1">
                <p className="text-sm font-black uppercase tracking-widest text-primary">
                  {t.author}
                </p>
                <p className="text-xs text-secondary/40 uppercase tracking-widest">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
