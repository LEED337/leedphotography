import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden grain-overlay">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Leed Photography landscape"
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
            Leed
            <br />
            <span className="text-gradient font-semibold">Photography</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 font-body text-lg md:text-xl text-foreground/90 tracking-wide max-w-md italic"
          >
            "We do not remember days, we remember moments."
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-2 font-display text-xs text-muted-foreground tracking-[0.3em] uppercase"
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
              to="/photo"
              className="group inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300"
            >
              View Work
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

      {/* Categories */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-12"
          >
            Explore
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/photo" className="group relative aspect-[4/3] overflow-hidden">
              <img
                src="https://leedphotography.com/wp-content/uploads/2025/01/DSC03445-768x512.webp"
                alt="Portrait photography"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">Photo</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">Portraits & Landscapes</p>
              </div>
            </Link>

            <Link to="/video" className="group relative aspect-[4/3] overflow-hidden">
              <img
                src="https://leedphotography.com/wp-content/uploads/2025/01/DSC02801-1024x683.jpg"
                alt="Video production"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wide">Video</h3>
                <p className="font-body text-sm text-muted-foreground mt-1">Events, Services & Creative</p>
              </div>
            </Link>
          </div>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-display text-sm tracking-[0.2em] uppercase text-primary border border-primary/30 px-8 py-4 hover:bg-primary/10 transition-all duration-300"
            >
              Let's Create Something
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Index;
