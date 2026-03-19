import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ArrowRight, Home, Box, Factory, Info, BookOpen, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const links = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Services', href: '/services', icon: Box },
  { label: 'Industries', href: '/industries', icon: Factory },
  { label: 'About', href: '/about', icon: Info },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Contact', href: '/contact', icon: Send },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-[#010b2b]/95 backdrop-blur-md py-4 border-b border-white/10" 
          : "bg-transparent py-8"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group flex items-center gap-6">
            <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo-original.png" 
                alt="T-QUATRO Logo" 
                fill 
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col pt-1">
              <span className={cn(
                "text-3xl font-black tracking-tighter uppercase transition-colors duration-500",
                scrolled ? "text-white" : "text-white"
              )}>
                T-QUATRO <span className="text-[#cc4e00]">LLC</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 hover:text-[#cc4e00] relative group",
                  router.pathname === link.href ? "text-[#cc4e00]" : "text-white/70"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-[2px] bg-[#cc4e00] transition-all duration-300",
                  router.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link href="/contact">
              <Button className="bg-[#cc4e00] hover:bg-[#cc4e00]/90 text-white border-none px-8 font-black uppercase tracking-widest text-xs h-12">
                Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8 text-[#cc4e00]" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#010b2b] z-[-1] transition-all duration-700 ease-[0.16,1,0.3,1] flex flex-col items-center justify-center p-8",
        isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "w-full flex items-center justify-between text-2xl font-black tracking-tighter uppercase transition-colors py-4 border-b border-white/5",
                router.pathname === link.href ? "text-[#cc4e00]" : "text-white hover:text-[#cc4e00]"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="flex items-center gap-4">
                <link.icon className={cn("w-6 h-6", router.pathname === link.href ? "text-[#cc4e00]" : "text-white/20")} />
                {link.label}
              </span>
              <ArrowRight className="w-5 h-5 opacity-20" />
            </Link>
          ))}
          <Link href="/contact" className="w-full mt-8" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-[#cc4e00] text-white h-16 font-black uppercase tracking-widest text-sm shadow-xl shadow-[#cc4e00]/20">
              Let&apos;s Talk <ArrowRight className="ml-4 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Mobile Watermark */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
          <span className="text-8xl font-black uppercase">TQ-26</span>
        </div>
      </div>
    </header>
  );
};
