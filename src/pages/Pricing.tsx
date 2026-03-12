import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const portraitTiers = [
  {
    name: "The Mini",
    price: "$250",
    features: ["20–30 minutes", "1 location", "15–20 edited photos"],
  },
  {
    name: "The Standard",
    price: "$425",
    features: ["60 minutes", "1–2 outfits", "1 location", "40–50+ edited photos"],
  },
  {
    name: "The Extended",
    price: "$650",
    features: [
      "90 minutes",
      "Ideal for large / extended families",
      "Multiple group combinations",
      "All best edited photos included",
    ],
  },
];

const weddingPhotoTiers = [
  {
    name: "Elopements & Micro Weddings",
    price: "Starting at $1,800",
    features: ["3–4 hours of coverage", "Curated online gallery"],
  },
  {
    name: "Standard Wedding Day",
    price: "Starting at $2,400",
    features: ["4–8 hours of coverage", "Up to 3 locations", "Curated online gallery", "Timeline planning support"],
  },
  {
    name: "Full Day Collection",
    price: "Starting at $3,500",
    features: ["10+ hours of coverage", "Engagement or bridal session included", "Curated online gallery"],
  },
];

const weddingFilmTiers = [
  {
    name: "Highlight Film",
    price: "Starting at $2,000",
    features: [
      "3–5 minute cinematic highlight film",
      "Professional audio from vows and speeches where available",
    ],
  },
  {
    name: "Complete Film Collection",
    price: "Starting at $3,500",
    features: [
      "3–5 minute cinematic highlight film",
      "Full ceremony edit",
      "Speeches / toasts edit",
    ],
  },
  {
    name: "Raw Footage Only",
    price: "$1,000",
    features: [
      "Full unedited footage from your day",
      "Find your own editor",
    ],
  },
];

const commercialVideoTiers = [
  {
    name: "Social Media Promo",
    price: "Starting at $500",
    features: [
      "30–60 second vertical or horizontal promo",
      "Up to 2 hours on site",
      "Licensed music & simple text overlays",
      "Perfect for Instagram Reels, TikTok & ad campaigns",
    ],
  },
  {
    name: "Brand Story / Overview",
    price: "Starting at $1,200",
    features: [
      "60–120 second cinematic overview",
      "B-roll + interview audio, on-location",
      "Half-day on site",
      "Basic script/outline support",
    ],
  },
  {
    name: "Interview / Talking Head",
    price: "Starting at $700",
    features: [
      "Up to 60 minutes on site",
      "1-camera setup + b-roll, clean audio & lighting",
      "One main edit (2–5 min)",
      "Half-day interview block available from $1,500",
    ],
  },
];

const commercialPhotoOfferings = [
  { label: "Product Photography", price: "Starting at $400", desc: "Up to 10 products, 3–5 images each. Commercial usage rights included." },
  { label: "Real Estate & Airbnb", price: "Starting at $200", desc: "Up to 50 edited photos. Drone, twilight & video walkthrough add-ons available. Travel beyond 10 miles may include additional fees depending on distance." },
  { label: "Sports / Motion Photography", price: "Starting at $250", desc: "Game & event coverage up to 2 hours. Action portrait sessions from $300." },
  { label: "Landscape / Fine Art Prints", price: "From $100+", desc: "Framed fine art prints. Contact for custom sizes and installations." },
];

const CardGrid = ({
  tiers,
  buttonText,
  buttonLink,
  delayStart = 0.2,
}: {
  tiers: { name: string; price: string; features: string[] }[];
  buttonText: string;
  buttonLink: string;
  delayStart?: number;
}) => (
  <div className={`grid grid-cols-1 ${tiers.length === 2 ? "md:grid-cols-2 max-w-4xl mx-auto" : "md:grid-cols-3"} gap-8`}>
    {tiers.map((tier, i) => (
      <motion.div
        key={tier.name}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delayStart + i * 0.1 }}
        className="border border-border rounded-sm bg-card p-8 flex flex-col items-center text-center"
      >
        <h3 className="font-display text-2xl font-semibold text-foreground mb-2">{tier.name}</h3>
        <p className="font-display text-3xl font-bold text-primary mb-8">{tier.price}</p>
        <ul className="space-y-3 mb-10 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="font-body text-muted-foreground text-sm">{f}</li>
          ))}
        </ul>
        <Link
          to={buttonLink}
          className="font-display text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 rounded-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {buttonText}
        </Link>
      </motion.div>
    ))}
  </div>
);

const SectionHeading = ({
  title,
  subtitle,
  delay = 0.1,
  as = "h2",
}: {
  title: string;
  subtitle: string;
  delay?: number;
  as?: "h1" | "h2" | "h3";
}) => {
  const Tag = as;
  const sizeClass = as === "h1" ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
        <Tag className={`font-display ${sizeClass} font-semibold text-center mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent`}>
          {title}
        </Tag>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.1 }}
        className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto"
      >
        {subtitle}
      </motion.p>
    </>
  );
};

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* ─── PHOTOGRAPHY ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground">Photography</span>
          <div className="mt-2 w-12 h-px bg-primary mx-auto" />
        </motion.div>

        {/* Portrait Photography */}
        <SectionHeading as="h1" title="Portrait Photography" subtitle="Choose the session that fits your needs" delay={0.1} />
        <CardGrid tiers={portraitTiers} buttonText="Book Now" buttonLink="/contact" delayStart={0.2} />

        {/* Weddings & Events – Photography */}
        <div className="mt-32">
          <SectionHeading title="Weddings & Events – Photography" subtitle="Transparent coverage options for your day." delay={0.3} />
          <CardGrid tiers={weddingPhotoTiers} buttonText="Check Availability" buttonLink="/contact" delayStart={0.4} />
        </div>

        {/* Commercial Photography */}
        <div className="mt-32">
          <SectionHeading title="Other Photography" subtitle="Professional imagery for businesses and brands." delay={0.5} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {commercialPhotoOfferings.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="border border-border rounded-sm bg-card p-6"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.label}</h3>
                  <span className="font-display text-sm font-bold text-primary whitespace-nowrap ml-3">{item.price}</span>
                </div>
                <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-8"
          >
            <Link
              to="/contact"
              className="font-display text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 rounded-sm transition-colors hover:bg-primary hover:text-primary-foreground inline-block"
            >
              Get a Custom Quote
            </Link>
          </motion.div>
        </div>

        {/* ─── DIVIDER ─── */}
        <div className="my-32 flex items-center gap-6">
          <div className="flex-1 h-px bg-border" />
          <span className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground">Video</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ─── VIDEO ─── */}

        {/* Wedding Films */}
        <div className="mb-32">
          <SectionHeading title="Wedding Films" subtitle="Cinematic storytelling for the moments that move." delay={0.1} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            {/* Text / Packages */}
            <div className="space-y-8">
              {weddingFilmTiers.map((tier, i) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="border border-border rounded-sm bg-card p-6"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">{tier.name}</h3>
                  <p className="font-display text-2xl font-bold text-primary mb-4">{tier.price}</p>
                  <ul className="space-y-2">
                    {tier.features.map((f) => (
                      <li key={f} className="font-body text-muted-foreground text-sm">{f}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  to="/video"
                  className="font-display text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 rounded-sm transition-colors hover:bg-primary hover:text-primary-foreground inline-block"
                >
                  View More Films
                </Link>
              </motion.div>
            </div>
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-sm overflow-hidden"
            >
              <img
                src="/images/DSC03306-scaled.webp"
                alt="Wedding film still"
                className="w-full h-full object-cover aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>

        {/* Commercial & Brand Video */}
        <div className="mb-16">
          <SectionHeading title="Commercial & Brand Video" subtitle="Engaging video content for restaurants, gyms, clinics & local businesses." delay={0.3} />
          <CardGrid tiers={commercialVideoTiers} buttonText="Get a Quote" buttonLink="/contact" delayStart={0.4} />
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center border-t border-border pt-16"
        >
          <p className="font-body text-muted-foreground max-w-lg mx-auto mb-6">
            Every project is different — reach out for a custom quote tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="font-display text-sm tracking-widest uppercase bg-primary text-primary-foreground px-10 py-4 rounded-sm transition-colors hover:bg-primary/90 inline-block"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
