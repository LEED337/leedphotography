import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const videos = [
  { category: "Wedding", title: "Wedding", vimeoId: "1050354281" },
  { category: "Commercial", title: "Business", vimeoId: "372444561" },
  { category: "Creative", title: "Creative", vimeoId: "1041178358" },
  { category: "Restaurant", title: "Restaurants", vimeoId: "372438054" },
  { category: "Fitness", title: "Fitness", vimeoId: "372450693" },
];

const Video = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-light text-foreground mb-4"
          >
            Videography Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground mb-4 max-w-2xl"
          >
            Professional videography services in Utah — cinematic wedding films, event coverage, restaurant promos, and commercial video for gyms, service companies, and local businesses.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-px bg-primary mb-16"
          />

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
                    title={`${video.title} - Utah ${video.category.toLowerCase()} videography by Leed Photography`}
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