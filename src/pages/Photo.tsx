import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Lightbox from "@/components/Lightbox";

interface PhotoSection {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const sections: PhotoSection[] = [
  {
    id: "weddings",
    title: "Weddings & Events",
    description: "Capturing the joy, emotion, and celebration of your most important moments across Utah.",
    images: [
      "/images/DSC03445-scaled.webp",
      "/images/untitled-01103-scaled.jpg",
      "/images/DSC05624-scaled.webp",
    ],
  },
  {
    id: "landscapes",
    title: "Landscapes",
    description: "Utah's wilderness — from desert vistas to mountain peaks and starlit skies.",
    images: [
      "/images/WithSky.jpg",
      "/images/DSC03970-1-scaled.jpg",
      "/images/DSC03148.jpg",
      "/images/DSC05761.jpg",
      "/images/DSC06835-scaled.jpg",
      "/images/ArnarstapiCottage-scaled.webp",
      "/images/DSC03021-scaled.webp",
      "/images/DSC04222-scaled.webp",
    ],
  },
  {
    id: "family",
    title: "Family & Portraits",
    description: "Beautiful family sessions and professional headshots in stunning Utah locations.",
    images: [
      "/images/DSC05693-scaled.jpg",
      "/images/DSC07110-scaled.jpg",
      "/images/DSC04385-scaled.webp",
      "/images/DSC03306-scaled.webp",
      "/images/DSC09633-scaled.jpg",
      "/images/DSC09586-scaled.jpg",
      "/images/DSC07056-scaled.jpg",
      "/images/family-portrait.png",
    ],
  },
  {
    id: "motion",
    title: "Motion",
    description: "Action photography capturing the intensity, grit, and excitement of athletic competition.",
    images: [
      "/images/DSC03114.webp",
      "/images/DSC03119.webp",
      "/images/DSC03202.webp",
      "/images/DSC09970.webp",
      "/images/DSC00023.webp",
      "/images/DSC00033.webp",
      "/images/DSC00036.webp",
      "/images/DSC00101.webp",
      "/images/DSC00152.webp",
      "/images/DSC00292.webp",
    ],
  },
];

const allImages = sections.flatMap((s) => s.images);

const Photo = () => {
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
            Professional photography in Utah — from wedding and family portraits to stunning landscape photography. Available for sessions across Salt Lake City, Provo, Park City, and beyond.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px bg-primary mb-16"
          />

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
                  {section.images.map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="break-inside-avoid cursor-pointer group overflow-hidden"
                      onClick={() => openLightbox(src)}
                    >
                      <img
                        src={src}
                        alt={`${section.title} photography in Utah by Leed Photography - image ${i + 1}`}
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
