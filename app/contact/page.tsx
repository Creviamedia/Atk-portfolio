'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from '@/components/magnetic-button';

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('access_key', '6fc51421-07f8-4efc-b848-4ab5d938408e');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed');
        // You could add error handling here, like showing an error message
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle network errors
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section ref={heroRef} className="min-h-[60vh] flex items-end px-6 md:px-12 max-w-[1440px] mx-auto pb-16 md:pb-24">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[17px] tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Start the Conversation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85]"
          >
            REACH US AT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-muted-foreground text-[23px] md:text-[25px] max-w-2xl leading-relaxed"
          >
            Whether you are a brand looking for a full design-to-delivery partner, a start-up building your first footwear range, or an established label that needs an experienced outside perspective — we would like to hear about the brief.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section ref={formRef} className="px-6 md:px-12 max-w-[1440px] mx-auto py-20 md:py-32 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-7"
          >
            <p className="text-[21px] text-muted-foreground mb-12 leading-relaxed">
              We work with brands directly. No account managers. No briefing chains. You talk to the designer from day one.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center bg-secondary/20 rounded-2xl"
              >
                <h3 className="font-heading text-4xl tracking-tight mb-4">THANK YOU</h3>
                <p className="text-muted-foreground text-[19px]">We&apos;ll be in touch within 24 hours to start the conversation.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/20"
                      placeholder="Brand name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/20"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/20"
                      placeholder="+91 ..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                    Type of Enquiry
                  </label>
                  <select name="enquiry" className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors text-muted-foreground appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="branding">Branding</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="manufacturing">Manufacturing & QC</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border/50 pb-3 text-[19px] focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/20"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="pt-6">
                  <MagneticButton strength={0.15} type="submit"
                      className="inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background rounded-full text-[19px] tracking-[0.2em] uppercase hover:bg-foreground/90 transition-all duration-500 font-medium"
                    >
                    
                      Start the Conversation
                   
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 md:pl-12"
          >
            <div className="space-y-16">
              <div>
                <h3 className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Contact Details</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919999298145"
                    className="block text-[25px] hover:text-muted-foreground transition-colors font-heading tracking-tight"
                  >
                    +91 9999298145
                  </a>
                  <a
                    href="mailto:abdul.tawwab@atk-designs.com"
                    className="block text-[25px] hover:text-muted-foreground transition-colors font-heading tracking-tight"
                  >
                    abdul.tawwab@atk-designs.com
                  </a>
                  <p className="text-muted-foreground text-[19px] pt-2">
                    www.atk-designs.com
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Social</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {['Instagram', 'LinkedIn', 'Twitter', 'Behance'].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-[19px] text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[15px] tracking-[0.3em] uppercase text-muted-foreground mb-6">Location</h3>
                <p className="text-[19px] text-muted-foreground leading-relaxed">
                  Available for global consultancy.<br />
                  Based in India.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
