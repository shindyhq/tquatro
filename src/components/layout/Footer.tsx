import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ArrowUpRight, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'E-Commerce Brokerage', href: '/services#ecommerce-brokerage' },
      { label: 'Marketplace Integrations', href: '/services#marketplace-integrations' },
      { label: 'Product Sourcing', href: '/services#product-sourcing' },
      { label: 'Product Development', href: '/services#product-development' },
      { label: 'Business Turnaround', href: '/services#business-turnaround' },
      { label: 'Bookkeeping', href: '/services#bookkeeping' },
      { label: 'SEO Services', href: '/services#seo-services' },
      { label: 'Media & Publications', href: '/services#media-publications' },
    ],
    industries: [
      { label: 'E-Commerce', href: '/industries#ecommerce' },
      { label: 'Retail & Omnichannel', href: '/industries#retail-omnichannel' },
      { label: 'Social Commerce', href: '/industries#social-commerce' },
      { label: 'Supply Chain & Logistics', href: '/industries#supply-chain' },
      { label: 'Media & Publications', href: '/industries#media-publications' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog / Insights', href: '/blog' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ]
  };

  return (
    <footer className="bg-[#010b2b] text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Editorial Watermark */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-5 select-none">
        <span className="text-[15rem] font-black leading-none uppercase text-white">Future</span>
      </div>

      <Container>
        <div className="flex flex-col space-y-24">
          
          {/* Top Section: Brand & Contact Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-12">
              <div className="flex flex-col space-y-8">
                <Link href="/" className="group flex items-center gap-6">
                  <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src="/logo-original.png" 
                      alt="T-QUATRO Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col -space-y-1">
                    <span className="text-4xl font-black tracking-tighter uppercase text-white transition-colors duration-500 group-hover:text-[#cc4e00]">
                      T-QUATRO <span className="text-[#cc4e00]">LLC</span>
                    </span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-[#cc4e00]/80">
                      Online Retail Consultancy
                    </span>
                  </div>
                </Link>
                <div className="max-w-md">
                  <p className="text-white/40 text-lg font-light leading-relaxed border-l border-white/10 pl-8">
                    A premium operations-led consultancy helping brands bridge the gap between strategy and deep channel execution.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <span className="text-[#cc4e00] font-black uppercase tracking-[0.3em] text-[10px]">Get in touch</span>
                <div className="flex flex-col space-y-2">
                  <a href="mailto:hello@t-quatro.com" className="group flex items-center space-x-3 text-2xl font-bold hover:text-[#cc4e00] transition-colors">
                    <span>hello@t-quatro.com</span>
                    <ArrowUpRight className="h-6 w-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </a>
                  <div className="flex items-center space-x-4 text-white/40 pt-4">
                    <MapPin size={18} className="text-[#cc4e00]" />
                    <span className="text-sm uppercase tracking-widest font-bold">Dallas, Texas &mdash; Nationally Focused</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Grid: 3 Columns */}
            <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-12 pt-8 lg:pt-0">
              <div className="space-y-8">
                <h4 className="text-[#cc4e00] font-black uppercase tracking-[0.25em] text-[10px]">Services</h4>
                <ul className="flex flex-col space-y-4">
                  {footerLinks.services.slice(0, 5).map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-sm font-medium text-white/50 hover:text-white transition-colors block leading-tight">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                     <Link href="/services" className="text-xs font-black text-[#cc4e00] uppercase tracking-widest hover:pl-2 transition-all block pt-2">
                       View All Services &rarr;
                     </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-[#cc4e00] font-black uppercase tracking-[0.25em] text-[10px]">Industries</h4>
                <ul className="flex flex-col space-y-4">
                  {footerLinks.industries.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-sm font-medium text-white/50 hover:text-white transition-colors block leading-tight">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <h4 className="text-[#cc4e00] font-black uppercase tracking-[0.25em] text-[10px]">Company</h4>
                <ul className="flex flex-col space-y-4">
                  {footerLinks.company.map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="text-sm font-medium text-white/50 hover:text-white transition-colors block leading-tight">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Social & Bottom Bar */}
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="space-y-6">
              <div className="flex space-x-6">
                <a href="#" className="p-3 bg-white/5 hover:bg-[#cc4e00]/10 hover:text-[#cc4e00] transition-all rounded-lg"><Linkedin size={20} /></a>
                <a href="#" className="p-3 bg-white/5 hover:bg-[#cc4e00]/10 hover:text-[#cc4e00] transition-all rounded-lg"><Twitter size={20} /></a>
                <a href="#" className="p-3 bg-white/5 hover:bg-[#cc4e00]/10 hover:text-[#cc4e00] transition-all rounded-lg"><Instagram size={20} /></a>
              </div>
              <div className="max-w-2xl">
                 <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] leading-loose max-w-lg">
                    © {currentYear} T-QUATRO LLC. ALL RIGHTS RESERVED. OPERATED FROM DALLAS, TEXAS. RESULTS VARY BY BUSINESS SIZE AND INDUSTRY CONDITIONS. PREPAREDNESS IS THE ONLY CONSTANT.
                 </p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-4">
               <span className="text-white/5 font-black text-6xl select-none leading-none">TQ-26</span>
               <div className="h-px w-24 bg-white/10" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
