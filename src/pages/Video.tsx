import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import usePageSEO from "@/hooks/usePageSEO";

const videos = [
  { category: "Wedding", title: "Wedding Films", vimeoId: "1050354281", alt: "Cinematic wedding film highlight from Lehi, Utah wedding" },
  { category: "Commercial", title: "Business & Brand", vimeoId: "372444561", alt: "Commercial promo video for Utah County business" },
  { category: "Creative", title: "Creative", vimeoId: "1041178358", alt: "Creative documentary video project in Utah" },
  { category: "Restaurant", title: "Restaurant Promos", vimeoId: "372438054", alt: "Restaurant promotional video for Salt Lake City eatery" },
  { category: "Fitness", title: "Fitness & Gym", vimeoId: "372450693", alt: "Gym and fitness promotional video in Utah" },
];

const Video = () => {
  usePageSEO({
    title: "Videography Portfolio | Lehi Wedding Videographer",
    description: "Cinematic wedding films and commercial video in Lehi, Utah. Wedding videography, restaurant promos, and brand videos for Utah County and Salt Lake City.",
    canonical: "https://leedphotography.com/video",
  });

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground mb-4"
          >
            Wedding &amp; Commercial Video
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground mb-4 max-w-2xl"
          >
            Cinematic wedding films, event coverage, restaurant promos, and commercial video for Lehi, Utah County, and Salt Lake City businesses.
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
            className="flex flex-wrap gap-6 mb-16"
          >
            <Link to="/photo" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              Browse the photography portfolio
            </Link>
            <Link to="/pricing" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              View video pricing &amp; packages
            </Link>
            <Link to="/contact" className="font-body text-sm text-primary underline underline-offset-4 hover:text-primary/80 transition-colors">
              Check availability for your date
            </Link>
          </motion.div>

          <div className="space-y-20">
            {videos.map((video, i) => (
              <motion.div
                key={video.vimeoId}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <h2 className="font-display text-xl md:text-2xl text-primary mb-6">
                  {video.title}
                </h2>
                <div className="relative w-full aspect-video bg-secondary overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?h=0&title=0&byline=0&portrait=0&color=c9a96e`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={video.alt}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Video;
