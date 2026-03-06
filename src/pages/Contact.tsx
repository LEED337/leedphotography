import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Send } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:followtheleed@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground mb-4"
          >
            Contact
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px bg-primary mb-16"
          />

          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <p className="font-body text-muted-foreground leading-relaxed">
                Let's create something meaningful together. Whether it's capturing your special moments or producing compelling video content, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:followtheleed@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body"
                >
                  <Mail size={16} className="text-primary" />
                  followtheleed@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/followtheleed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors font-body"
                >
                  <Instagram size={16} className="text-primary" />
                  @followtheleed
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <p className="font-display text-xl text-primary">Thank you!</p>
                  <p className="font-body text-muted-foreground mt-2">Your email client should have opened.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300 mt-4"
                  >
                    Send Message
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
