import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Button } from '../ui/Button';

export interface HeroSectionProps {
  eyebrow?: string;
  titleLineOne: string;
  titleLineTwo?: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
  align?: 'left' | 'center';
}

export const HeroSection = ({
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitle,
  primaryCta,
  secondaryCta,
  imageUrl,
  align = 'left'
}: HeroSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-background pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Background Image Setup */}
      {imageUrl && (
        <div className="absolute inset-0 z-0">
          <img src={imageUrl} alt="" className="w-full h-full object-cover object-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/40" />
        </div>
      )}

      <Container className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <div className={`flex flex-col space-y-8 w-full ${align === 'center' ? 'items-center text-center max-w-4xl mx-auto' : 'lg:w-[60%] items-start text-left'}`}>
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-flex items-center px-4 py-2 bg-secondary text-background font-bold uppercase tracking-widest text-xs rounded-sm">
              {eyebrow}
            </div>
          )}

          {/* Headlines */}
          <div className="flex flex-col space-y-2">
            <Heading level={1} className="leading-[1.1]">
              {titleLineOne}
            </Heading>
            {titleLineTwo && (
              <Heading level={1} dualColor className="leading-[1.1]">
                {titleLineTwo}
              </Heading>
            )}
          </div>

          {/* Subtitle */}
          <Text variant="lead" className={`${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </Text>

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
              {primaryCta && (
                <Link href={primaryCta.href}>
                  <Button size="lg" className="w-full sm:w-auto">
                    {primaryCta.label} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {secondaryCta.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Optional Right-side image space for Left-aligned heroes */}
        {align === 'left' && imageUrl && (
          <div className="hidden lg:block lg:w-[40%] h-[500px] relative">
            <div className="absolute inset-0 border-4 border-accent translate-x-4 translate-y-4" />
            <img src={imageUrl} alt="T-Quatro Hero" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] sepia-[10%] hue-rotate-15 contrast-125" />
          </div>
        )}
      </Container>
    </section>
  );
};
