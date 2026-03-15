import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Lightbox from "@/components/Lightbox";
import usePageSEO from "@/hooks/usePageSEO";

interface PhotoSection {
  id: string;
  title: string;
  description: string;
  images: { src: string; alt: string }[];
}

const sections: PhotoSection[] = [
  {
    id: "weddings",
    title: "Weddings & Events",
    description: "Capturing the joy, emotion, and celebration of your most important moments across Lehi, Utah County, and Salt Lake City.",
    images: [
      { src: "/images/DSC03445-scaled.webp", alt: "Wedding ceremony first kiss at outdoor Utah County venue" },
      { src: "/images/untitled-01103-scaled.jpg", alt: "Bride walking down aisle at Lehi, Utah wedding" },
      { src: "/images/DSC03306-scaled.webp", alt: "Wedding reception celebration in Salt Lake City" },
      { src: "/images/DSC07110-scaled.jpg", alt: "Couple portraits at golden hour in Utah" },
    ],
  },
  {
    id: "landscapes",
    title: "Utah Landscapes",
    description: "Utah's wilderness — from desert vistas to mountain peaks and starlit skies.",
    images: [
      { src: "/images/WithSky.jpg", alt: "Milky Way night sky over Utah desert" },
      { src: "/images/DSC03970-1-scaled.jpg", alt: "Red rock desert landscape in southern Utah" },
      { src: "/images/DSC03148.jpg", alt: "Mountain vista in the Wasatch Range, Utah" },
      { src: "/images/DSC05761.jpg", alt: "Sunset over Utah valley landscape" },
      { src: "/images/DSC06835-scaled.jpg", alt: "Dramatic Utah canyon landscape photography" },
      { src: "/images/ArnarstapiCottage-scaled.webp", alt: "Icelandic cottage landscape photo by Lee Denning" },
      { src: "/images/DSC03021-scaled.webp", alt: "Stars over desert rock formations in Utah" },
      { src: "/images/DSC04222-scaled.webp", alt: "Panoramic view of Utah wilderness at dusk" },
    ],
  },
  {
    id: "family",
    title: "Family Photography in Utah County",
    description: "Beautiful family sessions and professional headshots at stunning locations across American Fork, Provo, Orem, and Lehi.",
    images: [
      { src: "/images/DSC05693-scaled.jpg", alt: "Family portrait session in Utah County park" },
      { src: "/images/DSC04385-scaled.webp", alt: "Professional headshot in Lehi, Utah" },
      { src: "/images/DSC09633-scaled.jpg", alt: "Outdoor family photography at golden hour in Utah" },
      { src: "/images/DSC09586-scaled.jpg", alt: "Mother and children portrait at Utah mountain location" },
      { src: "/images/DSC07056-scaled.jpg", alt: "Extended family photography session in American Fork" },
      { src: "/images/family-portrait.png", alt: "Family photo session at scenic Utah valley location" },
    ],
  },
  {
    id: "motion",
    title: "Sports & Action Photography",
    description: "Action photography capturing the intensity, grit, and excitement of athletic competition across Utah.",
    images: [
      { src: "/images/DSC03114.webp", alt: "Youth sports action photography in Utah" },
      { src: "/images/DSC03119.webp", alt: "Athletic competition photo at Utah sports event" },
      { src: "/images/DSC03202.webp", alt: "Action sports photography at Utah County game" },
      { src: "/images/DSC09970.webp", alt: "Competitive sports photography in Lehi, Utah" },
      { src: "/images/DSC00023.webp", alt: "Dynamic action shot at Utah athletic event" },
      { src: "/images/DSC00033.webp", alt: "Sports photography freeze frame at Utah competition" },
      { src: "/images/DSC00036.webp", alt: "Youth basketball action photography in Utah County" },
      { src: "/images/DSC00101.webp", alt: "High-speed action sports photo in Utah" },
      { src: "/images/DSC00152.webp", alt: "Athlete portrait during competition in Utah" },
      { src: "/images/DSC00292.webp", alt: "Sports event coverage photography in Lehi" },
      { src: "/images/DSC02551.webp", alt: "Jiu jitsu grappling action photography in Utah" },
      { src: "/images/DSC01964.webp", alt: "Brazilian jiu jitsu competition photography" },
      { src: "/images/DSC02829.webp", alt: "No-gi jiu jitsu action sports photography in Utah" },
    ],
  },
];

const allImages = sections.flatMap((s) => s.images.map((img) => img.src));

const Photo = () => {
  usePageSEO({
    title: "Photography Portfolio | Lehi Utah Photographer",
    description: "Wedding, family, portrait, and landscape photography in Lehi, Utah. Serving Utah County, Salt Lake City, and the Wasatch Front. View the portfolio.",
    canonical: "https://leedphotography.com/photo",
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (src: string) => {
    const idx = allImages.indexOf(src);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground mb-4"
          >
            Photography Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground mb-4 max-w-2xl"
          >
            Professional photography in Lehi, Utah — from wedding and family portraits to stunning landscape photography. Available for sessions across Utah County, Salt Lake City, Provo, and beyond.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px bg-primary mb-12"
          />

          {/* Internal links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            <Link to="/video" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              See how I tell your story through film
            </Link>
            <Link to="/pricing" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              View photography pricing &amp; packages
            </Link>
            <Link to="/contact" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              Book your session today
            </Link>
          </motion.div>

          {/* Quick nav */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-16"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary"
              >
                {s.title}
              </a>
            ))}
          </motion.div>

          {/* Sections */}
          <div className="space-y-24">
            {sections.map((section, si) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-3">
                  {String(si + 1).padStart(2, "0")}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-2">
                  {section.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-8 max-w-lg">
                  {section.description}
                </p>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
                  {section.images.map((img, i) => (
                    <motion.div
                      key={img.src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="break-inside-avoid cursor-pointer group overflow-hidden"
                      onClick={() => openLightbox(img.src)}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % allImages.length)}
      />
    </PageTransition>
  );
};

export default Photo;
