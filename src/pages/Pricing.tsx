import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tiers = [
  {
    name: "The Mini",
    price: "$250",
    features: [
      "20–30 minutes",
      "1 location",
      "15–20 edited photos",
    ],
  },
  {
    name: "The Standard",
    price: "$425",
    features: [
      "60 minutes",
      "1–2 outfits",
      "1 location",
      "40–50+ edited photos",
    ],
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

const Pricing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background pt-32 pb-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-semibold text-center mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent"
        >
          Portrait Photography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        >
          Choose the session that fits your needs
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="border border-border rounded-sm bg-card p-8 flex flex-col items-center text-center"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                {tier.name}
              </h2>
              <p className="font-display text-3xl font-bold text-primary mb-8">
                {tier.price}
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-muted-foreground text-sm"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="font-display text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 rounded-sm transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Weddings & Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-32"
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-4 bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Weddings &amp; Events – Photography
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Transparent coverage options for your day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Elopements & Micro Weddings",
                price: "Starting at $1,800",
                features: ["3–4 hours of coverage", "Curated online gallery"],
              },
              {
                name: "Standard Wedding Day",
                price: "Starting at $2,400",
                features: [
                  "6–8 hours of coverage",
                  "Curated online gallery",
                  "Timeline planning support",
                ],
              },
              {
                name: "Full Day Collection",
                price: "Starting at $3,500",
                features: [
                  "10+ hours of coverage",
                  "Engagement or bridal session included",
                  "Curated online gallery",
                ],
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="border border-border rounded-sm bg-card p-8 flex flex-col items-center text-center"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="font-display text-3xl font-bold text-primary mb-8">
                  {tier.price}
                </p>
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="font-body text-muted-foreground text-sm">
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="font-display text-sm tracking-widest uppercase border border-primary text-primary px-8 py-3 rounded-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Check Availability
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Pricing;
