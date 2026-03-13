import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Video, Users, Building2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import usePageSEO from "@/hooks/usePageSEO";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  usePageSEO({
    title: "LeeD Photography | Lehi Wedding Photo & Video",
    description: "Lehi-based wedding photographer and videographer serving Utah County and Salt Lake City. Authentic, cinematic photo and video for weddings, families, and brands.",
    canonical: "https://leedphotography.com/",
  });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Golden hour landscape in Lehi, Utah — Leed Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-display text-5xl md:text-8xl font-light tracking-tight text-foreground leading-none"
          >
            Wedding Photography &amp; Video
            <br />
            <span className="text-gradient font-semibold text-3xl md:text-5xl">in Lehi, Utah</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6 font-body text-base md:text-lg text-foreground/80 tracking-wide max-w-lg"
          >
            Lehi photographer &amp; videographer — weddings, portraits, events, and commercial video across Utah County and Salt Lake City.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-4 font-body text-lg md:text-xl text-foreground/90 tracking-wide max-w-md italic"
          >
            "We do not remember days, we remember moments."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-2 font-display text-xs text-foreground/70 tracking-[0.3em] uppercase"
          >
            — Cesare Pavese
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300"
            >
              Book a Session
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-light text-foreground mb-16"
          >
            Photography &amp; Videography in Lehi &amp; Utah County
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, title: "Wedding Photography", desc: "Capturing every moment of your Lehi or Utah County wedding — ceremonies, receptions, and intimate elopements." },
              { icon: Users, title: "Family Portraits in Utah County", desc: "Beautiful family photos and professional headshots at stunning locations across American Fork, Provo, and Orem." },
              { icon: Video, title: "Wedding & Event Video", desc: "Cinematic wedding films and event highlight reels for Salt Lake City, Lehi, and beyond." },
              { icon: Building2, title: "Commercial Video", desc: "Promotional videos for restaurants, gyms, service companies, and local Utah businesses." },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <service.icon size={28} className="text-primary" />
                <h3 className="font-display text-lg text-foreground">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Internal links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-6"
          >
            <Link to="/pricing" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              View wedding photography &amp; video pricing
            </Link>
            <Link to="/video" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              See how I tell your story through film
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-12"
          >
            Portfolio
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { to: "/photo", img: "/images/DSC03445-768x512.webp", title: "Weddings & Events", desc: "Ceremonies, receptions & celebrations", alt: "Bride and groom at outdoor wedding ceremony in Lehi, Utah" },
              { to: "/photo", img: "/images/WithSky.jpg", title: "Landscapes", desc: "Utah wilderness & beyond", alt: "Milky Way night sky over Utah desert landscape" },
              { to: "/photo", img: "/images/DSC05693-scaled.jpg", title: "Family & Portraits", desc: "Family sessions & professional headshots", alt: "Family photography session in Utah County park" },
              { to: "/photo", img: "/images/DSC09970.webp", title: "Motion", desc: "Action, athletics & competition", alt: "Action sports photography at Utah athletic event" },
            ].map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={cat.to} className="group relative aspect-[4/3] overflow-hidden block">
                  <img
                    src={cat.img}
                    alt={cat.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">{cat.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Videography
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-light text-foreground mb-6"
          >
            Wedding Films &amp; Commercial Video
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground mb-12 max-w-2xl"
          >
            Cinematic wedding films, event coverage, restaurant promos, and commercial video for Salt Lake City and Utah County businesses.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Wedding Films", desc: "Cinematic highlights of your big day", vimeoId: "1050354281", alt: "Wedding film highlight reel from Lehi, Utah wedding" },
              { title: "Commercial", desc: "Promo videos for businesses & brands", vimeoId: "372444561", alt: "Commercial video production for Utah business" },
              { title: "Creative", desc: "Artistic & documentary projects", vimeoId: "1041178358", alt: "Creative documentary videography project in Utah" },
            ].map((vid, i) => (
              <motion.div
                key={vid.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <div className="relative aspect-video bg-secondary overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${vid.vimeoId}?h=0&title=0&byline=0&portrait=0&color=c9a96e`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={vid.alt}
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-lg text-foreground">{vid.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{vid.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/video"
              className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300"
            >
              View Full Video Portfolio
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Lee */}
      <section id="about" className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            About
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <img
                src="/images/DLDPort.JPG"
                alt="Lee Denning — Lehi, Utah photographer and videographer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">
                Meet Lee Denning
              </h2>
              <p className="font-display text-sm tracking-[0.15em] uppercase text-primary/80">
                From VHS Tapes to High-Definition Memories
              </p>
              <div className="space-y-4 font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>
                  My obsession with the frame started in the 90s, hauling my dad's oversized VHS camcorder around as a kid. What began as a childhood curiosity evolved into a lifelong pursuit of mastering the light.
                </p>
                <p>
                  In 2010, that passion caught fire again during weekend treks into the wilderness to capture the stillness of the stars and the scale of the desert. Since then, I've been fortunate enough to document it all: the quiet "I do" of a wedding, the grit of a late-night gym session, and the fast-paced energy of little league sports.
                </p>
                <p>
                  To me, every project—whether it's a luxury real estate listing or a family portrait—is an opportunity to sharpen my craft and tell a unique story.
                </p>
                <p className="text-foreground/90 italic">
                  Based in Lehi, Utah and always ready to pack a bag for a destination shoot. Let's create something timeless.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300 mt-4"
              >
                Work With Me
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-light text-foreground mb-4"
          >
            Based in Lehi, Serving Northern Utah
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-muted-foreground max-w-2xl mx-auto"
          >
            I'm a photographer and videographer based in Lehi, Utah, serving Utah County and Salt Lake County, including American Fork, Provo, Orem, Draper, Sandy, and Salt Lake City. Available for travel throughout the Wasatch Front and beyond.
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-light text-foreground"
          >
            Don't let your memories
            <br />
            <span className="text-gradient">be forgotten.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-body text-muted-foreground max-w-md mx-auto"
          >
            Based in Lehi, available for travel. Let's capture your next wedding, family session, or create stunning video content for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300"
            >
              Get a Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/photo"
              className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Browse the photography portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
