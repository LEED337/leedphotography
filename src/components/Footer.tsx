import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <p className="font-display text-sm text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Leed Photography
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/followtheleed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow Leed Photography on Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://vimeo.com/leedenning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Watch Leed Photography videos on Vimeo"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 6.5c-.1 2.1-1.6 5-4.4 8.7C14.7 19 12.3 21 10.4 21c-1.2 0-2.2-1.1-3-3.3L5.7 11c-.5-2.2-1.1-3.3-1.7-3.3-.1 0-.6.3-1.4.8L1.7 7.2c.9-.8 1.8-1.6 2.6-2.4C5.8 3.5 7 2.8 7.8 2.7c1.5-.1 2.4.9 2.8 3.1.4 2.4.7 3.8.9 4.4.5 2.2 1 3.3 1.6 3.3.5 0 1.1-.7 2-2.2.8-1.4 1.3-2.5 1.3-3.3.1-1.3-.4-2-1.5-2-.5 0-1.1.1-1.6.4 1.1-3.5 3.1-5.2 6-5.1 2.2.1 3.2 1.5 3.1 4.2z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@FollowTheLeeD"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Watch Leed Photography videos on YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <p className="font-body text-xs text-muted-foreground/70 text-center">
          Serving Lehi, American Fork, Provo, Orem, Salt Lake City, and the Wasatch Front.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
