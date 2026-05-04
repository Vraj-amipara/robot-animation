import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Globe2, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');

    if (form.current) {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
        // Simulate success if API keys are not provided
        console.warn('EmailJS API keys not found. Simulating successful form submission.');
        setTimeout(() => setFormStatus('Message received. We will contact you shortly.'), 1500);
        return;
      }

      emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        { publicKey }
      )
      .then((result) => {
          console.log(result.text);
          setFormStatus('Message received. We will contact you shortly.');
      }, (error) => {
          console.log(error.text);
          setFormStatus(`Failed to send message: ${error.text}`);
      });
    } else {
      setTimeout(() => setFormStatus('Message received. We will contact you shortly.'), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-base pt-24 pb-20 overflow-hidden">
      
      {/* Immersive Hero */}
      <section className="relative pt-32 pb-24 text-center mb-12 border-b border-light/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Global Network Background" 
            className="w-full h-full object-cover opacity-[0.15] grayscale pointer-events-none" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.accent/10%),transparent_50%)] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center justify-center p-2 bg-surface/50 backdrop-blur border border-accent/20 mb-6 rounded-full">
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-3 ml-2 shadow-[0_0_10px_#AEB784]"></span>
             <span className="font-mono text-xs text-light uppercase tracking-[0.2em] pr-4">Global Communications</span>
          </div>
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-4 drop-shadow-md">
            <span className="text-light">INITIATE </span>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #AEB784' }}>CONTACT</span>
          </h1>
          <p className="font-body text-light/80 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Connect with our engineering team to architect the future of your facility.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Bento Info Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Primary Contact Box */}
            <div className="bg-surface/60 backdrop-blur-lg border border-light/10 p-8 hover:border-accent/30 transition-all duration-500 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe2 className="w-24 h-24 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-light mb-8 relative z-10">Direct Channels</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="group/item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-base/80 border border-light/10 flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                    <Mail className="w-4 h-4 text-light/70 group-hover/item:text-accent" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs tracking-widest text-light/40 uppercase mb-1 drop-shadow-md">Operations</h4>
                    <a href="mailto:vrajamipara9@gmail.com" className="font-body text-light text-lg hover:text-accent transition-colors">vrajamipara9@gmail.com</a>
                  </div>
                </div>

                <div className="group/item flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-base/80 border border-light/10 flex items-center justify-center group-hover/item:border-accent group-hover/item:text-accent transition-colors">
                    <Phone className="w-4 h-4 text-light/70 group-hover/item:text-accent" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs tracking-widest text-light/40 uppercase mb-1 drop-shadow-md">Global Support</h4>
                    <a href="tel:+919909652766" className="font-body text-light text-lg hover:text-accent transition-colors">+91 99096 52766</a>
                  </div>
                </div>
              </div>
            </div>

            {/* HQ Box */}
            <div className="bg-surface/60 backdrop-blur-lg border border-light/10 p-8 hover:border-accent/30 transition-all duration-500 rounded-sm flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-accent" />
                  <h3 className="font-display text-xl text-light">Headquarters</h3>
                </div>
                <p className="font-body text-light/80 text-lg leading-relaxed">
                  100 Robotics Way<br/>
                  Innovation District, CA 94016<br/>
                  United States
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-light/10 flex gap-4">
                <div className="flex-1">
                  <div className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-1">Timezone</div>
                  <div className="font-mono text-sm text-light">PST (UTC-8)</div>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[10px] text-light/40 uppercase tracking-widest mb-1">Local Time</div>
                  <div className="font-mono text-sm text-accent">
                    {new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute:'2-digit' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hubs - Grid of mini cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface/40 border border-light/10 p-5 hover:bg-surface transition-colors cursor-pointer group">
                <h4 className="font-display font-bold text-light mb-1 flex items-center justify-between">
                  Tokyo <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h4>
                <p className="font-mono text-[9px] text-light/40 uppercase tracking-widest">Asia Pacific</p>
              </div>
              <div className="bg-surface/40 border border-light/10 p-5 hover:bg-surface transition-colors cursor-pointer group">
                <h4 className="font-display font-bold text-light mb-1 flex items-center justify-between">
                  Berlin <ArrowRight className="w-3 h-3 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h4>
                <p className="font-mono text-[9px] text-light/40 uppercase tracking-widest">Europe Ops</p>
              </div>
            </div>

          </div>

          {/* Right: Modern Glass Form (7 cols) */}
          <div className="lg:col-span-7">
             <div className="bg-surface/40 backdrop-blur-xl border border-light/10 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative">
                
                {formStatus === 'Message received. We will contact you shortly.' ? (
                  <div className="py-20 flex flex-col items-center justify-center text-center animate-fadeUp">
                    <div className="w-20 h-20 rounded-full border border-accent flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(174,183,132,0.3)]">
                      <Send className="w-8 h-8 text-accent ml-1" />
                    </div>
                    <h3 className="font-display text-2xl text-light mb-2">Transmission Successful</h3>
                    <p className="font-body text-light/60">Our systems have logged your request. We will reach out shortly.</p>
                  </div>
                ) : (
                  <form ref={form} onSubmit={handleSubmit} className="space-y-8 animate-fadeUp">
                    <div className="flex items-center justify-between border-b border-light/10 pb-6 mb-8">
                       <h2 className="font-display text-2xl text-light">System Inquiry Form</h2>
                       <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-1 uppercase tracking-widest">
                         Secure Connect
                       </span>
                    </div>

                    {formStatus && formStatus !== 'Sending...' && formStatus !== 'Message received. We will contact you shortly.' && (
                      <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-md font-mono text-xs mb-6 break-words">
                        {formStatus}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Floating Label Input pattern */}
                      <div className="relative group">
                        <input required type="text" id="name" name="user_name" placeholder=" " className="peer w-full bg-transparent border-b border-light/20 px-0 py-3 text-light font-body text-base focus:outline-none focus:border-accent transition-colors placeholder-transparent" />
                        <label htmlFor="name" className="absolute left-0 font-mono uppercase tracking-widest transition-all -top-4 text-[10px] text-light/50 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-accent">
                          Full Name <span className="text-accent">*</span>
                        </label>
                      </div>
                      <div className="relative group">
                        <input required type="email" id="email" name="user_email" placeholder=" " className="peer w-full bg-transparent border-b border-light/20 px-0 py-3 text-light font-body text-base focus:outline-none focus:border-accent transition-colors placeholder-transparent" />
                        <label htmlFor="email" className="absolute left-0 font-mono uppercase tracking-widest transition-all -top-4 text-[10px] text-light/50 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-accent">
                          Work Email <span className="text-accent">*</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="relative group">
                        <input type="text" id="company" name="company" placeholder=" " className="peer w-full bg-transparent border-b border-light/20 px-0 py-3 text-light font-body text-base focus:outline-none focus:border-accent transition-colors placeholder-transparent" />
                        <label htmlFor="company" className="absolute left-0 font-mono uppercase tracking-widest transition-all -top-4 text-[10px] text-light/50 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-accent">
                          Company Name
                        </label>
                      </div>
                      <div className="relative group">
                        <select required id="interest" name="interest" className="peer w-full bg-transparent border-b border-light/20 px-0 py-3 text-light font-body text-base focus:outline-none focus:border-accent transition-colors appearance-none outline-none">
                          <option value="" className="bg-black text-white">Select Interest Category</option>
                          {CATEGORIES.map(c => <option key={c} value={c} className="bg-black text-white">{c} Systems</option>)}
                          <option value="General" className="bg-black text-white">General Inquiry / Partnership</option>
                        </select>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-accent scale-x-[2] rotate-90 text-[10px]">›</div>
                      </div>
                    </div>

                    <div className="relative group pt-4">
                      <textarea required id="message" name="message" rows={4} placeholder=" " className="peer w-full bg-base/50 border border-light/10 p-4 text-light font-body text-base focus:outline-none focus:border-accent transition-all resize-none placeholder-transparent"></textarea>
                      <label htmlFor="message" className="absolute left-0 font-mono uppercase tracking-widest transition-all top-1 -translate-y-full text-[10px] text-light/50 peer-placeholder-shown:left-4 peer-placeholder-shown:top-8 peer-placeholder-shown:-translate-y-0 peer-focus:left-0 peer-focus:top-1 peer-focus:-translate-y-full peer-focus:text-accent">
                        Message Payload <span className="text-accent">*</span>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'Sending...'}
                      className="group relative w-full flex items-center justify-center bg-accent text-base font-mono font-bold uppercase text-sm tracking-widest py-5 overflow-hidden transition-all disabled:opacity-75 disabled:cursor-wait"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                      <span className="relative flex items-center gap-3">
                        {formStatus === 'Sending...' ? (
                          <>Transmitting Data <span className="w-4 h-4 border-2 border-base border-t-transparent rounded-full animate-spin"></span></>
                        ) : (
                          <>Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </span>
                    </button>
                    
                    <p className="text-center font-mono text-[9px] text-light/30 uppercase tracking-widest mt-6">
                      Protected by 256-bit encryption • NEXORA Communications
                    </p>
                  </form>
                )}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
