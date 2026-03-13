import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Instagram, Send, MapPin } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import usePageSEO from "@/hooks/usePageSEO";

const Contact = () => {
  usePageSEO({
    title: "Contact | Book a Lehi Wedding Photographer",
    description: "Book a wedding photographer or videographer in Lehi, Utah. Get in touch for weddings, family portraits, headshots, and commercial video across Utah County and Salt Lake City.",
    canonical: "https://leedphotography.com/contact",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name} — ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\n\n${formData.message}`
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
            Book Your Session
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground mb-4 max-w-2xl"
          >
            Ready to book a Lehi photographer or videographer? Get in touch for weddings, family portraits, headshots, events, or commercial video projects across Utah County and Salt Lake City.
          </motion.p>
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
                Whether it's your wedding day, a family session in the Utah mountains, professional headshots, or video content for your restaurant or business — I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground font-body">
                  <MapPin size={16} className="text-primary" />
                  Based in Lehi, Utah — available statewide &amp; for travel
                </div>
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

              {/* Internal links */}
              <div className="space-y-2 pt-4 border-t border-border">
                <Link to="/pricing" className="block font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                  View wedding photography &amp; video pricing
                </Link>
                <Link to="/photo" className="block font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                  Browse the photography portfolio
                </Link>
                <Link to="/video" className="block font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
                  Watch sample wedding films &amp; videos
                </Link>
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
                      Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="" className="text-black bg-white">Select a service...</option>
                      <option value="Wedding Photography" className="text-black bg-white">Wedding Photography</option>
                      <option value="Family Photos" className="text-black bg-white">Family Photos</option>
                      <option value="Professional Headshots" className="text-black bg-white">Professional Headshots</option>
                      <option value="Event Photography" className="text-black bg-white">Event Photography</option>
                      <option value="Wedding Videography" className="text-black bg-white">Wedding Videography</option>
                      <option value="Event Videography" className="text-black bg-white">Event Videography</option>
                      <option value="Restaurant / Commercial Video" className="text-black bg-white">Restaurant / Commercial Video</option>
                      <option value="Other" className="text-black bg-white">Other</option>
                    </select>
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
                      placeholder="Tell me about your event, date, and location..."
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
