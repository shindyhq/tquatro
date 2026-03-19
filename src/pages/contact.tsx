import Head from "next/head";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Mail, MapPin, Phone, Globe, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    organization: '',
    subject: 'Operational Overhaul',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Connect to our WordPress bridge
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus('error');
    }
  };

  return (
    <>
      <Head>
        <title>Contact | T-QUATRO LLC</title>
        <meta name="description" content="Reach out to T-QUATRO for an honest, no-pitch conversation about your e-commerce operations and growth strategy." />
      </Head>

      <Navbar />

      <main className="bg-[#010b2b] min-h-screen">
        
        {/* Minimalist Editorial Hero */}
        <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
           {/* Moving Pattern Watermark */}
           <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none whitespace-nowrap">
              <span className="text-[25rem] font-black uppercase leading-none text-white block">Direct Line</span>
           </div>

           <Container>
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
                 <div className="lg:col-span-9 space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center space-x-6"
                    >
                       <div className="h-px w-20 bg-[#cc4e00]" />
                       <span className="text-[#cc4e00] font-black uppercase tracking-[0.5em] text-xs">Reach Out Directly</span>
                    </motion.div>
                    
                    <motion.h1 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="text-[clamp(3.5rem,10vw,10rem)] font-black uppercase leading-[0.9] tracking-tighter text-white"
                    >
                      LET&apos;S GET <br /><span className="text-[#cc4e00]">TO WORK.</span>
                    </motion.h1>
                 </div>
                 
                 <div className="lg:col-span-3 pb-8">
                    <motion.div 
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       transition={{ delay: 0.8, duration: 1 }}
                       className="p-8 bg-white/5 border-l-2 border-[#cc4e00] space-y-4"
                    >
                       <span className="text-white font-black uppercase tracking-widest text-[10px] opacity-40">The Promise</span>
                       <p className="text-white/60 text-sm font-light leading-relaxed">
                          No scripted sales pitches. No generic templates. Just an honest conversation about your metrics and where they can go.
                       </p>
                    </motion.div>
                 </div>
              </div>
           </Container>
        </section>

        {/* Contact System */}
        <section className="py-32 pb-48">
           <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                 
                 {/* Left Col: Contact Details */}
                 <div className="lg:col-span-4 space-y-24">
                    <div className="space-y-16">
                       <div className="group space-y-4 cursor-default">
                          <div className="flex items-center space-x-4">
                             <MapPin className="text-[#cc4e00] w-5 h-5 group-hover:scale-125 transition-transform" />
                             <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Headquarters</span>
                          </div>
                           <p className="text-white text-3xl font-black uppercase tracking-tighter group-hover:text-[#cc4e00] transition-colors leading-tight">
                              UNCOMPROMISING <br />TEXAS
                           </p>
                       </div>

                       <div className="group space-y-4 cursor-pointer">
                          <div className="flex items-center space-x-4">
                             <Mail className="text-[#cc4e00] w-5 h-5 group-hover:scale-125 transition-transform" />
                             <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Email Support</span>
                          </div>
                          <a href="mailto:hello@tquatro.com" className="text-white text-3xl font-black uppercase tracking-tighter group-hover:text-[#cc4e00] transition-colors decoration-[#cc4e00]/20 underline underline-offset-8">
                             HELLO@<br />TQUATRO.COM
                          </a>
                       </div>

                       <div className="group space-y-4">
                          <div className="flex items-center space-x-4">
                             <MessageSquare className="text-[#cc4e00] w-5 h-5 group-hover:scale-125 transition-transform" />
                             <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">Consultation Hours</span>
                          </div>
                          <p className="text-white/40 text-sm font-light leading-relaxed">
                             Mon - Fri: <span className="text-white/80">9:00 AM - 6:00 PM CST</span><br />
                             Response Time: <span className="text-white/80">Under 12 Hours</span>
                          </p>
                       </div>
                    </div>

                    {/* Operational Watermark */}
                    <div className="hidden lg:block">
                       <div className="h-40 w-px bg-white/5 ml-1" />
                       <div className="mt-8 text-[12px] font-black uppercase tracking-[0.5em] text-white/10 [writing-mode:vertical-lr]">
                          Operationally Driven Consultancy
                       </div>
                    </div>
                 </div>

                 {/* Right Col: The Master Form */}
                 <div className="lg:col-span-8">
                    <div className="relative bg-white/5 p-12 lg:p-20 border border-white/5 group overflow-hidden">
                       {/* Subtle Background Pattern */}
                       <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none" 
                            style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, white 1px, transparent 0)', backgroundSize: '30px 30px' }} 
                       />

                       <form className="relative z-10 flex flex-col space-y-12" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-4 group/input">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-[#cc4e00] transition-colors">Full Name</label>
                                <input 
                                  type="text" 
                                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-[#cc4e00] transition-all placeholder:text-white/5" 
                                  placeholder="John Doe"
                                  required
                                  value={formData.fullName}
                                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                />
                             </div>
                             <div className="space-y-4 group/input">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-[#cc4e00] transition-colors">Email Address</label>
                                <input 
                                  type="email" 
                                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-[#cc4e00] transition-all placeholder:text-white/5" 
                                  placeholder="john@company.com"
                                  required
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                             </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                             <div className="space-y-4 group/input">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-[#cc4e00] transition-colors">Organization</label>
                                <input 
                                  type="text" 
                                  className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-[#cc4e00] transition-all placeholder:text-white/5" 
                                  placeholder="Company Name"
                                  required
                                  value={formData.organization}
                                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                                />
                             </div>
                             <div className="space-y-4 group/input">
                                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-[#cc4e00] transition-colors">Subject Area</label>
                                <select 
                                   className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-[#cc4e00] transition-all appearance-none cursor-pointer"
                                   value={formData.subject}
                                   onChange={(e) => setFormData({...formData, subject: e.target.value})}
                                >
                                   <option className="bg-[#010b2b]" value="Operational Overhaul">Operational Overhaul</option>
                                   <option className="bg-[#010b2b]" value="Marketplace Growth">Marketplace Growth</option>
                                   <option className="bg-[#010b2b]" value="Supply Chain Optimization">Supply Chain Optimization</option>
                                   <option className="bg-[#010b2b]" value="Other Inquiry">Other Inquiry</option>
                                </select>
                             </div>
                          </div>

                          <div className="space-y-4 group/input">
                             <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/input:text-[#cc4e00] transition-colors">Operational Challenge</label>
                             <textarea 
                               rows={4}
                               className="w-full bg-transparent border-b border-white/10 py-4 text-white text-xl font-light focus:outline-none focus:border-[#cc4e00] transition-all resize-none placeholder:text-white/5" 
                               placeholder="Briefly describe the bottleneck..."
                               required
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                             />
                          </div>

                          <div className="pt-8 flex items-center justify-between">
                             <motion.button 
                               type="submit"
                               disabled={formStatus !== 'idle'}
                               whileHover={{ scale: 1.02 }}
                               whileTap={{ scale: 0.98 }}
                               className={`px-16 py-8 font-black uppercase text-sm tracking-[0.3em] flex items-center gap-6 transition-all duration-500 overflow-hidden relative ${
                                 formStatus === 'success' ? 'bg-green-600 text-white' : 
                                 formStatus === 'error' ? 'bg-red-600 text-white' : 
                                 'bg-[#cc4e00] text-white'
                               }`}
                             >
                                <AnimatePresence mode="wait">
                                   {formStatus === 'success' ? (
                                     <motion.span 
                                       key="sent"
                                       initial={{ y: 20, opacity: 0 }}
                                       animate={{ y: 0, opacity: 1 }}
                                       className="flex items-center gap-3"
                                     >
                                       Submission Sent <ArrowUpRight className="w-5 h-5" />
                                     </motion.span>
                                   ) : (
                                     <motion.span 
                                       key="idle"
                                       initial={{ y: -20, opacity: 0 }}
                                       animate={{ y: 0, opacity: 1 }}
                                       className="flex items-center gap-3"
                                     >
                                       {formStatus === 'sending' ? 'Transmitting...' : 'Initiate Inquiry'}
                                       <Send className={`w-5 h-5 ${formStatus === 'sending' ? 'animate-pulse' : ''}`} />
                                     </motion.span>
                                   )}
                                </AnimatePresence>
                             </motion.button>

                             <div className="hidden sm:flex items-center space-x-4 opacity-20">
                                <div className="h-px w-12 bg-white" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Direct Connection</span>
                             </div>
                          </div>
                       </form>
                    </div>
                 </div>

              </div>
           </Container>
        </section>

      </main>

      <Footer />
    </>
  );
}
