import { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Lightbox from "@/components/Lightbox";

const portraits = [
  "/images/untitled-01103-scaled.jpg",
  "/images/DSC03445-scaled.webp",
  "/images/DSC09586-scaled.jpg",
  "/images/DSC05693-scaled.jpg",
  "/images/DSC05624-scaled.webp",
  "/images/DSC07110-scaled.jpg",
  "/images/DSC04385-scaled.webp",
  "/images/DSC03306-scaled.webp",
  "/images/DSC09633-scaled.jpg",
  "/images/DSC07056-scaled.jpg",
];

const landscapes = [
  "/images/WithSky.jpg",
  "/images/DSC03970-1-scaled.jpg",
  "/images/DSC03148.jpg",
  "/images/DSC05761.jpg",
  "/images/DSC06835-scaled.jpg",
  "/images/ArnarstapiCottage-scaled.webp",
  "/images/DSC03021-scaled.webp",
  "/images/DSC04222-scaled.webp",
];

const allImages = [...portraits, ...landscapes];

type Category = "all" | "portrait" | "landscape";

const Photo = () => {
  const [category, setCategory] = useState<Category>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayImages =
    category === "portrait" ? portraits : category === "landscape" ? landscapes : allImages;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
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
            Photo
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px bg-primary mb-12"
          />

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6 mb-12"
          >
            {(["all", "portrait", "landscape"] as Category[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-1 border-b ${
                  category === cat
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {displayImages.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="break-inside-avoid cursor-pointer group overflow-hidden"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={src}
                  alt={`Photography by Leed ${i + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={displayImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % displayImages.length)}
      />
    </PageTransition>
  );
};

export default Photo;
