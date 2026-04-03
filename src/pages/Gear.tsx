import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import usePageSEO from "@/hooks/usePageSEO";

interface GearItem {
  name: string;
  description: string;
  link: string;
  badge?: string;
  image?: string;
}

interface GearSection {
  title: string;
  items: GearItem[];
}

const gearSections: GearSection[] = [
  {
    title: "Cameras",
    items: [
      {
        name: "Sony Alpha 7 V Full Frame",
        description: "The newest model in the Alpha 7 lineup — a powerhouse for both photo and video with AI-based autofocus and incredible low-light performance.",
        link: "https://amzn.to/4ckHEoK",
        badge: "Latest Model",
        image: "/images/gear/a7v.jpg",
      },
      {
        name: "Sony Alpha 7 IV Full Frame",
        description: "My current workhorse. Reliable, versatile, and delivers stunning results in every shooting scenario.",
        link: "https://amzn.to/4toq5Kf",
        badge: "My Pick",
        image: "/images/gear/a7iv.jpg",
      },
      {
        name: "Sony Alpha 6700 APS-C",
        description: "A great crop-sensor alternative if you want to save money while still getting outstanding image quality.",
        link: "https://amzn.to/3OfUMlW",
        image: "/images/gear/a6700.jpg",
        badge: "Budget – Smaller Sensor",
      },
    ],
  },
  {
    title: "Lenses",
    items: [
      {
        name: "Sony 55mm F1.8 FE ZA Full Frame Prime Lens",
        description: "The nifty fifty...five. Perfect for all the portraits you could ever imagine taking.",
        link: "https://amzn.to/4c8BO8P",
        image: "/images/gear/sony55mm.jpg",
      },
      {
        name: "Sony 85mm F1.4 GM Lens",
        description: "Another classic for portraits. That bokeh though.",
        link: "https://amzn.to/4sPKZ4X",
        badge: "Premium Pick",
        image: "/images/gear/sony85mm.jpg",
      },
      {
        name: "Sony 70-200mm F2.8 GM OSS II Lens",
        description: "Great for candids without getting too up close and personal.",
        link: "https://amzn.to/4vafa8z",
        image: "/images/gear/sony70200mm.jpg",
      },
      {
        name: "Tamron 28-75mm F2.8 Di III VXD G2",
        description: "The perfect all-arounder when you need to adjust zoom without swapping lenses every five seconds.",
        link: "https://amzn.to/3NWHCdy",
        badge: "My Pick",
        image: "/images/gear/tamron2875mm.jpg",
      },
      {
        name: "Rokinon AF 14mm F2.8 Ultra Wide Lens",
        description: "Full frame and APS-C compatible. I have the older version, but you should get this one. Great for landscapes and astrophotography!",
        link: "https://amzn.to/4cnrdYQ",
        image: "/images/gear/rokinon14mm.jpg",
      },
    ],
  },
  {
    title: "Batteries & Grips",
    items: [
      {
        name: "Sony NP-FZ100 Battery",
        description: "The official Sony battery. I've never needed to buy extra — the one that comes with the camera has been more than enough for me.",
        link: "https://amzn.to/4cmWV8x",
        image: "/images/gear/sonybatt.jpg",
      },
      {
        name: "Llano NP-FZ100 2-Pack with Charger",
        description: "An off-brand option I've always used. Works great and costs a fraction of the price.",
        link: "https://amzn.to/4dmAKjV",
        badge: "My Pick",
        image: "/images/gear/llanobatt.jpg",
      },
      {
        name: "K&F NP-FZ100 3-Pack with Charger",
        description: "Another excellent budget-friendly battery option with a convenient charger included.",
        link: "https://amzn.to/47ZtVRZ",
        image: "/images/gear/kfbatt.jpg",
      },
      {
        name: "Sony Vertical Battery Grip",
        description: "Doubles your battery life and adds a comfortable vertical grip for portrait shooting.",
        link: "https://amzn.to/4tpxqsS",
        image: "/images/gear/sonygrip.jpg",
      },
      {
        name: "Meike Vertical Battery Grip with Remote",
        description: "The included remote makes this a standout — it works from an impressive distance and is perfect for self-portraits or group shots.",
        link: "https://amzn.to/4s9WoM0",
        badge: "Remote Included",
        image: "/images/gear/meikegrip.jpg",
      },
    ],
  },
  {
    title: "Drones",
    items: [
      {
        name: "DJI Mini 5 Pro Fly More Combo",
        description: "Under 250g, so you can fly without FAA registration. Perfect for stunning aerial shots without the paperwork.",
        link: "https://amzn.to/3NKsn7s",
        image: "/images/gear/djimini5pro.jpg",
      },
      {
        name: "DJI Mini 5 Pro Fly More Combo Plus",
        description: "My choice for commercial work. If you plan on getting your Part 107 FAA certificate, this is the way to go.",
        link: "https://amzn.to/4clr9ZE",
        badge: "My Pick",
        image: "/images/gear/djimini5pro.jpg",
      },
      {
        name: "DJI Mini 4K Fly More Combo",
        description: "A more budget-friendly drone that still captures amazing 4K footage. Great for hobbyists and casual aerial photography.",
        link: "https://amzn.to/4s7yelb",
        image: "/images/gear/mini4k.jpg",
      },
    ],
  },
  {
    title: "Tripods",
    items: [
      {
        name: "Manfrotto Befree Camera Tripod",
        description: "The ball head on this tripod is a game changer — you won't regret having one when you need to nail that perfect angle.",
        link: "https://amzn.to/4bLD4zK",
        badge: "My Pick",
        image: "/images/gear/manfrottobefree.jpg",
      },
      {
        name: "K&F Concept Camera Tripod",
        description: "A solid, budget-friendly tripod that gets the job done without breaking the bank.",
        link: "https://amzn.to/4seDQdz",
        image: "/images/gear/kftripod.jpg",
      },
    ],
  },
  {
    title: "Lighting",
    items: [
      {
        name: "Smallrig 35\" Octagon Softbox",
        description: "Features a Bowens Mount quick-release system that makes setup and teardown a breeze.",
        link: "https://amzn.to/4seDQdz",
        image: "/images/gear/softbox.jpg",
      },
      {
        name: "Godox V860II-S TTL Flash for Sony",
        description: "A reliable on-camera flash that also works as an off-camera flash when paired with the wireless trigger.",
        link: "https://amzn.to/4s5fHG5",
        badge: "My Pick",
        image: "/images/gear/godoxv860iis.jpg",
      },
      {
        name: "Godox XproS TTL Wireless Flash Trigger",
        description: "Pairs with the Godox V860II-S for wireless off-camera flash control. A must-have for creative lighting setups.",
        link: "https://amzn.to/41PU0z3",
        image: "/images/gear/godoxxpros.jpg",
      },
      {
        name: "Godox S Type Bracket (Bowens Mount)",
        description: "Holds speedlites securely on a tripod or light stand. Makes quick angle adjustments effortless.",
        link: "https://amzn.to/4tkRgWg",
        image: "/images/gear/godoxsbracket.jpg",
      },
      {
        name: "Aputure Amaran COB 60xS Video Light",
        description: "An excellent entry-level continuous video light with Bowens Mount. Perfect for streaming and smaller studio setups.",
        link: "https://amzn.to/4tvGOvj",
        image: "/images/gear/amaran.jpg",
      },
    ],
  },
  {
    title: "Bags & Storage",
    items: [
      {
        name: "Shimoda Core Unit Medium Camera Insert",
        description: "Don't want to spend $400 on a dedicated camera bag? Grab a cheap backpack and use this insert to convert it into one.",
        link: "https://amzn.to/4sRum9f",
        badge: "Budget Hack",
        image: "/images/gear/shimoda.jpg",
      },
      {
        name: "Nomatic Peter McKinnon Camera Pack 25L",
        description: "If you have the budget, this bag is a dream for any photo and video professional. Thoughtfully designed from top to bottom.",
        link: "https://amzn.to/4clW9bP",
        badge: "Premium Pick",
        image: "/images/gear/nomatic.jpg",
      },
      {
        name: "Osprey Farpoint 40L Travel Backpack",
        description: "My go-to travel bag on every trip. Fits everything I need and still qualifies as a carry-on.",
        link: "https://amzn.to/4bR12K4",
        badge: "My Pick",
        image: "/images/gear/osprey.jpg",
      },
    ],
  },
  {
    title: "Video Accessories",
    items: [
      {
        name: "SmallRig HawkLock Quick Release Cage for Sony Alpha 7",
        description: "Ready to get serious about video? This cage adds mounting points and protection for professional rigging.",
        link: "https://amzn.to/4va4ruV",
        image: "/images/gear/smallrighawklock.jpg",
      },
      {
        name: "Atomos Shinobi II 5.2\" HDMI Camera Monitor",
        description: "A sharp, bright external monitor so you can frame your shots without squinting at a tiny screen.",
        link: "https://amzn.to/4cn7hoX",
        image: "/images/gear/atomosmonitor.jpg",
      },
    ],
  },
];

const Gear = () => {
  usePageSEO({
    title: "My Gear | LeeD Photography",
    description: "The cameras, lenses, drones, lighting, and accessories I use for professional photography and videography. Affiliate links included.",
    canonical: "https://leedphotography.com/gear",
  });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-light tracking-tight"
        >
          My <span className="text-primary font-semibold">Gear</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-muted-foreground max-w-2xl mx-auto"
        >
          Here's what I shoot with. These are the tools I trust to deliver professional results on every job.
          Some links are affiliate links — they help support my work at no extra cost to you.
        </motion.p>
      </section>

      {/* Gear Sections */}
      {gearSections.map((section, sIdx) => (
        <section
          key={section.title}
          className="px-6 md:px-12 pb-20"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl font-light tracking-tight mb-8 border-b border-border pb-4"
          >
            {section.title}
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.items.map((item, iIdx) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: iIdx * 0.08 }}
                className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                {item.image && (
                  <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-lg bg-muted/30">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-contain p-4"
                      loading="lazy"
                    />
                  </div>
                )}

                {item.badge && (
                  <span className={`${item.image ? '' : 'absolute top-4 right-4 '}text-xs font-medium bg-primary/15 text-primary px-2.5 py-1 rounded-full inline-block mb-2`}>
                    {item.badge}
                  </span>
                )}

                <h3 className="font-display text-lg font-medium text-foreground leading-snug">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View on Amazon</span>
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      ))}

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-20">
        <p className="text-xs text-muted-foreground text-center max-w-xl mx-auto">
          As an Amazon Associate, I earn from qualifying purchases. This comes at no additional cost to you and helps support the content I create.
        </p>
      </section>
    </PageTransition>
  );
};

export default Gear;
