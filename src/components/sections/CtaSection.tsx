import React from 'react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';
import Link from 'next/link';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export const CtaSection = ({ title, subtitle, primaryCta, secondaryCta }: CtaSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-accent text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -inset-[10%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay rotate-3 scale-110" />
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col space-y-6 max-w-2xl text-center md:text-left">
            <Heading level={2} className="text-white">
              {title}
            </Heading>
            <Text className="text-white/90 text-lg md:text-xl">
              {subtitle}
            </Text>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link href={primaryCta.href}>
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 w-full sm:w-auto border border-primary">
                {primaryCta.label}
              </Button>
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-accent w-full sm:w-auto">
                  {secondaryCta.label}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
